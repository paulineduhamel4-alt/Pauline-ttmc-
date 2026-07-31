import express from 'express'
import cors from 'cors'
import crypto from 'crypto'
import path from 'path'
import { fileURLToPath } from 'url'
import Anthropic from '@anthropic-ai/sdk'
import 'dotenv/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT || 3001
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001'
const JUDGE_MODEL = process.env.ANTHROPIC_JUDGE_MODEL || MODEL
const APP_PIN = (process.env.APP_PIN || '').trim()
const IS_PROD = process.env.NODE_ENV === 'production'

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('\n❌ ANTHROPIC_API_KEY manquante. Crée un fichier .env (voir .env.example)\n')
  process.exit(1)
}

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const app = express()
app.use(cors())
app.use(express.json({ limit: '2mb' }))

/* ---------------------- PIN middleware ---------------------- */
function requirePin(req, res, next) {
  if (!APP_PIN) return next()
  const pin = String(req.headers['x-pin'] || '').trim()
  if (pin === APP_PIN) return next()
  res.status(401).json({ error: 'pin_required' })
}

app.get('/api/config', (_, res) => res.json({ pinRequired: !!APP_PIN }))

app.post('/api/check-pin', (req, res) => {
  if (!APP_PIN) return res.json({ ok: true })
  const pin = String(req.body?.pin || '').trim()
  if (pin === APP_PIN) return res.json({ ok: true })
  res.status(401).json({ error: 'invalid_pin' })
})

/* ---------------------- Génération de thèmes ---------------------- */

const SEED_NOUNS = [
  'phares','déserts','volcans','tsunamis','cavernes','glaciers','forêts','jungles','marais','lagons',
  'îles perdues','archipels','rivières','geysers','canyons','récifs','abysses','cratères','falaises','dunes',
  'papillons','méduses','pieuvres','requins','hiboux','baleines','fourmis','abeilles','loups','ours',
  'dinosaures','poissons abyssaux','coraux','crocodiles','serpents','araignées','oiseaux migrateurs','insectes rares','reptiles','amphibiens',
  'épices','fromages','pains du monde','desserts','boissons fermentées','plats de rue','cuisines nomades','marchés','festivals culinaires','banquets royaux',
  'châteaux','forteresses','cathédrales','temples','tombes royales','ponts historiques','tunnels','métros','gratte-ciels','villes englouties',
  'pirates','samouraïs','vikings','chevaliers','gladiateurs','espions','explorateurs','alchimistes','moines','courtisans',
  'inventions oubliées','instruments de musique','jouets anciens','vêtements historiques','armures','bijoux','parfums','cosmétiques','maquillages','tatouages',
  'monnaies étranges','langues mortes','écritures anciennes','codes secrets','énigmes','labyrinthes','jeux de société','sports oubliés','arts martiaux','danses rituelles',
  'peintres maudits','sculpteurs','écrivains disparus','poètes','philosophes antiques','musiciens fous','compositeurs','architectes','photographes','cinéastes',
  'astronomie','trous noirs','planètes naines','comètes','météorites','satellites','fusées','missions martiennes','stations spatiales','télescopes',
  'maladies éradiquées','virus','pandémies','médicaments célèbres','plantes médicinales','chirurgies historiques','vaccins','remèdes de grand-mère','poisons','antidotes',
  'utopies','sectes','sociétés secrètes','religions oubliées','mythologies rares','démons','anges','esprits','cryptides','fantômes',
  'trésors perdus','navires fantômes','naufrages','cartes anciennes','expéditions polaires','routes commerciales','contrebandes','pillages','duels célèbres','coups d\'État',
  'jeux vidéo cultes','arcades','consoles oubliées','mangas','séries télé','dessins animés','films noirs','westerns','musicals','documentaires',
  'métiers oubliés','artisanats','outils anciens','machines à vapeur','automates','horloges','mécanismes','robots historiques','ordinateurs oubliés','crypto',
  'catastrophes naturelles','tempêtes','ouragans','avalanches','éruptions','inondations','sécheresses','feux de forêt','tornades','tremblements de terre',
  'plantes carnivores','arbres millénaires','fleurs rares','fruits exotiques','graines voyageuses','herbes aromatiques','mousses','fougères','cactus','orchidées',
  'saisons','fêtes traditionnelles','calendriers','solstices','éclipses','marées','courants marins','vents','nuages','couleurs du ciel'
]
const ANGLES = ['insolite','oublié(e)','dangereux(se)','sacré(e)','maudit(e)','célèbre','mystérieux(se)','extrême','ancien(ne)','contemporain(e)','clandestin(e)','sauvage','exotique','curieux(se)','étrange']
const REGIONS = ['du monde','d\'Asie','d\'Amérique','d\'Afrique','d\'Europe','du Pacifique','du Moyen-Orient','des tropiques','du Grand Nord','de France']
const ERAS = ['','antique(s)','médiéval(e)','de la Renaissance','du XIXᵉ siècle','du XXᵉ siècle','contemporain(e)','préhistorique(s)','de l\'Antiquité','moderne']

