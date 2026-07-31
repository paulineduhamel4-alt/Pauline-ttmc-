import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'
import 'dotenv/config'

const PORT = process.env.PORT || 3001
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001'

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('\n❌ ANTHROPIC_API_KEY manquante. Crée un fichier .env avec ta clé (voir .env.example)\n')
  process.exit(1)
}

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const app = express()
app.use(cors())
app.use(express.json({ limit: '1mb' }))

const SYSTEM_PROMPT = `Tu es un expert en création de quiz de culture générale en français.
Tu génères UN thème avec exactement 10 questions calibrées par difficulté croissante (1 = très facile, 10 = très difficile / d'expert).
Ta réponse est UNIQUEMENT un objet JSON valide, sans texte autour, sans backticks, sans markdown.`

function themePrompt(existingThemes, seed) {
  const list = existingThemes.length ? existingThemes.slice(0, 40).join(', ') : '(aucun)'
  return `Génère UN nouveau thème original de quiz de culture générale en français.
Graine créative pour varier : ${seed}

CONTRAINTES CRITIQUES :
- Le thème doit être ORIGINAL et différent de ceux-ci (ni identique, ni très proche) : ${list}
- Il doit être précis, évocateur, curieux — PAS générique.
  ✅ Bons exemples : "Les phares mythiques", "Les épidémies animales", "Les poisons dans l'histoire", "Les sables du monde", "Les danses urbaines"
  ❌ Trop générique : "Les animaux", "L'histoire", "Le sport", "La musique"

Génère EXACTEMENT 10 questions calibrées par difficulté :
- Niveaux 1-5 : questions à choix multiples (4 options), difficulté progressive facile → moyenne
- Niveaux 6-7 : questions ouvertes (réponse libre courte), difficulté moyenne-haute
- Niveaux 8-10 : questions à choix multiples (4 options), difficulté haute → expert

Format JSON strict à respecter à la lettre :
{
  "t": "Nom du thème (commençant par un article, sans emoji)",
  "e": "un seul emoji représentatif",
  "q": [
    ["Question niveau 1 ?", "m", ["Option A", "Option B", "Option C", "Option D"], 0],
    ["Question niveau 2 ?", "m", ["...", "...", "...", "..."], 2],
    ["Question niveau 3 ?", "m", ["...", "...", "...", "..."], 1],
    ["Question niveau 4 ?", "m", ["...", "...", "...", "..."], 3],
    ["Question niveau 5 ?", "m", ["...", "...", "...", "..."], 0],
    ["Question niveau 6 ?", "o", "Réponse attendue concise"],
    ["Question niveau 7 ?", "o", "Réponse attendue concise"],
    ["Question niveau 8 ?", "m", ["...", "...", "...", "..."], 2],
    ["Question niveau 9 ?", "m", ["...", "...", "...", "..."], 1],
    ["Question niveau 10 ?", "m", ["...", "...", "...", "..."], 3]
  ]
}

RÈGLES ABSOLUES :
- La réponse est UNIQUEMENT le JSON, aucun texte avant ou après
- Les 4 options doivent être toutes plausibles (pas d'options absurdes)
- L'index de la bonne réponse (0 à 3) doit VARIER entre les questions (ne pas mettre toujours 2)
- Les questions ouvertes ("o") ont une réponse courte et factuellement vérifiable
- Toutes les réponses doivent être VRAIES (vérifiables), pas d'invention
- Ton conversationnel, français naturel, questions engageantes`
}

function extractJSON(text) {
  let s = text.trim()
  s = s.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim()
  const start = s.indexOf('{')
  const end = s.lastIndexOf('}')
  if (start !== -1 && end !== -1) s = s.slice(start, end + 1)
  return JSON.parse(s)
}

function validateTheme(t) {
  if (!t || typeof t !== 'object') throw new Error('theme non-objet')
  if (typeof t.t !== 'string' || !t.t.trim()) throw new Error('t manquant')
  if (typeof t.e !== 'string' || !t.e.trim()) throw new Error('e manquant')
  if (!Array.isArray(t.q) || t.q.length !== 10) throw new Error(`q doit avoir 10 questions (reçu ${t.q?.length})`)
  t.q.forEach((q, i) => {
    if (!Array.isArray(q) || q.length < 3) throw new Error(`q[${i}] invalide`)
    if (typeof q[0] !== 'string') throw new Error(`q[${i}][0] doit être string`)
    if (q[1] === 'm') {
      if (!Array.isArray(q[2]) || q[2].length !== 4) throw new Error(`q[${i}] mcq: 4 options requises`)
      if (typeof q[3] !== 'number' || q[3] < 0 || q[3] > 3) throw new Error(`q[${i}] mcq: index invalide`)
    } else if (q[1] === 'o') {
      if (typeof q[2] !== 'string' || !q[2].trim()) throw new Error(`q[${i}] open: réponse manquante`)
    } else {
      throw new Error(`q[${i}] type doit être "m" ou "o"`)
    }
  })
  return t
}

async function generateOne(existingThemes, seed, attempt = 1) {
  const msg = await client.messages.create({
    model: MODEL,
    max_tokens: 2500,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: themePrompt(existingThemes, seed) }]
  })
  const text = msg.content.find(c => c.type === 'text')?.text || ''
  try {
    return validateTheme(extractJSON(text))
  } catch (e) {
    if (attempt < 2) return generateOne(existingThemes, seed + ' (bis)', attempt + 1)
    console.error(`[gen] échec après ${attempt} tentatives:`, e.message, '\n--- réponse brute ---\n', text.slice(0, 500))
    return null
  }
}

app.post('/api/generate', async (req, res) => {
  const count = Math.min(Math.max(Number(req.body?.count) || 15, 1), 25)
  const existingThemes = Array.isArray(req.body?.existingThemes) ? req.body.existingThemes : []
  const seeds = [
    'nature et environnement','histoire méconnue','sciences et techniques','arts et culture',
    'gastronomie mondiale','voyages et géographie','sports insolites','animaux surprenants',
    'objets du quotidien','métiers oubliés','traditions du monde','mythologie',
    'inventions célèbres','architecture','musique','cinéma classique',
    'littérature','photographie','médecine','astronomie','économie','psychologie',
    'chimie amusante','ingénierie','artisanat'
  ]
  const seedList = Array.from({ length: count }, (_, i) => seeds[Math.floor(Math.random() * seeds.length)] + ` #${i+1}`)
  console.log(`[gen] ${count} thèmes en parallèle avec ${MODEL}…`)
  const t0 = Date.now()
  try {
    const results = await Promise.all(seedList.map(seed => generateOne(existingThemes, seed)))
    const themes = results.filter(Boolean)
    const seen = new Set(existingThemes.map(t => t.toLowerCase().trim()))
    const unique = themes.filter(t => {
      const k = t.t.toLowerCase().trim()
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
    console.log(`[gen] ✅ ${unique.length}/${count} thèmes valides en ${((Date.now()-t0)/1000).toFixed(1)}s`)
    res.json({ themes: unique, requested: count, generated: unique.length })
  } catch (e) {
    console.error('[gen] erreur globale:', e)
    res.status(500).json({ error: e.message || 'erreur serveur' })
  }
})

app.get('/api/health', (_, res) => res.json({ ok: true, model: MODEL }))

app.listen(PORT, () => {
  console.log(`\n🚀 Backend TTMC prêt sur http://localhost:${PORT}`)
  console.log(`   Modèle : ${MODEL}\n`)
})
