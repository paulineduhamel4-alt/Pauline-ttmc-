# 🎯 Tu te mets combien ?

Jeu de culture générale avec **génération IA à chaque partie**, **juge IA**, **explications**, **chrono** et **historique**.

## ✨ Ce que fait l'appli

- **20 nouveaux thèmes** générés par Claude à chaque partie (aucune répétition d'une partie à l'autre)
- **4 ambiances au choix** : Familial · Fun · Pointu · Adulte
- **Questions ouvertes jugées par l'IA** — plus besoin de trancher soi-même
- **Explication automatique** après chaque question (bonne ou mauvaise réponse)
- **Chrono optionnel** par question (temps proportionnel au niveau)
- **Génération en arrière-plan** : pendant que vous jouez, l'appli prépare 10 thèmes de plus
- **Historique local** des 20 dernières parties (gagnant, scores, ambiance)
- **11 thèmes de secours** en dur si l'API est injoignable

## 🚀 Lancer en local (3 étapes)

### 1. Récupérer une clé API Anthropic

1. https://console.anthropic.com → crée un compte
2. **API Keys** → **Create Key** → copie la clé (`sk-ant-…`)
3. **Billing** → ajoute 5$ de crédit (une partie coûte ~0,03$)

### 2. Configurer

```bash
cp .env.example .env
# ouvre .env, colle ta clé après ANTHROPIC_API_KEY=
```

### 3. Installer et lancer

```bash
npm install
npm run dev
```

Ça lance **le serveur backend** (port 3001) **et le front Vite** (port 5173) en parallèle.

Ouvre http://localhost:5173

## 🎮 Comment on joue

1. **Accueil** — ajoute 2 à 8 équipes, choisis l'ambiance, active le chrono si tu veux
2. **Lancer la partie** → l'IA génère 20 thèmes originaux (~40s)
3. **Chaque tour** :
   - Le thème tombe (ex. "Les phares mythiques 🗼")
   - L'équipe **choisit son niveau 1-10** (plus haut = plus dur = plus de cases si juste)
   - La question apparaît :
     - **Niveaux 1-5 & 8-10** → QCM (4 options)
     - **Niveaux 6-7** → réponse libre (l'IA juge)
   - Bonne réponse → tu avances de N cases · Mauvaise → tu restes
4. **Cases spéciales** :
   - 🎭 **Gage** (jaune, cases 5/11/17/23/29/35/39)
   - ⚡ **Boost** (turquoise, cases 8/15/21/28/34/40) : ×2, sniper +3, vol adversaire, bouclier, rejouer
5. **Première équipe à la case 42** gagne 🏆

## 🔧 Structure

```
├── server.js          # Backend Express : /api/generate + /api/judge
├── src/
│   ├── App.jsx        # Toute la logique du jeu
│   ├── themes.js      # Banque de secours (11 thèmes)
│   └── main.jsx       # Entrée React
├── vite.config.js     # Proxy /api → localhost:3001
├── .env               # Ta clé API (jamais commitée)
└── package.json
```

## 💰 Coûts

Avec **Claude Haiku 4.5** (défaut) :
- 20 thèmes générés = **~0,025 $**
- 1 verdict de juge = **~0,001 $**
- **~5$ = 200 parties**

Pour plus de qualité, dans `.env` :
```
ANTHROPIC_MODEL=claude-sonnet-5
```
(~10× plus cher, questions plus travaillées)

## 🐛 Dépannage

**"❌ ANTHROPIC_API_KEY manquante"** — pas de fichier `.env` ou clé mal collée. Vérifie qu'il est à la racine (à côté de `package.json`), sans guillemets autour de la clé.

**Génération en échec au lancement** — regarde le terminal `npm run dev` pour l'erreur exacte (clé invalide, crédit insuffisant, quota…). L'appli bascule automatiquement sur les 11 thèmes de secours.

**Le juge dit non alors que la réponse est bonne** — clique sur **🤨 Contester le verdict** pour l'inverser.

**Trop long à générer** — passe à `ANTHROPIC_MODEL=claude-haiku-4-5-20251001` (déjà par défaut) et vérifie ta connexion.

## ⚙️ Personnalisation rapide

Dans `src/App.jsx`, en haut :
- `BS = 42` — nombre de cases (durée de partie)
- `INIT_GEN = 20` — thèmes générés au lancement
- `BG_GEN = 10` — thèmes générés en arrière-plan quand le deck baisse
- `timeFor(level)` — formule du chrono par niveau
