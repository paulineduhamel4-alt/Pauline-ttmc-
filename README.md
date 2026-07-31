# 🎯 Tu te mets combien ?

Jeu de culture générale entre amis. **48 thèmes, 480 questions**, chrono optionnel, gages, boosts, historique.

**Zéro API, zéro clé, zéro compte.** Un simple site statique que tu peux héberger n'importe où ou même ouvrir en local.

## ✨ Features

- 🎲 **48 thèmes** couvrant nature, animaux, histoire, sciences, arts, sports, pop culture
- 💡 **Explications** après chaque réponse pour apprendre un truc
- 📊 **Compteur de thèmes restants** — jamais deux fois le même thème dans l'ordre, remise à zéro auto une fois tous joués
- ⏱️ **Chrono optionnel** (25s + niveau×5, plus haut le niveau = plus de temps)
- 🎭 **Cases gage** (mimer, chanter, accent…)
- ⚡ **Cases boost** (×2, sniper +3, vol adversaire, bouclier, rejouer)
- 📜 **Historique local** des 20 dernières parties
- 📱 **PWA** : ajout à l'écran d'accueil comme une vraie app

## 🚀 Lancer en local

```bash
git clone <ce-repo>
cd Pauline-ttmc-
npm install
npm run dev
```
→ http://localhost:5173

## 📦 Build + ouvrir n'importe où

```bash
npm run build
```
Le dossier `dist/` généré est **100 % autonome**. Trois façons de s'en servir :

**A) Ouvrir en local** — double-clic sur `dist/index.html` dans ton navigateur. Ça marche même hors ligne.

**B) Héberger sur Netlify Drop (gratuit, 30 secondes)** :
1. Va sur https://app.netlify.com/drop
2. Glisse-dépose le dossier `dist/` sur la page
3. Tu récupères une URL du style `https://joyful-panda-1234.netlify.app`
4. Partage-la à tes potes, chacun l'ouvre sur son tel

**C) N'importe quel autre hébergeur statique** — Vercel, GitHub Pages, Cloudflare Pages, Firebase Hosting. Tous gratuits pour ce type d'usage.

## 📱 Installer comme une app sur le tel

Une fois hébergé (ou ouvert en local via un serveur) :
- **iPhone (Safari)** : ouvre l'URL → Partager 📤 → **Sur l'écran d'accueil**
- **Android (Chrome)** : ouvre l'URL → menu ⋮ → **Installer l'application**

→ Icône TTMC sur ton écran d'accueil, plein écran, comme une vraie app.

## 🎮 Comment on joue

1. **Accueil** — ajoute 2 à 8 équipes, active le chrono si tu veux
2. **Lancer la partie** → 1 des 48 thèmes non-vus tombe
3. **L'équipe choisit son niveau 1-10** (plus haut = plus dur = plus de cases si juste)
4. La question apparaît :
   - **Niveaux 1-5 & 8-10** → QCM (4 options)
   - **Niveaux 6-7** → réponse libre (l'équipe se juge honnêtement)
5. Bonne réponse → tu avances de N cases · Mauvaise → tu restes
6. **Cases spéciales** :
   - 🎭 **Gage** (5/11/17/23/29/35/39) — mimer, chanter, accent…
   - ⚡ **Boost** (8/15/21/28/34/40) — ×2, sniper +3, vol adversaire…
7. **Premier à la case 42** gagne 🏆

## 📊 Le compteur de thèmes

À chaque partie, les thèmes déjà joués sont **mémorisés dans ton navigateur**. Ils ne reviennent pas tant qu'il en reste d'autres. L'accueil affiche :
- **48/48** au début → tous frais
- **35/48** après quelques parties → 35 thèmes non vus restants
- **0/48** → 🎉 quand tu as tout fait, la banque se remet automatiquement à zéro

Tu peux forcer la remise à zéro manuellement avec le bouton **🔄 Remettre tous les thèmes à zéro** sur l'accueil.

## 🔧 Structure

```
├── src/
│   ├── App.jsx        # Toute la logique du jeu
│   ├── themes.js      # 48 thèmes, 480 questions
│   └── main.jsx       # Entrée React
├── public/            # Icônes PWA
├── index.html
├── vite.config.js
└── package.json
```

## ⚙️ Personnalisation

Dans `src/App.jsx` (haut du fichier) :
- `BS = 42` — durée de partie (nombre de cases)
- `ST` — emplacement des cases gage/boost
- `timeFor(level)` — formule du chrono

Pour **ajouter tes propres thèmes**, édite `src/themes.js` en respectant le format :
```js
{"t": "Mon thème", "e": "🎨", "q": [
  ["Question ?", "m", ["A","B","C","D"], 2, "Explication."],   // QCM, réponse = index 2
  ["Question ouverte ?", "o", "Réponse attendue", "Explication."], // Ouverte
  // ... 10 questions au total, niveau croissant de difficulté 1 à 10
]}
```
