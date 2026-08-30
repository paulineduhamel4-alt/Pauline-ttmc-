import { useState, useMemo, useEffect } from "react"

// ============ Cartes ============
const SUITS = ["♠", "♥", "♦", "♣"]
const SUIT_COLOR = { "♠": "#1C1C1A", "♣": "#1C1C1A", "♥": "#C0392B", "♦": "#C0392B" }
const RANK_LABEL = { 1: "A", 11: "V", 12: "D", 13: "R" }
function rankLabel(r) { return RANK_LABEL[r] || String(r) }

function handValue(c) {
  if (c.joker) return 20
  if (c.rank === 1) return 11
  if (c.rank >= 11) return 10
  return c.rank
}
function meldValue(rank, aceLow) {
  if (rank === 1) return aceLow ? 1 : 11
  if (rank >= 11) return 10
  return rank
}

function buildDeck() {
  const cards = []
  let id = 0
  for (let d = 0; d < 2; d++) {
    for (const s of SUITS) {
      for (let r = 1; r <= 13; r++) {
        cards.push({ id: id++, suit: s, rank: r, joker: false, deck: d })
      }
    }
    cards.push({ id: id++, suit: null, rank: null, joker: true, deck: d })
    cards.push({ id: id++, suit: null, rank: null, joker: true, deck: d })
  }
  return cards
}

function shuffle(a) {
  const b = a.slice()
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[b[i], b[j]] = [b[j], b[i]]
  }
  return b
}

// ============ Validation combi ============
function analyzeCombo(cards) {
  if (!cards || cards.length < 3) return { valid: false, reason: "Il faut au moins 3 cartes." }
  const jokers = cards.filter(c => c.joker)
  const natural = cards.filter(c => !c.joker)

  // BRELAN / CARRÉ
  if (natural.length === 0 || natural.every(c => c.rank === natural[0].rank)) {
    const rank = natural.length ? natural[0].rank : null
    const suits = natural.map(c => c.suit)
    if (new Set(suits).size === suits.length && cards.length <= 4 && rank !== null) {
      const pts = cards.length * meldValue(rank, false)
      return { valid: true, type: "set", rank, points: pts, cards: cards.slice() }
    }
  }

  // SUITE — toutes de la même couleur
  if (natural.length && natural.every(c => c.suit === natural[0].suit)) {
    const suit = natural[0].suit
    for (const aceHigh of [false, true]) {
      const vals = natural.map(c => (aceHigh && c.rank === 1 ? 14 : c.rank))
      const sorted = vals.slice().sort((a, b) => a - b)
      if (new Set(sorted).size !== sorted.length) continue
      const min = sorted[0], max = sorted[sorted.length - 1]
      const gaps = (max - min + 1) - sorted.length
      if (gaps < 0 || gaps > jokers.length) continue
      let left = jokers.length - gaps
      const lo = aceHigh ? 2 : 1
      const hi = aceHigh ? 14 : 13
      let start = min, end = max
      const takeLeft = Math.min(start - lo, left); start -= takeLeft; left -= takeLeft
      const takeRight = Math.min(hi - end, left); end += takeRight; left -= takeRight
      if (left > 0) continue
      if (end - start + 1 < 3) continue
      let pts = 0
      for (let v = start; v <= end; v++) {
        const r = v === 14 ? 1 : v
        pts += meldValue(r, !aceHigh && v === 1)
      }
      const meld = { valid: true, type: "run", suit, start, end, aceHigh, points: pts, cards: cards.slice() }
      meld.cards = orderRunCards(meld)
      return meld
    }
  }
  return { valid: false, reason: "Ce n'est ni un brelan/carré ni une suite valide." }
}