function pickR(arr) { return arr[Math.floor(Math.random() * arr.length)] }

function buildSeed() {
  const noun = pickR(SEED_NOUNS)
  const angle = pickR(ANGLES)
  const region = Math.random() < 0.5 ? pickR(REGIONS) : ''
  const era = Math.random() < 0.4 ? pickR(ERAS) : ''
  const salt = crypto.randomBytes(4).toString('hex')
  return { noun, angle, region, era, salt, brief: `${noun} ${angle}${region ? ' ' + region : ''}${era ? ' ' + era : ''}`.trim() }
}

const TONE_INSTRUCTIONS = {
  familial: `Ton : familial et tout public. Thèmes accessibles (nature, animaux, science, histoire grand public, cuisine, sport, arts…). Zéro sujet cru, violent ou sexualisé.`,
  fun: `Ton : fun, décalé, pop culture. Aime les thèmes insolites, les records absurdes, la culture geek, les mèmes historiques, l'humour. Reste vérifiable.`,
  pointu: `Ton : pointu et exigeant. Cible un public cultivé (histoire fine, sciences, arts, géopolitique, philosophie…). Précision maximale, pas de banalités.`,
  adulte: `Ton : adulte assumé. Peut aborder sexualité, drogues, crimes célèbres, guerres, poisons, arnaques… tant que c'est factuel et vérifiable. Pas de gratuité choquante.`
}

function themePrompt({ existingThemes, seed, tone }) {
  const list = existingThemes.length ? existingThemes.slice(-60).join(' | ') : '(aucun)'
  const toneInstr = TONE_INSTRUCTIONS[tone] || TONE_INSTRUCTIONS.fun
  return `Génère UN nouveau thème de quiz de culture générale en français.

${toneInstr}

Graine créative (à utiliser librement pour t'inspirer, ne PAS reprendre telle quelle) : "${seed.brief}" [salt:${seed.salt}]

🚫 Thèmes DÉJÀ utilisés — INTERDITS et pas de synonymes proches :
${list}

CONTRAINTES :
- Le thème doit être ORIGINAL, précis, évocateur, curieux (jamais générique).
  ✅ Ex : "Les phares mythiques", "Les épidémies animales", "Les poisons dans l'histoire", "Les danses urbaines"
  ❌ Trop plat : "Les animaux", "Le sport", "L'histoire"
- 10 questions calibrées par difficulté croissante :
  · Niveaux 1-5 : QCM (4 options), faciles → moyennes
  · Niveaux 6-7 : question ouverte (réponse courte), moyenne-haute
  · Niveaux 8-10 : QCM (4 options), difficiles → expertes

Chaque question inclut une EXPLICATION courte (1-2 phrases max) qui donne un fait éclairant sur la réponse.

Format JSON strict (RÉPONSE = JSON PUR, rien avant ni après, pas de backticks) :
{
  "t": "Nom du thème (avec article, sans emoji)",
  "e": "un seul emoji",
  "q": [
    ["Question niveau 1 ?", "m", ["A","B","C","D"], 0, "Explication courte."],
    ["Question niveau 2 ?", "m", ["A","B","C","D"], 2, "Explication."],
    ["Question niveau 3 ?", "m", ["A","B","C","D"], 1, "Explication."],
    ["Question niveau 4 ?", "m", ["A","B","C","D"], 3, "Explication."],
    ["Question niveau 5 ?", "m", ["A","B","C","D"], 0, "Explication."],
    ["Question niveau 6 ?", "o", "Réponse courte", "Explication."],
    ["Question niveau 7 ?", "o", "Réponse courte", "Explication."],
    ["Question niveau 8 ?", "m", ["A","B","C","D"], 2, "Explication."],
    ["Question niveau 9 ?", "m", ["A","B","C","D"], 1, "Explication."],
    ["Question niveau 10 ?", "m", ["A","B","C","D"], 3, "Explication."]
  ]
}

RÈGLES ABSOLUES :
- JSON pur, aucun texte autour, aucun markdown
- Les 4 options d'un QCM sont toutes plausibles
- La bonne réponse est vérifiable et factuellement correcte
- L'index de bonne réponse (0-3) VARIE entre les questions, ne pas mettre toujours 2
- Français naturel, pas de tournures scolaires`
}

function extractJSON(text) {
  let s = text.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim()
  const start = s.indexOf('{'), end = s.lastIndexOf('}')
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
    } else throw new Error(`q[${i}] type doit être "m" ou "o"`)
  })
  return t
}

