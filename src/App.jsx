import { useState, useEffect, useRef } from "react"
import {
  SUITS, SUIT_COLOR, rankLabel, DEFAULT_OPTS,
  analyzeCombo, canExtend, jokerReplacements, sortHand,
  newRound, pickStarter, publicState,
  actDraw, actPose, actExtend, actRetrieveJoker, actDiscard, actFinishOnPose,
  handValue,
} from "./game.js"
import { createHost, createClient } from "./net.js"

// ============ STYLES ============
const CSS = `
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
html,body,#root{background:#0a3d24;min-height:100vh;overscroll-behavior:none}
body{background:radial-gradient(ellipse at center,#0e5a34 0%,#062818 100%);background-attachment:fixed}
button{cursor:pointer;font-family:inherit;border:none}
button:disabled{opacity:.35;cursor:not-allowed}
input,select{font-family:inherit;padding:10px 12px;border-radius:10px;border:1px solid #ccc;font-size:15px;width:100%;background:#fff;color:#222}
label{display:flex;flex-direction:column;gap:6px;font-size:13px;color:#333;margin-bottom:10px}
.wrap{max-width:1100px;margin:0 auto;padding:8px;color:#fff;padding-bottom:200px}
.top{display:flex;justify-content:space-between;align-items:center;gap:8px;background:linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.15));border-radius:14px;padding:8px 14px;margin-bottom:10px;flex-wrap:wrap;backdrop-filter:blur(6px);border:1px solid rgba(212,160,95,.3)}
.brand{display:flex;flex-direction:column}
.brand-title{font-size:18px;font-weight:900;letter-spacing:.5px;color:#f4d38b}
.brand-sub{font-size:11px;opacity:.7}
.pscores{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}
.pchip{display:flex;flex-direction:column;align-items:center;background:rgba(0,0,0,.25);border:1px solid rgba(255,255,255,.1);padding:4px 10px;border-radius:12px;font-size:12px;min-width:70px}
.pchip.cur{border-color:#f4d38b;background:rgba(244,211,139,.15);box-shadow:0 0 12px rgba(244,211,139,.35)}
.pchip .nm{font-weight:700;font-size:13px}
.pchip .sc{opacity:.9}
.pchip .st{font-size:10px;opacity:.7}
.card{width:52px;height:74px;border-radius:8px;background:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:4px 5px;font-weight:800;user-select:none;position:relative;box-shadow:0 3px 8px rgba(0,0,0,.35);flex-shrink:0;transition:transform .15s,box-shadow .15s;font-size:14px;border:1px solid rgba(0,0,0,.15)}
.card.small{width:38px;height:54px;font-size:11px;padding:3px 4px;border-radius:6px}
.card.sel{transform:translateY(-16px);box-shadow:0 8px 18px rgba(0,0,0,.5);border:2px solid #f4d38b}
.card.joker{background:linear-gradient(135deg,#fde68a,#f59e0b);color:#7c2d12;border-color:#b45309}
.card.pickable{outline:3px solid #22c55e;outline-offset:2px}
.card.retr{outline:3px solid #22c55e;outline-offset:2px;animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{box-shadow:0 3px 8px rgba(0,0,0,.35),0 0 0 0 rgba(34,197,94,.6)}50%{box-shadow:0 3px 8px rgba(0,0,0,.35),0 0 0 8px rgba(34,197,94,0)}}
.card .cn{font-size:15px;line-height:1;letter-spacing:-1px}
.card .su{font-size:14px;line-height:1}
.card .br{align-self:flex-end;transform:rotate(180deg);display:flex;flex-direction:column}
.card.small .cn{font-size:12px}
.card.small .su{font-size:11px}
.hand{display:flex;flex-wrap:wrap;gap:6px;padding:14px 10px 20px;background:rgba(0,0,0,.35);border-radius:14px 14px 0 0;min-height:100px;border-top:2px solid rgba(212,160,95,.4);position:fixed;bottom:0;left:0;right:0;z-index:5;backdrop-filter:blur(8px)}
.hand-scroll{max-width:1100px;margin:0 auto;display:flex;flex-wrap:wrap;gap:6px;justify-content:center;width:100%}
.melds{display:flex;flex-wrap:wrap;gap:8px;padding:12px;background:rgba(0,0,0,.25);border-radius:14px;min-height:100px;border:1px solid rgba(212,160,95,.2)}
.meld{background:rgba(0,0,0,.35);border-radius:10px;padding:6px;display:flex;gap:4px;align-items:center;border:2px solid transparent}
.meld.ext{border-color:#f4d38b;box-shadow:0 0 12px rgba(244,211,139,.4)}
.meld.own{background:rgba(244,211,139,.12)}
.meld-lbl{margin-left:6px;font-size:11px;opacity:.85;display:flex;flex-direction:column}
.piles{display:flex;gap:24px;align-items:flex-start;justify-content:center;padding:14px;background:rgba(0,0,0,.18);border-radius:14px;margin:8px 0;flex-wrap:wrap;border:1px solid rgba(212,160,95,.2)}
.pile{display:flex;flex-direction:column;align-items:center;gap:6px}
.pile-title{font-size:11px;opacity:.75;text-transform:uppercase;letter-spacing:1px}
.back{width:52px;height:74px;border-radius:8px;background:repeating-linear-gradient(45deg,#7c2d12,#7c2d12 6px,#991b1b 6px,#991b1b 12px);border:2px solid #4a1a0a;display:flex;align-items:center;justify-content:center;color:#f4d38b;font-weight:900;box-shadow:0 3px 8px rgba(0,0,0,.4)}
.disc-stack{display:flex;gap:2px}
.btn{padding:10px 16px;border-radius:10px;background:linear-gradient(180deg,#f4d38b,#c8901f);color:#3a1e07;font-weight:800;font-size:14px;box-shadow:0 2px 6px rgba(0,0,0,.25);border:1px solid #b07417}
.btn:active:not(:disabled){transform:translateY(1px)}
.btn.ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.35);box-shadow:none}
.btn.danger{background:linear-gradient(180deg,#ef4444,#b91c1c);color:#fff;border-color:#7f1d1d}
.btn.small{padding:6px 10px;font-size:12px}
.staging{background:rgba(0,0,0,.35);border-radius:14px;padding:10px 12px;margin:8px 0;display:flex;gap:8px;align-items:center;flex-wrap:wrap;min-height:60px;border:1px solid rgba(212,160,95,.25);position:fixed;bottom:100px;left:0;right:0;margin:0;border-radius:0;z-index:4;backdrop-filter:blur(8px);border-top:1px solid rgba(212,160,95,.3);border-bottom:none;padding:10px 14px}
.staging-inner{max-width:1100px;margin:0 auto;display:flex;gap:8px;align-items:center;flex-wrap:wrap;width:100%}
.info{background:rgba(0,0,0,.3);padding:6px 12px;border-radius:8px;font-size:13px}
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;z-index:100;padding:16px;text-align:center;color:#fff}
.modal{background:#fff;color:#1c1c1a;border-radius:16px;padding:22px;max-width:520px;width:100%;text-align:left;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.5)}
.modal h1{font-size:22px;margin-bottom:14px;color:#0a3d24}
.pill{background:#f4d38b;color:#3a1e07;padding:4px 10px;border-radius:20px;font-weight:700;font-size:12px}
.code{font-family:monospace;font-size:32px;letter-spacing:6px;background:#0a3d24;color:#f4d38b;padding:12px 20px;border-radius:10px;text-align:center;font-weight:900}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.help{background:#f7f4ec;padding:12px;border-radius:8px;font-size:13px;color:#333;line-height:1.5;margin:8px 0}
h1{font-size:22px}h2{font-size:16px;margin-bottom:6px}
.mode-btns{display:flex;flex-direction:column;gap:10px}
.mode-card{background:#fff;color:#1c1c1a;border-radius:14px;padding:18px;cursor:pointer;text-align:left;box-shadow:0 4px 12px rgba(0,0,0,.2);border:2px solid transparent}
.mode-card:hover{border-color:#f4d38b}
.mode-card h3{font-size:18px;margin-bottom:4px;color:#0a3d24}
.mode-card p{font-size:13px;color:#555}
.status-dot{width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:6px}
.online{background:#22c55e}
.offline{background:#ef4444}
.warn{background:rgba(239,68,68,.9);color:#fff;padding:8px 12px;border-radius:8px;font-size:13px;text-align:center;margin:4px 0}
@media(max-width:520px){.card{width:44px;height:64px}.card.small{width:34px;height:48px}.back{width:44px;height:64px}.brand-title{font-size:15px}.top{padding:6px 10px}}
`