function orderRunCards(meld) {
  const nat = meld.cards.filter(c => !c.joker)
  const jok = meld.cards.filter(c => c.joker).slice()
  const ordered = []
  for (let v = meld.start; v <= meld.end; v++) {
    const idx = nat.findIndex(c => (meld.aceHigh && c.rank === 1 ? 14 : c.rank) === v)
    if (idx >= 0) { ordered.push(nat[idx]); nat.splice(idx, 1) }
    else if (jok.length) { ordered.push(jok.shift()) }
  }
  return ordered
}

function canExtend(meld, card) {
  if (!card) return false
  if (meld.type === "set") {
    if (meld.cards.length >= 4) return false
    if (card.joker) return true
    if (card.rank !== meld.rank) return false
    const usedSuits = new Set(meld.cards.filter(c => !c.joker).map(c => c.suit))
    return !usedSuits.has(card.suit)
  }
  if (meld.type === "run") {
    const lo = meld.aceHigh ? 2 : 1
    const hi = meld.aceHigh ? 14 : 13
    const before = meld.start - 1
    const after = meld.end + 1
    if (card.joker) return before >= lo || after <= hi
    if (card.suit !== meld.suit) return false
    const v = meld.aceHigh && card.rank === 1 ? 14 : card.rank
    if (v === before && before >= lo) return true
    if (v === after && after <= hi) return true
    return false
  }
  return false
}

function extendMeld(meld, card) {
  const next = { ...meld, cards: meld.cards.slice() }
  if (meld.type === "set") {
    next.cards.push(card)
    next.points = next.cards.length * meldValue(next.rank, false)
    return next
  }
  const lo = meld.aceHigh ? 2 : 1
  const hi = meld.aceHigh ? 14 : 13
  const before = meld.start - 1
  const after = meld.end + 1
  let side
  if (card.joker) side = after <= hi ? "end" : "start"
  else {
    const v = meld.aceHigh && card.rank === 1 ? 14 : card.rank
    side = v === before ? "start" : "end"
  }
  if (side === "start") { next.start = before; next.cards = [card, ...next.cards] }
  else { next.end = after; next.cards = [...next.cards, card] }
  let pts = 0
  for (let v = next.start; v <= next.end; v++) {
    const r = v === 14 ? 1 : v
    pts += meldValue(r, !meld.aceHigh && v === 1)
  }
  next.points = pts
  return next
}

// Ce qu'un joker représente à un index donné d'une combi
function jokerReplacements(meld, jokerIdx) {
  if (meld.type === "set") {
    const usedSuits = new Set(meld.cards.filter(c => !c.joker).map(c => c.suit))
    return SUITS.filter(s => !usedSuits.has(s)).map(s => ({ suit: s, rank: meld.rank }))
  }
  // run : cards est ordonné start..end
  const v = meld.start + jokerIdx
  const rank = v === 14 ? 1 : v
  return [{ suit: meld.suit, rank }]
}

// Remplace la carte du meld par 'newCard' (sans revalider la structure car on met exactement ce qu'il représentait)
function replaceCardInMeld(meld, cardIdx, newCard) {
  const cards = meld.cards.slice()
  cards[cardIdx] = newCard
  return { ...meld, cards }
}

// ============ Réglages / Setup ============
const DEFAULT_OPTS = {
  numPlayers: 2,
  names: ["Joueur 1", "Joueur 2", "Joueur 3", "Joueur 4", "Joueur 5"],
  openMin: 51, // 0 / 30 / 51
}

