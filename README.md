# 🎯 Tu te mets combien ?

Jeu de culture générale avec **génération IA à chaque partie** (Google Gemini, gratuit), **juge IA**, **explications**, **chrono**, **historique** et **PWA**.

## ✨ Features

- 🤖 **20 nouveaux thèmes** générés par Gemini à chaque partie
- 🎭 **4 ambiances** : Familial / Fun / Pointu / Adulte
- ⚖️ **Juge IA** pour les questions ouvertes
- 💡 **Explication** après chaque réponse
- ⏱️ **Chrono optionnel** par question (proportionnel au niveau)
- 🔁 **Génération en arrière-plan** pendant le jeu
- 📜 **Historique local** des 20 dernières parties
- 🔒 **PIN partagé** pour protéger l'accès
- 📱 **PWA** : ajout à l'écran d'accueil comme une vraie app
- 💸 **100 % gratuit** avec Gemini (dans les limites du free tier — largement suffisantes pour jouer entre potes)

## 🔑 Récupérer une clé Gemini (2 min, gratuit)

1. Va sur https://aistudio.google.com/app/apikey
2. Login avec ton compte Google
3. **Create API key** → choisis un projet (ou "Create in new project")
4. Copie la clé (commence par `AIzaSy...`)

**Aucune carte bancaire demandée**, ce n'est pas comme Claude/OpenAI. Google offre le free tier direct.

Quotas free tier de `gemini-2.5-flash` (largement au-dessus de tes besoins) :
- 10 requêtes/minute
- 250 000 tokens/minute
- 250 requêtes/jour

Une partie = ~20-30 requêtes → tu peux enchaîner ~8 parties par jour tranquille.

## 🚀 En local (dev)

```bash
git clone <ce-repo>
cd Pauline-ttmc-
cp .env.example .env
# → colle ta clé Gemini dans .env
npm install
npm run dev
```
→ http://localhost:5173

## 📱 Déployer en ligne (pour jouer partout)

**Render** — gratuit, un URL public, pas de CB.

1. **Pousse le code sur GitHub** (merge ta branche sur `main`)
2. **Compte Render** sur https://render.com (login GitHub)
3. Dashboard → **New +** → **Blueprint** → sélectionne ton repo
4. Render détecte `render.yaml` → **Apply**
5. Remplis les 2 secrets :
   - `GEMINI_API_KEY` : ta clé (`AIzaSy...`)
   - `APP_PIN` : code 4-8 chiffres à partager (ex. `4242`)
6. Attends ~5 min → URL type `https://ttmc-xxxx.onrender.com`

### 📱 Installation PWA sur téléphone

**iPhone (Safari)** : ouvre l'URL → Partager 📤 → **Sur l'écran d'accueil**
**Android (Chrome)** : ouvre l'URL → menu ⋮ → **Installer l'application**

→ Icône TTMC sur l'écran d'accueil, plein écran, comme une vraie app.

Partage **URL + PIN** à tes copains, ils font pareil.

### ⚠️ Le cold start Render (plan gratuit)

Sans visiteur pendant 15 min → serveur en veille → réveil ~30-60s. Deux astuces :
- **Ouvre l'URL 1 min avant** de commencer à jouer
- Passe à Render "Starter" (7$/mois) si tu joues très souvent

## 🎮 Comment on joue

1. **Accueil** — 2 à 8 équipes, ambiance, chrono ON/OFF
2. **Lancer la partie** → 20 thèmes IA générés (~30s)
3. Chaque tour : thème imposé → équipe choisit son niveau 1-10 → question
   - Niveaux 1-5 & 8-10 : QCM (4 options)
   - Niveaux 6-7 : réponse ouverte jugée par l'IA
4. Bonne réponse → tu avances de N cases · Mauvaise → tu restes
5. Cases spéciales : 🎭 **gage** (5/11/17/23/29/35/39) · ⚡ **boost** (8/15/21/28/34/40)
6. Premier à la case **42** gagne 🏆

## 🔧 Structure

```
├── server.js              # Backend Express + Gemini SDK
├── src/
│   ├── App.jsx            # Toute la logique du jeu
│   ├── themes.js          # 11 thèmes de secours
│   └── main.jsx           # Entrée React
├── public/                # Icônes PWA
├── index.html
├── vite.config.js
├── render.yaml            # Config déploiement Render
├── .env                   # GEMINI_API_KEY + APP_PIN (jamais commité)
└── package.json
```

## 🐛 Dépannage

**"❌ GEMINI_API_KEY manquante"** — variable pas définie sur Render, ou `.env` absent en local.

**Rate limit (429)** — trop de générations en peu de temps. Attends 1 min ou baisse `GEN_CONCURRENCY` dans `.env` (ex. `GEN_CONCURRENCY=4`).

**Quota journalier atteint** — 250 requêtes/jour épuisées. Attends demain, ou change de modèle : `GEMINI_MODEL=gemini-2.0-flash` (quotas différents).

**PIN oublié** — Render → Environment → change `APP_PIN` → save → redémarre auto.

**Icône pas jolie sur iOS** — retire de l'écran d'accueil et rajoute (Safari cache).

## ⚙️ Personnalisation

Dans `src/App.jsx` (haut du fichier) :
- `BS = 42` — durée de partie
- `INIT_GEN = 20` — thèmes générés au lancement
- `BG_GEN = 10` — thèmes en arrière-plan
- `timeFor(level)` — formule du chrono

Dans `.env` :
- `APP_PIN=` (vide) → désactive le PIN
- `GEMINI_MODEL=gemini-2.5-flash-lite` → plus rapide, un poil moins précis
- `GEN_CONCURRENCY=4` → moins de parallélisme, évite les rate limits
