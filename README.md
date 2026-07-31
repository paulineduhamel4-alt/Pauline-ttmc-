# 🎯 Tu te mets combien ?

Jeu de culture générale avec **génération de thèmes à la volée par IA** (Claude).

## Comment ça marche

- Écran d'accueil → bouton **✨ Générer N nouveaux thèmes** (5 à 25)
- L'IA fabrique des thèmes originaux avec 10 questions calibrées par difficulté (1 à 10)
- Niveaux 1-5 & 8-10 : QCM · Niveaux 6-7 : réponse ouverte
- Les thèmes générés sont **sauvegardés dans le navigateur** (localStorage) → tu les retrouves à chaque partie
- 11 thèmes fournis en dur en cas de coupure API

## 🚀 Lancer en local (3 étapes)

### 1. Récupérer une clé API Anthropic (Claude)

1. Va sur https://console.anthropic.com → crée un compte
2. Onglet **API Keys** → **Create Key** → copie la clé (commence par `sk-ant-…`)
3. Il faut ajouter du crédit (Billing) : **5$ suffisent pour des centaines de générations** (Haiku coûte quelques centimes par génération de 15 thèmes)

### 2. Configurer le projet

```bash
# à la racine du projet
cp .env.example .env
# ouvre .env et colle ta clé après ANTHROPIC_API_KEY=
```

### 3. Installer et lancer

```bash
npm install
npm run dev
```

Le script lance **le serveur backend** (port 3001, appelle Claude) **ET le front Vite** (port 5173) en parallèle.

Ouvre http://localhost:5173 dans ton navigateur.

## 🔧 Structure

```
├── server.js          # Backend Express → appelle l'API Claude
├── src/
│   ├── App.jsx        # Toute la logique du jeu + bouton "Générer"
│   ├── themes.js      # Banque de thèmes en dur (fallback + démarrage)
│   └── main.jsx       # Point d'entrée React
├── vite.config.js     # Proxy /api → localhost:3001
├── .env               # Ta clé API (jamais commitée)
└── package.json
```

## 💰 Coûts approximatifs

Avec **Claude Haiku 4.5** (défaut) :
- 15 thèmes = ~30 000 tokens output = **~0,02 $**
- Tu peux générer ~300 lots de 15 thèmes avec 5$ de crédit

Pour une meilleure qualité, tu peux passer à **Sonnet 5** dans `.env` :
```
ANTHROPIC_MODEL=claude-sonnet-5
```
(~10x plus cher mais questions plus travaillées)

## 🐛 Dépannage

**"❌ ANTHROPIC_API_KEY manquante"** — le serveur n'a pas trouvé le `.env`. Vérifie qu'il est bien à la racine (à côté de `package.json`) et que la clé n'est pas entourée de guillemets.

**"Erreur serveur (HTTP 500)"** — regarde le terminal où tourne `npm run dev`, tu verras l'erreur exacte (clé invalide, crédit insuffisant, etc.).

**Le bouton ne fait rien** — le serveur backend n'est peut-être pas lancé. Vérifie que `npm run dev` affiche bien "🚀 Backend TTMC prêt sur http://localhost:3001".

**Thèmes en double** — le serveur dédoublonne, mais parfois Claude propose des thèmes proches. Regénère si besoin.

## 🎮 Règles du jeu

- **42 cases** à parcourir, la 1ʳᵉ équipe qui atteint la fin gagne
- À chaque tour, tu choisis un **niveau de difficulté 1-10** → tu avances d'autant de cases si tu réponds juste
- Cases **🎭 gage** (jaunes) : mimer, chanter, accent…
- Cases **⚡ boost** (turquoises) : ×2, sniper +3, vol adversaire…