// ============ Composants cartes ============
function CardView({ card, selected, onClick, small, pickable, extraClass, hidden }) {
  const cls = ["card"]
  if (small) cls.push("small")
  if (selected) cls.push("sel")
  if (card?.joker) cls.push("joker")
  if (pickable) cls.push("pickable")
  if (extraClass) cls.push(extraClass)
  if (hidden) return <div className={"back " + (small ? "small" : "")} style={{ width: small ? 34 : 52, height: small ? 48 : 74 }}>♦</div>
  const color = card.joker ? "#7c2d12" : SUIT_COLOR[card.suit]
  return (
    <div className={cls.join(" ")} style={{ color }} onClick={onClick}>
      {card.joker ? (
        <>
          <div className="cn">★</div>
          <div style={{ textAlign: "center", fontSize: small ? 9 : 11, fontWeight: 900 }}>JOKER</div>
          <div className="cn br">★</div>
        </>
      ) : (
        <>
          <div><div className="cn">{rankLabel(card.rank)}</div><div className="su">{card.suit}</div></div>
          <div className="br"><div className="cn">{rankLabel(card.rank)}</div><div className="su">{card.suit}</div></div>
        </>
      )}
    </div>
  )
}

function MeldView({ meld, ownerName, isMine, highlight, onExtend, onJokerClick, jokerRetrievable }) {
  const label = meld.type === "set"
    ? `Brelan/Carré ${rankLabel(meld.rank)}`
    : `Suite ${meld.suit} ${rankLabel(meld.start === 14 ? 1 : meld.start)}→${rankLabel(meld.end === 14 ? 1 : meld.end)}`
  return (
    <div className={"meld" + (highlight ? " ext" : "") + (isMine ? " own" : "")} title={label}>
      <div onClick={onExtend} style={{ display: "flex", gap: 4, cursor: onExtend ? "pointer" : "default" }}>
        {meld.cards.map((c, i) => (
          <CardView key={i} card={c} small
            extraClass={c.joker && jokerRetrievable && jokerRetrievable(i) ? "retr" : null}
            onClick={c.joker && onJokerClick ? (e) => { e.stopPropagation(); onJokerClick(i) } : undefined} />
        ))}
      </div>
      <div className="meld-lbl">
        <span style={{ fontWeight: 700 }}>{meld.points} pts</span>
        <span style={{ opacity: .7 }}>{label}</span>
        <span style={{ opacity: .6, fontSize: 10 }}>{ownerName}</span>
      </div>
    </div>
  )
}