async function generateOne({ existingThemes, tone, attempt = 1 }) {
  const seed = buildSeed()
  const msg = await client.messages.create({
    model: MODEL,
    max_tokens: 3500,
    system: `Tu es un expert français en création de quiz de culture générale. Ta réponse est TOUJOURS un JSON pur, sans texte ni markdown autour.`,
    messages: [{ role: 'user', content: themePrompt({ existingThemes, seed, tone }) }]
  })
  const text = msg.content.find(c => c.type === 'text')?.text || ''
  try {
    return validateTheme(extractJSON(text))
  } catch (e) {
    if (attempt < 2) return generateOne({ existingThemes, tone, attempt: attempt + 1 })
    console.error(`[gen] échec ${attempt} tentatives:`, e.message)
    return null
  }
}

app.post('/api/generate', requirePin, async (req, res) => {
  const count = Math.min(Math.max(Number(req.body?.count) || 20, 1), 30)
  const existingThemes = Array.isArray(req.body?.existingThemes) ? req.body.existingThemes : []
  const tone = req.body?.tone || 'fun'
  console.log(`[gen] ${count} thèmes (ton: ${tone}), exclusions: ${existingThemes.length}…`)
  const t0 = Date.now()
  try {
    const results = await Promise.all(Array.from({ length: count }, () => generateOne({ existingThemes, tone })))
    const themes = results.filter(Boolean)
    const seen = new Set(existingThemes.map(t => normTitle(t)))
    const unique = themes.filter(t => {
      const k = normTitle(t.t)
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
    console.log(`[gen] ✅ ${unique.length}/${count} thèmes uniques en ${((Date.now() - t0) / 1000).toFixed(1)}s`)
    res.json({ themes: unique, requested: count, generated: unique.length })
  } catch (e) {
    console.error('[gen] erreur:', e)
    res.status(500).json({ error: e.message || 'erreur serveur' })
  }
})

function normTitle(t) {
  return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim()
}

/* ---------------------- Juge IA pour questions ouvertes ---------------------- */

app.post('/api/judge', requirePin, async (req, res) => {
  const { question, expected, answer } = req.body || {}
  if (!question || !expected || answer === undefined) {
    return res.status(400).json({ error: 'question, expected, answer requis' })
  }
  const userAns = String(answer).trim()
  if (!userAns) return res.json({ correct: false, feedback: "Aucune réponse donnée." })
  try {
    const msg = await client.messages.create({
      model: JUDGE_MODEL,
      max_tokens: 200,
      system: `Tu es un juge de quiz français. Tu compares une réponse d'utilisateur à la réponse attendue. Sois bienveillant : accepte les synonymes, les fautes de frappe raisonnables, les variantes (ex : "Ötzi" ≈ "l'homme des glaces", "Ali" ≈ "Muhammad Ali"). Refuse si la réponse est fausse ou hors-sujet. Réponds UNIQUEMENT par un JSON strict.`,
      messages: [{ role: 'user', content: `Question : "${question}"
Réponse attendue : "${expected}"
Réponse du joueur : "${userAns}"

Réponds par ce JSON exact :
{"correct": true|false, "feedback": "Une phrase courte : validation + précision si utile."}` }]
    })
    const text = msg.content.find(c => c.type === 'text')?.text || ''
    let verdict
    try {
      const s = text.trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim()
      const start = s.indexOf('{'), end = s.lastIndexOf('}')
      verdict = JSON.parse(s.slice(start, end + 1))
    } catch {
      verdict = { correct: false, feedback: 'Impossible de juger, décidez entre vous.' }
    }
    if (typeof verdict.correct !== 'boolean') verdict.correct = false
    if (typeof verdict.feedback !== 'string') verdict.feedback = ''
    res.json(verdict)
  } catch (e) {
    console.error('[judge] erreur:', e)
    res.status(500).json({ correct: false, feedback: 'Erreur du juge, décidez entre vous.' })
  }
})

app.get('/api/health', (_, res) => res.json({ ok: true, model: MODEL }))

/* ---------------------- Serve frontend en production ---------------------- */
if (IS_PROD) {
  const distDir = path.join(__dirname, 'dist')
  app.use(express.static(distDir))
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next()
    res.sendFile(path.join(distDir, 'index.html'))
  })
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 TTMC prêt sur http://localhost:${PORT}`)
  console.log(`   Mode       : ${IS_PROD ? 'PRODUCTION (front servi par Express)' : 'DEV (front sur Vite)'}`)
  console.log(`   Génération : ${MODEL}`)
  console.log(`   Juge       : ${JUDGE_MODEL}`)
  console.log(`   PIN        : ${APP_PIN ? '🔒 activé' : '⚠️  désactivé (accès libre)'}\n`)
})
