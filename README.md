# 🎯 Tu te mets combien ?

Jeu de culture générale avec **génération IA à chaque partie**, **juge IA**, **explications**, **chrono**, **historique** et **installation comme une app** (PWA).

## ✨ Features

- 🤖 **20 nouveaux thèmes** générés par Claude à chaque partie
- 🎭 **4 ambiances** : Familial / Fun / Pointu / Adulte
- ⚖️ **Juge IA** pour les questions ouvertes
- 💡 **Explication** après chaque réponse
- ⏱️ **Chrono optionnel** par question (proportionnel au niveau)
- 🔁 **Génération en arrière-plan** pendant le jeu
- 📜 **Historique local** des 20 dernières parties
- 🔒 **PIN partagé** pour protéger l'accès
- 📱 **PWA** : ajout à l'écran d'accueil comme une vraie app

## 🚀 En local (dev)

```bash
git clone <ce-repo>
cd Pauline-ttmc-
cp .env.example .env
# → colle ta clé Anthropic dans .env
npm install
npm run dev
```
→ http://localhost:5173

## 📱 Déployer en ligne (pour jouer en mobilité)

**Recommandé : Render** — gratuit, un URL public, aucune carte bancaire à donner.

### Étapes

1. **Pousse le code sur GitHub** (ta branche `claude/auto-generate-questions-n9k1fp` ou merge sur `main`)

2. **Crée un compte Render** sur https://render.com (login avec GitHub)

3. **Blueprint deploy** :
   - Depuis Render → **New +** → **Blueprint**
   - Connecte le repo `paulineduhamel4-alt/Pauline-ttmc-`
   - Il détecte automatiquement `render.yaml` et propose un service `ttmc`
   - Clique **Apply**

4. **Remplis les variables secrètes** (Render te les demande) :
   - `ANTHROPIC_API_KEY` : ta clé Anthropic (`sk-ant-…`)
   - `APP_PIN` : un code de 4 à 8 chiffres à partager avec tes potes (ex. `4242`)

5. **Attends ~5 min** pour le premier build. Render te donne une URL du style :
   `https://ttmc-xxxx.onrender.com`

6. **Ouvre l'URL sur ton téléphone** :
   - Safari (iOS) → Partager → **Sur l'écran d'accueil**
   - Chrome (Android) → menu ⋮ → **Installer l'application**
   → tu as une icône TTMC sur ton écran d'accueil, plein écran, comme une vraie app

7. **Partage l'URL + le PIN** à tes copains → ils font pareil.

### ⚠️ Le "cold start" Render (plan gratuit)

Sans visiteur pendant 15 min, Render met le serveur en veille. Au réveil, **il faut 30-60s** pour que l'appli réponde. Deux astuces :

- **Ouvrir l'URL 1 min avant** de commencer à jouer, le temps que ça chauffe
- Passer plus tard à Render "Starter" (7$/mois) pour éliminer le sleep si tu joues souvent

## 🎮 Comment on joue

1. **Accueil** — 2 à 8 équipes, ambiance, chrono ON/OFF
2. **Lancer la partie** → 20 thèmes IA générés (~40s la première fois)
3. Chaque tour : thème imposé → équipe choisit son niveau 1-10 → question
   - Niveaux 1-5 & 8-10 : QCM (4 options)
   - Niveaux 6-7 : réponse ouverte jugée par l'IA
4. Bonne réponse → tu avances de N cases · Mauvaise → tu restes
5. Cases spéciales : 🎭 **gage** (5/11/17/23/29/35/39) · ⚡ **boost** (8/15/21/28/34/40)
6. Premier à la case **42** gagne 🏆

## 💰 Coûts

Avec Claude Haiku 4.5 (défaut) :
- 20 thèmes générés = **~0,025 $**
- 1 verdict de juge = **~0,001 $**
- **5$ de crédit = ~200 parties**

## 🔧 Structure du projet

```
├── server.js              # Backend Express (API + serve front en prod)
├── src/
│   ├── App.jsx            # Toute la logique du jeu
│   ├── themes.js          # 11 thèmes de secours
│   └── main.jsx           # Entrée React
├── public/                # Icônes PWA + manifest
│   ├── icon.svg
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── apple-touch-icon.png
│   └── manifest.json
├── index.html
├── vite.config.js
├── render.yaml            # Config déploiement Render
├── .env                   # Clé API + PIN (jamais commité)
└── package.json
```

## 🐛 Dépannage

**"❌ ANTHROPIC_API_KEY manquante"** — variable pas définie sur Render, ou `.env` absent en local.

**Cold start à chaque ouverture** — plan Render gratuit → normal après 15 min d'inactivité. Solution : upgrade Starter ou ouvre l'URL 1 min avant.

**PIN oublié** — dans Render → Environment → change `APP_PIN` → le serveur redémarre automatiquement.

**"PIN incorrect" même avec le bon** — le PIN dans `.env` a peut-être un espace en trop. Vérifie.

**Icône pas jolie sur iOS** — refresh la page, retire de l'écran d'accueil, rajoute. Safari cache les icônes.

## ⚙️ Personnalisation rapide

Dans `src/App.jsx` (haut du fichier) :
- `BS = 42` — durée de partie (nombre de cases)
- `INIT_GEN = 20` — thèmes générés au lancement
- `BG_GEN = 10` — thèmes générés en arrière-plan
- `timeFor(level)` — formule du chrono

Dans `.env` :
- `APP_PIN=` (vide) → désactive le PIN
- `ANTHROPIC_MODEL=claude-sonnet-5` → passe à Sonnet 5 (10× plus cher, meilleure qualité)