function loadSave() {
  try {
    const raw = localStorage.getItem("rami-save")
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

// ============ CSS ============
const CSS = `
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
body,html,#root{background:#0B5B3A;min-height:100vh}
button{cursor:pointer;font-family:inherit}
button:disabled{opacity:.4;cursor:not-allowed}
input,select{font-family:inherit;padding:8px 10px;border-radius:8px;border:1px solid #ccc;font-size:14px;width:100%}
label{display:flex;flex-direction:column;gap:4px;font-size:13px;color:#333}
.wrap{max-width:1100px;margin:0 auto;padding:12px;color:#fff}
.top{display:flex;justify-content:space-between;align-items:center;gap:12px;background:#0A4A30;border-radius:12px;padding:10px 16px;margin-bottom:10px;flex-wrap:wrap}
.card{width:56px;height:80px;border-radius:8px;background:#fff;border:1.5px solid #d0d0d0;display:flex;flex-direction:column;justify-content:space-between;padding:4px 6px;font-weight:700;user-select:none;position:relative;box-shadow:0 2px 4px rgba(0,0,0,.2);flex-shrink:0}
.card.small{width:42px;height:60px;font-size:13px;padding:3px 4px}
.card.sel{transform:translateY(-14px);box-shadow:0 6px 14px rgba(0,0,0,.35);border-color:#FFD666;border-width:2.5px}
.card.joker{background:linear-gradient(135deg,#FDE68A,#F59E0B);color:#7C2D12}
.card.pickable{cursor:pointer;outline:2px solid #22c55e;outline-offset:2px}
.card .tl{font-size:16px;line-height:1}
.card .br{font-size:16px;line-height:1;align-self:flex-end;transform:rotate(180deg)}
.card.small .tl,.card.small .br{font-size:13px}
.hand{display:flex;flex-wrap:wrap;gap:6px;padding:14px 10px;background:#083D28;border-radius:12px;min-height:110px}
.melds{display:flex;flex-wrap:wrap;gap:10px;padding:12px;background:#083D28;border-radius:12px;min-height:110px}
.meld{background:rgba(255,255,255,.08);border-radius:10px;padding:6px;display:flex;gap:4px;align-items:center;border:2px solid transparent}
.meld.ext{border-color:#FFD666}
.piles{display:flex;gap:20px;align-items:center;justify-content:center;padding:14px;background:#083D28;border-radius:12px;margin:10px 0}
.pile{display:flex;flex-direction:column;align-items:center;gap:6px}
.back{width:56px;height:80px;border-radius:8px;background:repeating-linear-gradient(45deg,#7c2d12,#7c2d12 6px,#991b1b 6px,#991b1b 12px);border:1.5px solid #4a1a0a;display:flex;align-items:center;justify-content:center;color:#FFD666;font-weight:900;box-shadow:0 2px 4px rgba(0,0,0,.3)}
.btn{padding:10px 16px;border-radius:10px;border:none;background:#FFD666;color:#1C1C1A;font-weight:700;font-size:14px}
.btn.ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.4)}
.btn.danger{background:#EF4444;color:#fff}
.btn.small{padding:6px 10px;font-size:12px}
.staging{background:#0A4A30;border-radius:12px;padding:12px;margin:10px 0;display:flex;gap:10px;align-items:center;flex-wrap:wrap;min-height:80px}
.info{background:rgba(255,255,255,.1);padding:6px 12px;border-radius:8px;font-size:13px}
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;z-index:10;padding:20px;text-align:center;color:#fff}
.modal{background:#fff;color:#1C1C1A;border-radius:14px;padding:20px;max-width:520px;width:100%;text-align:left;max-height:90vh;overflow-y:auto}
.modal h1{font-size:20px;margin-bottom:14px}
h1{font-size:22px}h2{font-size:18px;margin-bottom:8px}
.pill{background:#FFD666;color:#1C1C1A;padding:4px 10px;border-radius:20px;font-weight:700;font-size:13px}
.retr{border:2px solid #22c55e!important;box-shadow:0 0 0 3px rgba(34,197,94,.4)}
`

function CardView({ card, selected, onClick, small, pickable, extraClass }) {
  const cls = ["card"]
  if (small) cls.push("small")
  if (selected) cls.push("sel")
  if (card.joker) cls.push("joker")
  if (pickable) cls.push("pickable")
  if (extraClass) cls.push(extraClass)
  const color = card.joker ? "#7C2D12" : SUIT_COLOR[card.suit]
  return (
    <div className={cls.join(" ")} style={{ color }} onClick={onClick}>
      {card.joker ? (
        <>
          <div className="tl">★</div>
          <div style={{ textAlign: "center", fontSize: small ? 10 : 12 }}>JOKER</div>
          <div className="br">★</div>
        </>
      ) : (
        <>
          <div className="tl">{rankLabel(card.rank)}<br />{card.suit}</div>
          <div className="br">{rankLabel(card.rank)}<br />{card.suit}</div>
        </>
      )}
    </div>
  )
}

function MeldView({ meld, ownerName, highlight, onExtend, onJokerClick, jokerRetrievable }) {
  const label = meld.type === "set"
    ? `Brelan/Carré ${rankLabel(meld.rank)}`
    : `Suite ${meld.suit} ${rankLabel(meld.start === 14 ? 1 : meld.start)}→${rankLabel(meld.end === 14 ? 1 : meld.end)}`
  return (
    <div className={"meld" + (highlight ? " ext" : "")} title={label}>
      <div onClick={onExtend} style={{ display: "flex", gap: 4, cursor: onExtend ? "pointer" : "default" }}>
        {meld.cards.map((c, i) => (
          <CardView key={i} card={c} small
            extraClass={c.joker && jokerRetrievable && jokerRetrievable(i) ? "retr" : null}
            onClick={c.joker && onJokerClick ? (e) => { e.stopPropagation(); onJokerClick(i) } : undefined} />
        ))}
      </div>
      <div style={{ marginLeft: 6, fontSize: 12, opacity: .85, display: "flex", flexDirection: "column" }}>
        <span>{meld.points} pts</span>
        <span style={{ fontSize: 10, opacity: .7 }}>{ownerName}</span>
      </div>
    </div>
  )
}

function newRound(numPlayers, startingPlayer) {
  const deck = shuffle(buildDeck())
  const hs = 13
  const hands = []
  for (let i = 0; i < numPlayers; i++) hands.push(deck.slice(i * hs, (i + 1) * hs))
  const rest = deck.slice(numPlayers * hs)
  let idx = 0
  while (rest[idx]?.joker) idx++
  const first = rest.splice(idx, 1)[0]
  return {
    hands,
    pioche: rest,
    defausse: [first],
    melds: [],
    hasOpened: Array(numPlayers).fill(false),
    current: startingPlayer,
    phase: "draw",
    over: false, winner: null, roundPts: 0,
    retrievedJokerId: null, // joker repris ce tour à réutiliser obligatoirement
  }
}

// ============ App ============
export default function App() {
  const [screen, setScreen] = useState("boot") // boot / setup / play
  const [opts, setOpts] = useState(DEFAULT_OPTS)
  const [scores, setScores] = useState([0, 0])
  const [roundNum, setRoundNum] = useState(1)
  const [state, setState] = useState(null)
  const [selected, setSelected] = useState(new Set())
  const [pass, setPass] = useState(true)
  const [jokerPicker, setJokerPicker] = useState(null) // { meldIdx, jokerIdx, options }

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = CSS
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  // Boot : proposer reprise si sauvegarde
  useEffect(() => {
    if (screen !== "boot") return
    const save = loadSave()
    if (save && save.state) {
      // Auto-reprise transparente
      setOpts(save.opts)
      setScores(save.scores)
      setRoundNum(save.roundNum)
      setState(save.state)
      setPass(true)
      setScreen("play")
    } else {
      setScreen("setup")
    }
  }, [screen])

  // Auto-save
  useEffect(() => {
    if (screen !== "play" || !state) return
    localStorage.setItem("rami-save", JSON.stringify({ opts, scores, roundNum, state }))
  }, [screen, state, scores, roundNum, opts])

  function startNewGame(newOpts) {
    setOpts(newOpts)
    setScores(Array(newOpts.numPlayers).fill(0))
    setRoundNum(1)
    setState(newRound(newOpts.numPlayers, 0))
    setSelected(new Set())
    setPass(true)
    setJokerPicker(null)
    setScreen("play")
  }

  function resetSaveAndSetup() {
    if (!confirm("Abandonner la partie en cours ?")) return
    localStorage.removeItem("rami-save")
    setScreen("setup")
  }

  if (screen === "boot") return <div className="wrap">Chargement…</div>
  if (screen === "setup") return <SetupScreen opts={opts} onStart={startNewGame} />

  // ==== En jeu ====
  const n = opts.numPlayers
  const names = opts.names.slice(0, n)
  const cur = state.current
  const hand = state.hands[cur]
  const selectedCards = hand.filter(c => selected.has(c.id))
  const analysis = analyzeCombo(selectedCards)
  const selPts = analysis.valid ? analysis.points : null

  function toggleSel(cardId) {
    const s = new Set(selected)
    if (s.has(cardId)) s.delete(cardId); else s.add(cardId)
    setSelected(s)
  }

  function drawFrom(source) {
    if (state.phase !== "draw") return
    let card, pioche = state.pioche, defausse = state.defausse
    if (source === "pioche") {
      if (pioche.length === 0) return
      card = pioche[0]; pioche = pioche.slice(1)
    } else {
      if (defausse.length === 0) return
      card = defausse[defausse.length - 1]; defausse = defausse.slice(0, -1)
    }
    const hands = state.hands.map((h, i) => i === cur ? [...h, card] : h)
    if (pioche.length === 0 && defausse.length > 1) {
      const top = defausse[defausse.length - 1]
      pioche = shuffle(defausse.slice(0, -1))
      defausse = [top]
    }
    setState({ ...state, hands, pioche, defausse, phase: "play" })
  }

  function poseCombo() {
    if (!analysis.valid) return alert("Sélection invalide.")
    if (!state.hasOpened[cur] && opts.openMin > 0 && analysis.points < opts.openMin) {
      return alert(`Ouverture : il faut au moins ${opts.openMin} points. Cette combi vaut ${analysis.points}.`)
    }
    const newMeld = { ...analysis, owner: cur }
    const newHand = hand.filter(c => !selected.has(c.id))
    const hands = state.hands.map((h, i) => i === cur ? newHand : h)
    const hasOpened = state.hasOpened.slice()
    hasOpened[cur] = true
    // Joker repris consommé s'il fait partie de la combi
    let retrievedJokerId = state.retrievedJokerId
    if (retrievedJokerId && selectedCards.some(c => c.id === retrievedJokerId)) retrievedJokerId = null
    setState({ ...state, hands, melds: [...state.melds, newMeld], hasOpened, retrievedJokerId })
    setSelected(new Set())
    if (newHand.length === 0) endRound(hands, cur)
  }

  function extendOn(meldIdx) {
    if (!state.hasOpened[cur]) return alert(`Ouvre d'abord (min ${opts.openMin} pts).`)
    if (selectedCards.length !== 1) return alert("Sélectionne 1 seule carte pour compléter une combi.")
    const card = selectedCards[0]
    const m = state.melds[meldIdx]
    if (!canExtend(m, card)) return alert("Cette carte ne complète pas cette combi.")
    const nm = extendMeld(m, card)
    const melds = state.melds.map((x, i) => i === meldIdx ? nm : x)
    const newHand = hand.filter(c => c.id !== card.id)
    const hands = state.hands.map((h, i) => i === cur ? newHand : h)
    let retrievedJokerId = state.retrievedJokerId
    if (retrievedJokerId === card.id) retrievedJokerId = null
    setState({ ...state, melds, hands, retrievedJokerId })
    setSelected(new Set())
    if (newHand.length === 0) endRound(hands, cur)
  }

  function discard() {
    if (state.phase !== "play") return alert("Pioche d'abord.")
    if (selectedCards.length !== 1) return alert("Sélectionne 1 carte à défausser.")
    if (state.retrievedJokerId) {
      return alert("Tu as repris un joker : tu dois le réutiliser dans une combi ou une extension avant de défausser.")
    }
    const card = selectedCards[0]
    const newHand = hand.filter(c => c.id !== card.id)
    const hands = state.hands.map((h, i) => i === cur ? newHand : h)
    setSelected(new Set())
    if (newHand.length === 0) {
      endRound(hands, cur, [...state.defausse, card])
      return
    }
    const defausse = [...state.defausse, card]
    setState({ ...state, hands, defausse, phase: "draw", current: (cur + 1) % n, retrievedJokerId: null })
    setPass(true)
  }

  function endRound(hands, winner, defausseFinal) {
    const ns = scores.slice()
    for (let i = 0; i < n; i++) {
      if (i === winner) continue
      ns[i] += hands[i].reduce((s, c) => s + handValue(c), 0)
    }
    const roundPts = hands.map((h, i) => i === winner ? 0 : h.reduce((s, c) => s + handValue(c), 0))
    setScores(ns)
    setState({ ...state, hands, defausse: defausseFinal || state.defausse, over: true, winner, roundPts })
  }

  function nextRound() {
    setRoundNum(r => r + 1)
    // Le perdant de la manche (main la plus lourde) commence
    let starter = (state.winner + 1) % n
    if (Array.isArray(state.roundPts)) {
      const worst = state.roundPts.indexOf(Math.max(...state.roundPts))
      if (worst >= 0) starter = worst
    }
    setState(newRound(n, starter))
    setSelected(new Set())
    setPass(true)
  }

  function openJokerPicker(meldIdx, jokerIdx) {
    if (state.phase !== "play") { alert("Pioche d'abord."); return }
    if (state.retrievedJokerId) { alert("Réutilise d'abord le joker déjà repris."); return }
    const m = state.melds[meldIdx]
    const options = jokerReplacements(m, jokerIdx)
    // Cartes de ma main qui correspondent
    const candidates = hand.filter(c => !c.joker && options.some(o => o.rank === c.rank && o.suit === c.suit))
    if (candidates.length === 0) {
      alert("Tu n'as pas la carte exacte que ce joker représente.")
      return
    }
    setJokerPicker({ meldIdx, jokerIdx, candidates })
  }

  function doJokerSwap(cardId) {
    const { meldIdx, jokerIdx } = jokerPicker
    const m = state.melds[meldIdx]
    const jokerCard = m.cards[jokerIdx]
    const myCard = hand.find(c => c.id === cardId)
    if (!myCard || !jokerCard?.joker) { setJokerPicker(null); return }
    // remplace joker par ma carte dans le meld ; le joker vient dans ma main
    const newMeld = replaceCardInMeld(m, jokerIdx, myCard)
    const melds = state.melds.map((x, i) => i === meldIdx ? newMeld : x)
    const newHand = hand.filter(c => c.id !== cardId).concat([jokerCard])
    const hands = state.hands.map((h, i) => i === cur ? newHand : h)
    setState({ ...state, melds, hands, retrievedJokerId: jokerCard.id })
    setSelected(new Set())
    setJokerPicker(null)
  }

  const top = state.defausse[state.defausse.length - 1]

  return (
    <div className="wrap">
      <div className="top">
        <div>
          <div style={{ fontSize: 20, fontWeight: 800 }}>🃏 Rami</div>
          <div style={{ opacity: .8, fontSize: 12 }}>Manche {roundNum} · ouverture {opts.openMin > 0 ? `${opts.openMin} pts` : "libre"} · {n} joueurs</div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          {names.map((nm, i) => (
            <div key={i} className="info" style={{ background: i === cur ? "rgba(255,214,102,.3)" : "rgba(255,255,255,.1)" }}>
              {nm} : <b>{scores[i]}</b>
            </div>
          ))}
          <button className="btn ghost small" onClick={resetSaveAndSetup}>↻ Nouvelle partie</button>
        </div>
      </div>

      {jokerPicker && (
        <div className="overlay" onClick={() => setJokerPicker(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h1>Reprendre le joker</h1>
            <p style={{ marginBottom: 12 }}>Choisis la carte de ta main qui remplace ce joker. Tu devras réutiliser le joker ce tour-ci (dans une nouvelle combi ou une extension) avant de défausser.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {jokerPicker.candidates.map(c => (
                <div key={c.id} onClick={() => doJokerSwap(c.id)}>
                  <CardView card={c} pickable />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, textAlign: "right" }}>
              <button className="btn ghost small" style={{ color: "#333", borderColor: "#ccc" }} onClick={() => setJokerPicker(null)}>Annuler</button>
            </div>
          </div>
        </div>
      )}

      {pass && !state.over && (
        <div className="overlay">
          <h1>Au tour de {names[cur]}</h1>
          <p style={{ opacity: .8 }}>Passe l'appareil puis appuie pour révéler la main.</p>
          <button className="btn" onClick={() => setPass(false)}>Révéler ma main</button>
        </div>
      )}

      {state.over && (
        <div className="overlay">
          <h1>🏆 {names[state.winner]} remporte la manche !</h1>
          <div style={{ background: "rgba(255,255,255,.1)", padding: 12, borderRadius: 10 }}>
            {names.map((nm, i) => (
              <div key={i}>{nm} : +{state.roundPts?.[i] ?? 0} → <b>{scores[i]}</b> pts</div>
            ))}
          </div>
          <button className="btn" onClick={nextRound}>Manche suivante</button>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <h2>Tour de <span className="pill">{names[cur]}</span></h2>
        <div style={{ fontSize: 12, opacity: .85 }}>
          {state.hasOpened[cur] ? "✅ Ouvert" : (opts.openMin > 0 ? `⚠️ Pas ouvert (${opts.openMin} pts min)` : "Ouverture libre")}
          {state.retrievedJokerId && <span style={{ marginLeft: 8, background: "#22c55e", color: "#fff", padding: "2px 8px", borderRadius: 8 }}>Joker à réutiliser</span>}
        </div>
      </div>

      <h3 style={{ fontSize: 13, opacity: .85, margin: "6px 2px" }}>Combinaisons posées {state.melds.some(m => m.cards.some(c => c.joker)) && "(clique un joker vert pour le reprendre)"}</h3>
      <div className="melds">
        {state.melds.length === 0 && <div style={{ opacity: .6, alignSelf: "center" }}>Aucune combi posée.</div>}
        {state.melds.map((m, i) => (
          <MeldView key={i} meld={m}
            ownerName={names[m.owner]}
            highlight={selectedCards.length === 1 && canExtend(m, selectedCards[0])}
            onExtend={selectedCards.length === 1 && canExtend(m, selectedCards[0]) ? () => extendOn(i) : undefined}
            onJokerClick={state.phase === "play" ? (ji) => openJokerPicker(i, ji) : undefined}
            jokerRetrievable={(ji) => {
              if (state.phase !== "play" || state.retrievedJokerId) return false
              const opts = jokerReplacements(m, ji)
              return hand.some(c => !c.joker && opts.some(o => o.rank === c.rank && o.suit === c.suit))
            }} />
        ))}
      </div>

      <div className="piles">
        <div className="pile">
          <div className="back" onClick={() => drawFrom("pioche")}>★</div>
          <button className="btn" disabled={state.phase !== "draw"} onClick={() => drawFrom("pioche")}>Pioche ({state.pioche.length})</button>
        </div>
        <div className="pile">
          {top ? <CardView card={top} onClick={() => drawFrom("defausse")} /> : <div className="back" style={{ opacity: .3 }}>∅</div>}
          <button className="btn" disabled={state.phase !== "draw" || !top} onClick={() => drawFrom("defausse")}>Défausse ({state.defausse.length})</button>
        </div>
      </div>

      <div className="staging">
        <div style={{ fontWeight: 700 }}>Sélection : {selectedCards.length} carte(s)</div>
        {selPts !== null ? (
          <span className="pill">{analysis.type === "set" ? (selectedCards.length === 4 ? "Carré" : "Brelan") : "Suite"} — {selPts} pts</span>
        ) : (
          <span style={{ opacity: .7, fontSize: 13 }}>
            {selectedCards.length === 0 ? "Choisis des cartes pour former une combi." : (analysis.reason || "Combi invalide")}
          </span>
        )}
        <div style={{ flex: 1 }} />
        <button className="btn" disabled={!analysis.valid || state.phase !== "play"} onClick={poseCombo}>Poser la combi</button>
        <button className="btn danger" disabled={state.phase !== "play" || selectedCards.length !== 1} onClick={discard}>Défausser</button>
        <button className="btn ghost" disabled={selected.size === 0} onClick={() => setSelected(new Set())}>Vider</button>
      </div>

      <h3 style={{ fontSize: 13, opacity: .85, margin: "6px 2px" }}>Main de {names[cur]} ({hand.length})</h3>
      <div className="hand">
        {hand.length === 0 && <div style={{ opacity: .6, alignSelf: "center" }}>Main vide.</div>}
        {hand.slice().sort((a, b) => {
          if (a.joker !== b.joker) return a.joker ? 1 : -1
          if (a.suit !== b.suit) return SUITS.indexOf(a.suit) - SUITS.indexOf(b.suit)
          return a.rank - b.rank
        }).map(c => (
          <CardView key={c.id} card={c} selected={selected.has(c.id)}
            extraClass={c.id === state.retrievedJokerId ? "retr" : null}
            onClick={() => toggleSel(c.id)} />
        ))}
      </div>

      <div style={{ marginTop: 12, fontSize: 12, opacity: .7, textAlign: "center" }}>
        Pioche → pose(s)/extension(s) → défausse. Un joker sur la table entouré de vert peut être repris.
      </div>
    </div>
  )
}

function SetupScreen({ opts, onStart }) {
  const [n, setN] = useState(opts.numPlayers)
  const [names, setNames] = useState(opts.names.slice())
  const [openMin, setOpenMin] = useState(opts.openMin)
  useEffect(() => {
    if (names.length < 5) {
      const filled = names.slice()
      while (filled.length < 5) filled.push(`Joueur ${filled.length + 1}`)
      setNames(filled)
    }
  }, [])
  return (
    <div className="overlay" style={{ background: "#0B5B3A" }}>
      <div className="modal">
        <h1>🃏 Rami — Nouvelle partie</h1>
        <label>Nombre de joueurs
          <select value={n} onChange={e => setN(+e.target.value)}>
            {[2, 3, 4, 5].map(x => <option key={x} value={x}>{x}</option>)}
          </select>
        </label>
        <div style={{ marginTop: 12 }}>
          {Array.from({ length: n }).map((_, i) => (
            <label key={i} style={{ marginTop: 8 }}>Nom du joueur {i + 1}
              <input value={names[i] || ""} onChange={e => {
                const nn = names.slice(); nn[i] = e.target.value; setNames(nn)
              }} />
            </label>
          ))}
        </div>
        <label style={{ marginTop: 12 }}>Minimum d'ouverture
          <select value={openMin} onChange={e => setOpenMin(+e.target.value)}>
            <option value={0}>Aucun (combi valide suffit)</option>
            <option value={30}>30 pts</option>
            <option value={51}>51 pts</option>
          </select>
        </label>
        <div style={{ marginTop: 18, textAlign: "right" }}>
          <button className="btn" onClick={() => onStart({ numPlayers: n, names, openMin })}>Commencer la partie</button>
        </div>
        <p style={{ marginTop: 12, fontSize: 12, color: "#666" }}>La partie est sauvegardée automatiquement dans ce navigateur.</p>
      </div>
    </div>
  )
}