// ============ Écran de configuration ============
function ModeScreen({ onLocal, onHost, onJoin, hasSave, onResume }) {
  return (
    <div className="overlay" style={{ background: "linear-gradient(160deg,#0e5a34,#062818)" }}>
      <div className="modal">
        <h1>🃏 Rami</h1>
        {hasSave && (
          <div style={{ marginBottom: 12 }}>
            <button className="btn" style={{ width: "100%" }} onClick={onResume}>Reprendre la partie sauvegardée</button>
          </div>
        )}
        <div className="mode-btns">
          <div className="mode-card" onClick={onLocal}>
            <h3>📱 Jouer en local</h3>
            <p>Un seul appareil, on se le passe entre chaque tour. 2 à 5 joueurs.</p>
          </div>
          <div className="mode-card" onClick={onHost}>
            <h3>🌐 Créer une partie en ligne</h3>
            <p>Tu héberges, l'autre joueur te rejoint avec un code à 4 lettres.</p>
          </div>
          <div className="mode-card" onClick={onJoin}>
            <h3>🔑 Rejoindre une partie</h3>
            <p>Entre le code fourni par l'hôte.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function OptionsForm({ opts, setOpts, onlyOpen }) {
  return (
    <div className="grid2">
      <label>Cartes distribuées
        <select value={opts.handSize} onChange={e => setOpts({ ...opts, handSize: +e.target.value })}>
          {[13, 14, 15].map(x => <option key={x} value={x}>{x}</option>)}
        </select>
      </label>
      <label>Jokers
        <select value={opts.numJokers} onChange={e => setOpts({ ...opts, numJokers: +e.target.value })}>
          {[0, 2, 4].map(x => <option key={x} value={x}>{x}</option>)}
        </select>
      </label>
      <label>Ouverture min
        <select value={opts.openMin} onChange={e => setOpts({ ...opts, openMin: +e.target.value })}>
          <option value={0}>Aucun</option>
          <option value={30}>30 pts</option>
          <option value={51}>51 pts</option>
        </select>
      </label>
      <label>Cumul multi-combi pour ouvrir
        <select value={opts.accumulateOpen ? "1" : "0"} onChange={e => setOpts({ ...opts, accumulateOpen: e.target.value === "1" })}>
          <option value="1">Oui</option><option value="0">Non</option>
        </select>
      </label>
      <label>Joker en main
        <select value={opts.jokerHandValue} onChange={e => setOpts({ ...opts, jokerHandValue: +e.target.value })}>
          <option value={20}>20 pts</option><option value={25}>25 pts</option>
        </select>
      </label>
      <label>As en main
        <select value={opts.aceHandValue} onChange={e => setOpts({ ...opts, aceHandValue: +e.target.value })}>
          <option value={11}>11 pts</option><option value={1}>1 pt</option>
        </select>
      </label>
      <label>Objectif fin de partie
        <select value={opts.targetScore} onChange={e => setOpts({ ...opts, targetScore: +e.target.value })}>
          <option value={0}>Illimité</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={500}>500</option>
        </select>
      </label>
      <label>Qui commence
        <select value={opts.starter} onChange={e => setOpts({ ...opts, starter: e.target.value })}>
          <option value="p1">Joueur 1</option>
          <option value="random">Aléatoire</option>
          <option value="loser">Perdant précédent</option>
        </select>
      </label>
      <label>Fin sur défausse obligatoire
        <select value={opts.endOnDiscardOnly ? "1" : "0"} onChange={e => setOpts({ ...opts, endOnDiscardOnly: e.target.value === "1" })}>
          <option value="0">Non (pose OK)</option><option value="1">Oui</option>
        </select>
      </label>
      <label>Reprendre carte défaussée en la redéfaussant
        <select value={opts.allowRedrawDiscarded ? "1" : "0"} onChange={e => setOpts({ ...opts, allowRedrawDiscarded: e.target.value === "1" })}>
          <option value="0">Interdit</option><option value="1">Autorisé</option>
        </select>
      </label>
    </div>
  )
}

function LocalSetup({ onStart, onBack, savedOpts }) {
  const [opts, setOpts] = useState(savedOpts || DEFAULT_OPTS)
  const setNames = (i, v) => { const n = opts.names.slice(); n[i] = v; setOpts({ ...opts, names: n }) }
  return (
    <div className="overlay" style={{ background: "linear-gradient(160deg,#0e5a34,#062818)" }}>
      <div className="modal">
        <h1>Partie locale</h1>
        <label>Nombre de joueurs
          <select value={opts.numPlayers} onChange={e => setOpts({ ...opts, numPlayers: +e.target.value })}>
            {[2, 3, 4, 5].map(x => <option key={x} value={x}>{x}</option>)}
          </select>
        </label>
        {Array.from({ length: opts.numPlayers }).map((_, i) => (
          <label key={i}>Nom joueur {i + 1}
            <input value={opts.names[i] || ""} onChange={e => setNames(i, e.target.value)} />
          </label>
        ))}
        <details style={{ margin: "8px 0" }}>
          <summary style={{ cursor: "pointer", fontWeight: 700, marginBottom: 8 }}>Options avancées</summary>
          <OptionsForm opts={opts} setOpts={setOpts} />
        </details>
        <div style={{ display: "flex", gap: 8, justifyContent: "space-between", marginTop: 12 }}>
          <button className="btn ghost small" style={{ color: "#333", borderColor: "#ccc" }} onClick={onBack}>Retour</button>
          <button className="btn" onClick={() => onStart(opts)}>Commencer</button>
        </div>
      </div>
    </div>
  )
}

function HostSetup({ onStart, onBack, savedOpts }) {
  const [opts, setOpts] = useState({ ...(savedOpts || DEFAULT_OPTS), numPlayers: 2 })
  const setNames = (i, v) => { const n = opts.names.slice(); n[i] = v; setOpts({ ...opts, names: n }) }
  return (
    <div className="overlay" style={{ background: "linear-gradient(160deg,#0e5a34,#062818)" }}>
      <div className="modal">
        <h1>Créer une partie en ligne</h1>
        <label>Nombre de joueurs
          <select value={opts.numPlayers} onChange={e => setOpts({ ...opts, numPlayers: +e.target.value })}>
            {[2, 3, 4].map(x => <option key={x} value={x}>{x}</option>)}
          </select>
        </label>
        <label>Ton nom (hôte)
          <input value={opts.names[0]} onChange={e => setNames(0, e.target.value)} />
        </label>
        <details style={{ margin: "8px 0" }}>
          <summary style={{ cursor: "pointer", fontWeight: 700, marginBottom: 8 }}>Options avancées</summary>
          <OptionsForm opts={opts} setOpts={setOpts} />
        </details>
        <div style={{ display: "flex", gap: 8, justifyContent: "space-between", marginTop: 12 }}>
          <button className="btn ghost small" style={{ color: "#333", borderColor: "#ccc" }} onClick={onBack}>Retour</button>
          <button className="btn" onClick={() => onStart(opts)}>Créer la partie</button>
        </div>
      </div>
    </div>
  )
}

function JoinSetup({ onJoin, onBack }) {
  const [code, setCode] = useState("")
  const [name, setName] = useState("Joueur")
  return (
    <div className="overlay" style={{ background: "linear-gradient(160deg,#0e5a34,#062818)" }}>
      <div className="modal">
        <h1>Rejoindre une partie</h1>
        <label>Code (4 lettres/chiffres)
          <input value={code} onChange={e => setCode(e.target.value.toUpperCase().slice(0, 4))} style={{ fontFamily: "monospace", fontSize: 20, letterSpacing: 4, textTransform: "uppercase" }} />
        </label>
        <label>Ton nom
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <div style={{ display: "flex", gap: 8, justifyContent: "space-between", marginTop: 12 }}>
          <button className="btn ghost small" style={{ color: "#333", borderColor: "#ccc" }} onClick={onBack}>Retour</button>
          <button className="btn" disabled={code.length !== 4 || !name.trim()} onClick={() => onJoin(code, name.trim())}>Rejoindre</button>
        </div>
      </div>
    </div>
  )
}

function HelpModal({ onClose, opts }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h1>Règles</h1>
        <div className="help">
          <b>But</b> — se débarrasser de toutes ses cartes en posant des combinaisons valides.
        </div>
        <div className="help">
          <b>Combinaisons</b><br/>
          • Brelan/Carré : 3 ou 4 cartes de même valeur, couleurs différentes.<br/>
          • Suite : au moins 3 cartes consécutives de la même couleur. L'As peut être placé avant le 2 ou après le Roi, jamais entre.
        </div>
        <div className="help">
          <b>Tour</b> — pioche 1 carte (pioche ou défausse) → pose et/ou complète des combis → défausse 1 carte.
        </div>
        <div className="help">
          <b>Ouverture</b> — minimum {opts.openMin === 0 ? "libre" : `${opts.openMin} pts`}{opts.accumulateOpen ? " (cumulable sur plusieurs combis dans le même tour)" : " (une seule combi doit atteindre le seuil)"}.
        </div>
        <div className="help">
          <b>Joker</b> — remplace n'importe quelle carte. Tu peux reprendre un joker posé si tu as la carte exacte qu'il représente — il doit alors être réutilisé le tour même.
        </div>
        <div className="help">
          <b>Fin de manche</b> — points restants dans la main de chacun (A={opts.aceHandValue}, V/D/R=10, Joker={opts.jokerHandValue}). L'objectif est d'avoir le moins de points.
        </div>
        <div style={{ textAlign: "right", marginTop: 12 }}>
          <button className="btn" onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  )
}

// ============ App principal ============
export default function App() {
  const [screen, setScreen] = useState("mode") // mode / local-setup / host-setup / join-setup / host-wait / joining / play
  const [mode, setMode] = useState(null) // 'local' | 'host' | 'client'
  const [opts, setOpts] = useState(DEFAULT_OPTS)
  const [scores, setScores] = useState([])
  const [roundNum, setRoundNum] = useState(1)
  const [roundHistory, setRoundHistory] = useState([])
  const [state, setState] = useState(null)
  const [myIdx, setMyIdx] = useState(0)
  const [selected, setSelected] = useState(new Set())
  const [pass, setPass] = useState(true)
  const [jokerPicker, setJokerPicker] = useState(null)
  const [showHelp, setShowHelp] = useState(false)
  const [showOpts, setShowOpts] = useState(false)
  const [warn, setWarn] = useState(null)
  const [confirmDiscard, setConfirmDiscard] = useState(null) // cardId | null
  const [gameOver, setGameOver] = useState(null)

  // Réseau
  const netRef = useRef(null)
  const [roomCode, setRoomCode] = useState("")
  const [connStatus, setConnStatus] = useState("offline")
  const [clients, setClients] = useState([]) // {id, name}

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = CSS
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  // Save
  useEffect(() => {
    if (screen !== "play" || mode !== "local" || !state) return
    localStorage.setItem("rami-save", JSON.stringify({ opts, scores, roundNum, roundHistory, state }))
  }, [screen, state, scores, roundNum, roundHistory, opts, mode])

  // Warn ephemeral
  useEffect(() => {
    if (!warn) return
    const t = setTimeout(() => setWarn(null), 3500)
    return () => clearTimeout(t)
  }, [warn])

  const hasSave = !!localStorage.getItem("rami-save")

  function loadSaved() {
    try {
      const save = JSON.parse(localStorage.getItem("rami-save"))
      setOpts(save.opts); setScores(save.scores); setRoundNum(save.roundNum)
      setRoundHistory(save.roundHistory || []); setState(save.state)
      setMode("local"); setMyIdx(0); setPass(true); setScreen("play")
    } catch { setWarn("Sauvegarde illisible") }
  }

  function startLocal(o) {
    setMode("local"); setOpts(o)
    setScores(Array(o.numPlayers).fill(0)); setRoundNum(1); setRoundHistory([])
    setState(newRound(o, pickStarter(o, null)))
    setMyIdx(0); setPass(true); setSelected(new Set()); setJokerPicker(null); setGameOver(null)
    setScreen("play")
  }

  function startHost(o) {
    setMode("host"); setOpts(o)
    setScores(Array(o.numPlayers).fill(0)); setRoundNum(1); setRoundHistory([])
    setMyIdx(0); setSelected(new Set()); setJokerPicker(null); setGameOver(null)
    const net = createHost({
      onOpen: (code) => { setRoomCode(code); setConnStatus("online") },
      onError: (err) => { setWarn("Erreur réseau : " + (err.message || err.type)); setConnStatus("offline") },
      onClose: (cid) => { setClients(cs => cs.filter(c => c.id !== cid)); setWarn("Un joueur s'est déconnecté.") },
      onMessage: (cid, msg, conn) => handleHostMessage(cid, msg, conn),
    })
    netRef.current = { kind: "host", net }
    setScreen("host-wait")
  }

  function startJoin(code, name) {
    setMode("client"); setMyIdx(1)
    setSelected(new Set()); setJokerPicker(null); setGameOver(null)
    const net = createClient({
      code,
      onOpen: () => { setConnStatus("online"); net.send({ type: "join", name }) },
      onError: (err) => setWarn("Erreur : " + (err.message || err.type)),
      onClose: () => { setConnStatus("offline"); setWarn("Connexion perdue.") },
      onMessage: (msg) => handleClientMessage(msg),
    })
    netRef.current = { kind: "client", net }
    setScreen("joining")
  }

  // ==== Host : gestion messages ====
  const stateRef = useRef({ opts, scores, roundNum, roundHistory, state, clients, gameOver })
  useEffect(() => { stateRef.current = { opts, scores, roundNum, roundHistory, state, clients, gameOver } })

  function handleHostMessage(cid, msg) {
    const cur = stateRef.current
    if (msg.type === "join") {
      // Assigner un slot
      const takenSlots = cur.clients.map(c => c.slot)
      let slot = -1
      for (let i = 1; i < cur.opts.numPlayers; i++) if (!takenSlots.includes(i)) { slot = i; break }
      if (slot === -1) { netRef.current.net.sendTo(cid, { type: "error", message: "Partie pleine." }); return }
      const newClients = [...cur.clients, { id: cid, name: msg.name || `Joueur ${slot + 1}`, slot }]
      setClients(newClients)
      // Met à jour opts.names
      const newNames = cur.opts.names.slice(); newNames[slot] = msg.name || `Joueur ${slot + 1}`
      const newOpts = { ...cur.opts, names: newNames }
      setOpts(newOpts)
      netRef.current.net.sendTo(cid, { type: "welcome", slot, opts: newOpts })
      // Si toutes les places prises, démarrer
      const allSlots = new Set([0, ...newClients.map(c => c.slot)])
      if (allSlots.size === newOpts.numPlayers) {
        const s = newRound(newOpts, pickStarter(newOpts, null))
        setScores(Array(newOpts.numPlayers).fill(0)); setRoundNum(1); setRoundHistory([])
        setState(s); setPass(false); setScreen("play")
        broadcastState(s, newOpts, Array(newOpts.numPlayers).fill(0), 1, [], newClients)
      }
    } else if (msg.type === "action") {
      const client = cur.clients.find(c => c.id === cid)
      if (!client) return
      applyAction(msg.action, msg.params, client.slot)
    } else if (msg.type === "ready-next-round") {
      // ignore (host décide)
    }
  }

  function broadcastState(s, o, sc, rn, rh, cli, over) {
    const overFlag = over !== undefined ? over : gameOver
    if (!netRef.current || netRef.current.kind !== "host") return
    // Envoie à chaque client son état filtré
    for (const c of (cli || stateRef.current.clients)) {
      netRef.current.net.sendTo(c.id, {
        type: "state",
        publicState: publicState(s, c.slot),
        opts: o, scores: sc, roundNum: rn, roundHistory: rh, gameOver: overFlag,
      })
    }
  }

  // ==== Client : gestion messages ====
  function handleClientMessage(msg) {
    if (msg.type === "welcome") {
      setMyIdx(msg.slot); setOpts(msg.opts); setPass(false); setScreen("play")
    } else if (msg.type === "state") {
      setState(msg.publicState); setOpts(msg.opts); setScores(msg.scores)
      setRoundNum(msg.roundNum); setRoundHistory(msg.roundHistory || [])
      setGameOver(msg.gameOver ?? null)
    } else if (msg.type === "error") {
      setWarn(msg.message)
    }
  }

  // ==== Actions (avec dispatch selon mode) ====
  function dispatch(action, params) {
    if (mode === "local") {
      applyAction(action, params, state.current)
    } else if (mode === "host") {
      applyAction(action, params, myIdx)
    } else if (mode === "client") {
      netRef.current.net.send({ type: "action", action, params })
    }
  }

  function applyAction(action, params, playerIdx) {
    const cur = stateRef.current
    const s = cur.state
    if (!s) return
    let res
    if (action === "draw") res = actDraw(s, cur.opts, params.source, playerIdx)
    else if (action === "pose") res = actPose(s, cur.opts, params.cardIds, playerIdx)
    else if (action === "extend") res = actExtend(s, cur.opts, params.meldIdx, params.cardId, params.sideHint, playerIdx)
    else if (action === "retrieve") res = actRetrieveJoker(s, cur.opts, params.meldIdx, params.jokerIdx, params.myCardId, playerIdx)
    else if (action === "discard") res = actDiscard(s, cur.opts, params.cardId, playerIdx)
    else if (action === "finishPose") res = actFinishOnPose(s, cur.opts, playerIdx)
    else return
    if (res.error) {
      if (mode === "host" && playerIdx !== myIdx) {
        const client = cur.clients.find(c => c.slot === playerIdx)
        if (client) netRef.current.net.sendTo(client.id, { type: "error", message: res.error })
      } else {
        setWarn(res.error)
      }
    }
    if (res.state) {
      let newState = res.state
      let newScores = cur.scores
      let newRoundHistory = cur.roundHistory
      let newRoundNum = cur.roundNum
      let newGameOver = cur.gameOver
      // Si manche terminée
      if (newState.over && Array.isArray(newState.roundPts)) {
        newScores = cur.scores.map((s, i) => s + newState.roundPts[i])
        newRoundHistory = [...cur.roundHistory, { round: cur.roundNum, pts: newState.roundPts, winner: newState.winner }]
        setScores(newScores); setRoundHistory(newRoundHistory)
        // Fin de partie ?
        if (cur.opts.targetScore > 0 && Math.max(...newScores) >= cur.opts.targetScore) {
          let best = 0
          for (let i = 1; i < newScores.length; i++) if (newScores[i] < newScores[best]) best = i
          newGameOver = best
          setGameOver(best)
        }
      }
      setState(newState)
      if (mode === "local" && newState.phase === "draw" && !newState.over) setPass(true)
      if (mode === "host") broadcastState(newState, cur.opts, newScores, newRoundNum, newRoundHistory, cur.clients, newGameOver)
    }
  }

  function nextRound() {
    const cur = stateRef.current
    const prevPts = cur.state.roundPts
    const starter = pickStarter(cur.opts, prevPts)
    const s = newRound(cur.opts, starter)
    const newRoundNum = cur.roundNum + 1
    setRoundNum(newRoundNum)
    setState(s); setSelected(new Set()); setJokerPicker(null)
    if (mode === "local") setPass(true)
    if (mode === "host") broadcastState(s, cur.opts, cur.scores, newRoundNum, cur.roundHistory, cur.clients, cur.gameOver)
  }

  function quitToMenu() {
    if (!confirm("Quitter la partie ?")) return
    if (netRef.current) { netRef.current.net.destroy(); netRef.current = null }
    localStorage.removeItem("rami-save")
    setState(null); setScreen("mode"); setMode(null); setGameOver(null)
    setConnStatus("offline"); setClients([]); setRoomCode("")
  }

  // ===== Rendu écrans initiaux =====
  if (screen === "mode") return <ModeScreen
    onLocal={() => setScreen("local-setup")}
    onHost={() => setScreen("host-setup")}
    onJoin={() => setScreen("join-setup")}
    hasSave={hasSave}
    onResume={loadSaved} />

  if (screen === "local-setup") return <LocalSetup savedOpts={opts} onStart={startLocal} onBack={() => setScreen("mode")} />
  if (screen === "host-setup") return <HostSetup savedOpts={opts} onStart={startHost} onBack={() => setScreen("mode")} />
  if (screen === "join-setup") return <JoinSetup onJoin={startJoin} onBack={() => setScreen("mode")} />

  if (screen === "host-wait") return (
    <div className="overlay" style={{ background: "linear-gradient(160deg,#0e5a34,#062818)" }}>
      <div className="modal" style={{ textAlign: "center" }}>
        <h1>En attente des joueurs</h1>
        <p style={{ marginBottom: 10 }}>Partage ce code aux autres joueurs :</p>
        <div className="code">{roomCode || "…"}</div>
        <p style={{ marginTop: 14, fontSize: 13, color: "#555" }}>
          Connecté : <span className="status-dot online"></span> {connStatus}<br/>
          Joueurs : {1 + clients.length} / {opts.numPlayers}
        </p>
        <div style={{ marginTop: 14 }}>
          {[0, ...clients.map(c => c.slot)].sort().map(slot => (
            <div key={slot} style={{ padding: 6 }}>
              {slot === 0 ? "Toi (hôte)" : (clients.find(c => c.slot === slot)?.name || `Slot ${slot + 1}`)}
            </div>
          ))}
        </div>
        <button className="btn ghost small" style={{ marginTop: 12, color: "#333", borderColor: "#ccc" }} onClick={quitToMenu}>Annuler</button>
      </div>
    </div>
  )

  if (screen === "joining") return (
    <div className="overlay" style={{ background: "linear-gradient(160deg,#0e5a34,#062818)" }}>
      <div className="modal" style={{ textAlign: "center" }}>
        <h1>Connexion…</h1>
        <p><span className={"status-dot " + connStatus}></span> {connStatus === "online" ? "En attente que l'hôte lance la partie" : "Connexion en cours…"}</p>
        <button className="btn ghost small" style={{ marginTop: 12, color: "#333", borderColor: "#ccc" }} onClick={quitToMenu}>Annuler</button>
      </div>
    </div>
  )

  // ===== Écran de jeu =====
  if (!state) return <div className="wrap">Chargement…</div>

  const n = opts.numPlayers
  const names = opts.names.slice(0, n)
  const viewerIdx = mode === "local" ? state.current : myIdx
  const isMyTurn = state.current === viewerIdx
  const hand = state.hands[viewerIdx] || []
  const visibleHand = hand.filter(c => !c.hidden)
  const selectedCards = visibleHand.filter(c => selected.has(c.id))
  const analysis = analyzeCombo(selectedCards)
  const selPts = analysis.valid ? analysis.points : null
  const top = state.defausse[state.defausse.length - 1]
  const lastDiscards = state.defausse.slice(-5)

  function toggleSel(id) {
    const s = new Set(selected)
    if (s.has(id)) s.delete(id); else s.add(id)
    setSelected(s)
  }

  function doPose() {
    if (!analysis.valid) return setWarn("Sélection invalide.")
    dispatch("pose", { cardIds: selectedCards.map(c => c.id) })
    setSelected(new Set())
  }

  function doExtend(meldIdx) {
    if (selectedCards.length !== 1) return setWarn("Sélectionne 1 carte.")
    const card = selectedCards[0]
    const m = state.melds[meldIdx]
    if (!canExtend(m, card)) return setWarn("Extension impossible.")
    let sideHint = null
    if (m.type === "run" && card.joker) {
      const lo = m.aceHigh ? 2 : 1, hi = m.aceHigh ? 14 : 13
      const leftOk = m.start - 1 >= lo, rightOk = m.end + 1 <= hi
      if (leftOk && rightOk) sideHint = confirm("Insérer au DÉBUT ? (Annuler = fin)") ? "start" : "end"
    }
    dispatch("extend", { meldIdx, cardId: card.id, sideHint })
    setSelected(new Set())
  }

  function doDiscard(cardId) {
    dispatch("discard", { cardId })
    setSelected(new Set()); setConfirmDiscard(null)
  }

  function openJokerPicker(meldIdx, jokerIdx) {
    if (!isMyTurn) return setWarn("Pas ton tour.")
    if (state.phase !== "play") return setWarn("Pioche d'abord.")
    if (state.retrievedJokerId) return setWarn("Réutilise d'abord le joker déjà repris.")
    const m = state.melds[meldIdx]
    const options = jokerReplacements(m, jokerIdx)
    const candidates = visibleHand.filter(c => !c.joker && options.some(o => o.rank === c.rank && o.suit === c.suit))
    if (candidates.length === 0) return setWarn("Tu n'as pas la carte exacte.")
    setJokerPicker({ meldIdx, jokerIdx, candidates })
  }

  function doJokerSwap(cardId) {
    const { meldIdx, jokerIdx } = jokerPicker
    dispatch("retrieve", { meldIdx, jokerIdx, myCardId: cardId })
    setJokerPicker(null)
  }

  function doFinishPose() { dispatch("finishPose", {}) }

  const canDraw = isMyTurn && state.phase === "draw"
  const canAct = isMyTurn && state.phase === "play" && !state.over

  // === Rendu jeu ===
  return (
    <div className="wrap">
      <div className="top">
        <div className="brand">
          <div className="brand-title">🃏 RAMI</div>
          <div className="brand-sub">
            Manche {roundNum} · {opts.openMin > 0 ? `ouv. ${opts.openMin}` : "ouv. libre"}
            {mode !== "local" && <> · <span className={"status-dot " + connStatus}></span>{mode === "host" ? `Hôte ${roomCode}` : "Client"}</>}
          </div>
        </div>
        <div className="pscores">
          {names.map((nm, i) => (
            <div key={i} className={"pchip" + (i === state.current ? " cur" : "")}>
              <div className="nm">{nm}{i === viewerIdx ? " (toi)" : ""}</div>
              <div className="sc">{scores[i] ?? 0} pts</div>
              <div className="st">
                {state.hands[i] ? (state.hands[i].length + " c.") : ""}
                {state.hasOpened[i] ? " ✓" : ""}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <button className="btn ghost small" onClick={() => setShowHelp(true)}>?</button>
          <button className="btn ghost small" onClick={quitToMenu}>✕</button>
        </div>
      </div>

      {warn && <div className="warn">{warn}</div>}

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} opts={opts} />}

      {jokerPicker && (
        <div className="overlay" onClick={() => setJokerPicker(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h1>Reprendre le joker</h1>
            <p style={{ marginBottom: 12, color: "#555" }}>Choisis la carte de ta main qui remplace ce joker. Tu dois le réutiliser ce tour-ci avant de défausser.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {jokerPicker.candidates.map(c => (
                <div key={c.id} onClick={() => doJokerSwap(c.id)}><CardView card={c} pickable /></div>
              ))}
            </div>
            <div style={{ textAlign: "right", marginTop: 14 }}>
              <button className="btn ghost small" style={{ color: "#333", borderColor: "#ccc" }} onClick={() => setJokerPicker(null)}>Annuler</button>
            </div>
          </div>
        </div>
      )}

      {confirmDiscard !== null && (
        <div className="overlay" onClick={() => setConfirmDiscard(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h1>Confirmer la défausse ?</h1>
            <p>Défausser cette carte terminera ton tour.</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 12 }}>
              <button className="btn ghost small" style={{ color: "#333", borderColor: "#ccc" }} onClick={() => setConfirmDiscard(null)}>Annuler</button>
              <button className="btn danger" onClick={() => doDiscard(confirmDiscard)}>Défausser</button>
            </div>
          </div>
        </div>
      )}

      {gameOver !== null && (
        <div className="overlay">
          <div className="modal">
            <h1>🏆 Fin de partie</h1>
            <p style={{ fontSize: 16, marginBottom: 10 }}>{names[gameOver]} gagne avec {scores[gameOver]} points !</p>
            <div className="help">
              {names.map((nm, i) => <div key={i}>{i === gameOver ? "🥇 " : ""}{nm} : <b>{scores[i]}</b> pts</div>)}
            </div>
            {roundHistory.length > 0 && (
              <details>
                <summary style={{ cursor: "pointer", fontWeight: 700, margin: "8px 0" }}>Historique des manches</summary>
                <div style={{ fontSize: 12 }}>
                  {roundHistory.map((r, i) => (
                    <div key={i}>M{r.round} — gagnant {names[r.winner]} — {r.pts.map((p, j) => `${names[j]}: +${p}`).join(", ")}</div>
                  ))}
                </div>
              </details>
            )}
            <div style={{ textAlign: "right", marginTop: 14 }}>
              <button className="btn" onClick={quitToMenu}>Nouvelle partie</button>
            </div>
          </div>
        </div>
      )}

      {state.over && gameOver === null && (
        <div className="overlay">
          <div className="modal">
            <h1>🏆 {names[state.winner]} remporte la manche</h1>
            <div className="help">
              {names.map((nm, i) => <div key={i}>{nm} : +{state.roundPts?.[i] ?? 0} → total {scores[i]} pts</div>)}
            </div>
            {(mode === "local" || mode === "host") && (
              <div style={{ textAlign: "right", marginTop: 14 }}>
                <button className="btn" onClick={nextRound}>Manche suivante</button>
              </div>
            )}
            {mode === "client" && <p style={{ marginTop: 12, fontSize: 13, color: "#555", textAlign: "center" }}>En attente de l'hôte pour lancer la manche suivante…</p>}
          </div>
        </div>
      )}

      {mode === "local" && pass && !state.over && gameOver === null && (
        <div className="overlay">
          <div className="modal" style={{ textAlign: "center" }}>
            <h1>Au tour de {names[state.current]}</h1>
            <p style={{ margin: "10px 0", color: "#555" }}>Passe l'appareil puis appuie.</p>
            <button className="btn" onClick={() => setPass(false)}>Révéler ma main</button>
          </div>
        </div>
      )}

      <h2>Combinaisons {state.melds.length > 0 && "(clique une combi pour la compléter, ou un joker vert pour le reprendre)"}</h2>
      <div className="melds">
        {state.melds.length === 0 && <div style={{ opacity: .6, alignSelf: "center", padding: 8 }}>Rien sur la table.</div>}
        {state.melds.map((m, i) => (
          <MeldView key={i} meld={m}
            ownerName={names[m.owner]}
            isMine={m.owner === viewerIdx}
            highlight={canAct && selectedCards.length === 1 && canExtend(m, selectedCards[0])}
            onExtend={canAct && selectedCards.length === 1 && canExtend(m, selectedCards[0]) ? () => doExtend(i) : undefined}
            onJokerClick={canAct ? (ji) => openJokerPicker(i, ji) : undefined}
            jokerRetrievable={(ji) => {
              if (!canAct || state.retrievedJokerId) return false
              const os = jokerReplacements(m, ji)
              return visibleHand.some(c => !c.joker && os.some(o => o.rank === c.rank && o.suit === c.suit))
            }} />
        ))}
      </div>

      <div className="piles">
        <div className="pile">
          <div className="pile-title">Pioche</div>
          <div className="back" onClick={() => canDraw && dispatch("draw", { source: "pioche" })}>★</div>
          <button className="btn small" disabled={!canDraw} onClick={() => dispatch("draw", { source: "pioche" })}>Piocher ({state.pioche.length})</button>
        </div>
        <div className="pile">
          <div className="pile-title">Défausse</div>
          <div className="disc-stack">
            {lastDiscards.length === 0 && <div className="back" style={{ opacity: .3 }}>∅</div>}
            {lastDiscards.map((c, i) => (
              <div key={c.id} style={{ marginLeft: i === 0 ? 0 : -30, opacity: i === lastDiscards.length - 1 ? 1 : .55 }}>
                <CardView card={c} small={i !== lastDiscards.length - 1}
                  onClick={i === lastDiscards.length - 1 && canDraw ? () => dispatch("draw", { source: "defausse" }) : undefined} />
              </div>
            ))}
          </div>
          <button className="btn small" disabled={!canDraw || !top} onClick={() => dispatch("draw", { source: "defausse" })}>Prendre ({state.defausse.length})</button>
        </div>
      </div>

      {hand.length === 0 && isMyTurn && !opts.endOnDiscardOnly && (
        <div style={{ textAlign: "center", padding: 12 }}>
          <button className="btn" onClick={doFinishPose}>Terminer la manche (main vide)</button>
        </div>
      )}

      <div className="staging">
        <div className="staging-inner">
          <div style={{ fontWeight: 700, minWidth: 100 }}>{selectedCards.length} carte(s)</div>
          {selPts !== null ? (
            <span className="pill">{analysis.type === "set" ? (selectedCards.length === 4 ? "Carré" : "Brelan") : "Suite"} — {selPts} pts</span>
          ) : (
            <span style={{ opacity: .8, fontSize: 12 }}>
              {selectedCards.length === 0 ? "Sélectionne des cartes…" : (analysis.reason || "Invalide")}
            </span>
          )}
          {state.retrievedJokerId && <span className="pill" style={{ background: "#22c55e", color: "#fff" }}>Joker à réutiliser</span>}
          <div style={{ flex: 1 }} />
          <button className="btn small" disabled={!canAct || !analysis.valid} onClick={doPose}>Poser</button>
          <button className="btn small danger" disabled={!canAct || selectedCards.length !== 1} onClick={() => setConfirmDiscard(selectedCards[0].id)}>Défausser</button>
          <button className="btn ghost small" disabled={selected.size === 0} onClick={() => setSelected(new Set())}>Vider</button>
        </div>
      </div>

      <div className="hand">
        <div className="hand-scroll">
          {hand.length === 0 && <div style={{ opacity: .7, alignSelf: "center" }}>Main vide.</div>}
          {sortHand(visibleHand).map(c => (
            <CardView key={c.id} card={c} selected={selected.has(c.id)}
              extraClass={c.id === state.retrievedJokerId ? "retr" : null}
              onClick={() => toggleSel(c.id)} />
          ))}
          {hand.filter(c => c.hidden).map((_, i) => <CardView key={"h" + i} card={{}} hidden />)}
        </div>
      </div>
    </div>
  )
}
