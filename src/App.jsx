import { useState, useMemo, useEffect } from "react"

// ============ Cartes ============
const SUITS = ["♠", "♥", "♦", "♣"]
const SUIT_COLOR = { "♠": "#1C1C1A", "♣": "#1C1C1A", "♥": "#C0392B", "♦": "#C0392B" }
const RANK_LABEL = { 1: "A", 11: "V", 12: "D", 13: "R" }
function rankLabel(r) { return RANK_LABEL[r] || String(r) }

// Valeur "de main" (pénalité)
function handValue(c) {
  if (c.joker) return 20
  if (c.rank === 1) return 11
  if (c.rank >= 11) return 10
  return c.rank
}
// Valeur d'une carte dans une combi (A=1 si suite basse, sinon 11 ; figures=10)
function meldValue(rank) {
  if (rank === 1) return 11
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
// Renvoie { valid, type, points, detail } où detail décrit la combi normalisée.
function analyzeCombo(cards) {
  if (!cards || cards.length < 3) return { valid: false, reason: "Il faut au moins 3 cartes." }
  const jokers = cards.filter(c => c.joker)
  const natural = cards.filter(c => !c.joker)

  // BRELAN / CARRÉ
  if (natural.length === 0 || natural.every(c => c.rank === natural[0].rank)) {
    const rank = natural.length ? natural[0].rank : null
    const suits = natural.map(c => c.suit)
    const uniqSuits = new Set(suits)
    if (uniqSuits.size === suits.length && cards.length <= 4 && rank !== null) {
      const pts = cards.length * meldValue(rank)
      return { valid: true, type: "set", rank, points: pts, cards: cards.slice() }
    }
  }

  // SUITE — toutes de la même couleur
  if (natural.length && natural.every(c => c.suit === natural[0].suit)) {
    const suit = natural[0].suit
    // Deux modes : As bas (1..13) et As haut (2..14)
    for (const aceHigh of [false, true]) {
      const vals = natural.map(c => (aceHigh && c.rank === 1 ? 14 : c.rank))
      const sorted = vals.slice().sort((a, b) => a - b)
      const uniq = new Set(sorted)
      if (uniq.size !== sorted.length) continue // pas de doublons dans une suite
      const min = sorted[0], max = sorted[sorted.length - 1]
      const span = max - min + 1
      const gaps = span - sorted.length
      if (gaps < 0 || gaps > jokers.length) continue
      const jokersLeft = jokers.length - gaps
      // On peut étendre aux extrémités si des jokers restent
      // Fenêtre autorisée : [1..13] (bas) ou [2..14] (haut)
      const lo = aceHigh ? 2 : 1
      const hi = aceHigh ? 14 : 13
      let start = min
      let end = max
      let left = jokersLeft
      // Étendre à gauche
      const canLeft = start - lo
      const takeLeft = Math.min(canLeft, left)
      start -= takeLeft
      left -= takeLeft
      // Reste à droite
      const canRight = hi - end
      const takeRight = Math.min(canRight, left)
      end += takeRight
      left -= takeRight
      if (left > 0) continue
      const length = end - start + 1
      if (length < 3) continue
      // Points : somme des valeurs de chaque position
      let pts = 0
      for (let v = start; v <= end; v++) {
        const r = v === 14 ? 1 : v
        pts += meldValue(r)
      }
      return { valid: true, type: "run", suit, start, end, aceHigh, points: pts, cards: cards.slice() }
    }
  }
  return { valid: false, reason: "Ce n'est ni un brelan/carré ni une suite valide." }
}

// Tester si une carte peut étendre une combi existante
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
    // On accepte l'ajout à une extrémité (start-1 ou end+1) ou un joker
    // aceHigh : plage [2..14], sinon [1..13]
    const lo = meld.aceHigh ? 2 : 1
    const hi = meld.aceHigh ? 14 : 13
    const before = meld.start - 1
    const after = meld.end + 1
    if (card.joker) {
      return before >= lo || after <= hi
    }
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
    next.points = next.cards.length * meldValue(next.rank)
    return next
  }
  const lo = meld.aceHigh ? 2 : 1
  const hi = meld.aceHigh ? 14 : 13
  const before = meld.start - 1
  const after = meld.end + 1
  let side = null
  if (card.joker) {
    side = after <= hi ? "end" : "start"
  } else {
    const v = meld.aceHigh && card.rank === 1 ? 14 : card.rank
    side = v === before ? "start" : "end"
  }
  if (side === "start") { next.start = before; next.cards = [card, ...next.cards] }
  else { next.end = after; next.cards = [...next.cards, card] }
  // Recalcule points
  let pts = 0
  for (let v = next.start; v <= next.end; v++) {
    const r = v === 14 ? 1 : v
    pts += meldValue(r)
  }
  next.points = pts
  return next
}

// Somme des points d'un ensemble de cartes en tant que combi (pour l'aperçu)
function selectionPoints(cards) {
  const a = analyzeCombo(cards)
  return a.valid ? a.points : null
}

// ============ Composant ============
const CSS = `
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
body,html,#root{background:#0B5B3A;min-height:100vh}
button{cursor:pointer;font-family:inherit}
button:disabled{opacity:.4;cursor:not-allowed}
.wrap{max-width:1100px;margin:0 auto;padding:12px;color:#fff}
.top{display:flex;justify-content:space-between;align-items:center;gap:12px;background:#0A4A30;border-radius:12px;padding:10px 16px;margin-bottom:10px;flex-wrap:wrap}
.card{width:56px;height:80px;border-radius:8px;background:#fff;border:1.5px solid #d0d0d0;display:flex;flex-direction:column;justify-content:space-between;padding:4px 6px;font-weight:700;user-select:none;position:relative;box-shadow:0 2px 4px rgba(0,0,0,.2);flex-shrink:0}
.card.small{width:42px;height:60px;font-size:13px;padding:3px 4px}
.card.sel{transform:translateY(-14px);box-shadow:0 6px 14px rgba(0,0,0,.35);border-color:#FFD666;border-width:2.5px}
.card.joker{background:linear-gradient(135deg,#FDE68A,#F59E0B);color:#7C2D12}
.card .tl{font-size:16px;line-height:1}
.card .br{font-size:16px;line-height:1;align-self:flex-end;transform:rotate(180deg)}
.card.small .tl,.card.small .br{font-size:13px}
.hand{display:flex;flex-wrap:wrap;gap:6px;padding:14px 10px;background:#083D28;border-radius:12px;min-height:110px}
.melds{display:flex;flex-wrap:wrap;gap:10px;padding:12px;background:#083D28;border-radius:12px;min-height:110px}
.meld{background:rgba(255,255,255,.08);border-radius:10px;padding:6px;display:flex;gap:4px;align-items:center;border:2px solid transparent;cursor:pointer}
.meld.ext{border-color:#FFD666}
.piles{display:flex;gap:20px;align-items:center;justify-content:center;padding:14px;background:#083D28;border-radius:12px;margin:10px 0}
.pile{display:flex;flex-direction:column;align-items:center;gap:6px}
.back{width:56px;height:80px;border-radius:8px;background:repeating-linear-gradient(45deg,#7c2d12,#7c2d12 6px,#991b1b 6px,#991b1b 12px);border:1.5px solid #4a1a0a;display:flex;align-items:center;justify-content:center;color:#FFD666;font-weight:900;box-shadow:0 2px 4px rgba(0,0,0,.3)}
.btn{padding:10px 16px;border-radius:10px;border:none;background:#FFD666;color:#1C1C1A;font-weight:700;font-size:14px}
.btn.ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.4)}
.btn.danger{background:#EF4444;color:#fff}
.staging{background:#0A4A30;border-radius:12px;padding:12px;margin:10px 0;display:flex;gap:10px;align-items:center;flex-wrap:wrap;min-height:80px}
.info{background:rgba(255,255,255,.1);padding:6px 12px;border-radius:8px;font-size:13px}
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:20px;z-index:10;padding:20px;text-align:center;color:#fff}
h1{font-size:22px}
h2{font-size:18px;margin-bottom:8px}
.pill{background:#FFD666;color:#1C1C1A;padding:4px 10px;border-radius:20px;font-weight:700;font-size:13px}
`

function CardView({ card, selected, onClick, small }) {
  const cls = ["card"]
  if (small) cls.push("small")
  if (selected) cls.push("sel")
  if (card.joker) cls.push("joker")
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

function MeldView({ meld, highlight, onClick }) {
  return (
    <div className={"meld" + (highlight ? " ext" : "")} onClick={onClick}>
      {meld.cards.map((c, i) => <CardView key={i} card={c} small />)}
      <span style={{ marginLeft: 4, fontSize: 12, opacity: .85 }}>{meld.points} pts</span>
    </div>
  )
}

function newRound(startingPlayer) {
  const deck = shuffle(buildDeck())
  const hands = [deck.slice(0, 13), deck.slice(13, 26)]
  const rest = deck.slice(26)
  // Retourne la première carte pour la défausse (mais évite un joker en 1ère)
  let idx = 0
  while (rest[idx]?.joker) idx++
  const first = rest.splice(idx, 1)[0]
  return {
    hands,
    pioche: rest,
    defausse: [first],
    melds: [],
    hasOpened: [false, false],
    current: startingPlayer,
    phase: "draw", // draw -> play -> discard done
    justDrew: false,
    over: false,
    winner: null,
  }
}

export default function App() {
  const [scores, setScores] = useState([0, 0])
  const [roundNum, setRoundNum] = useState(1)
  const [names] = useState(["Joueur 1", "Joueur 2"])
  const [state, setState] = useState(() => newRound(0))
  const [selected, setSelected] = useState(new Set())
  const [pass, setPass] = useState(true) // écran de passation au début

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = CSS
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  const cur = state.current
  const hand = state.hands[cur]
  const selectedCards = hand.filter(c => selected.has(c.id))
  const analysis = useMemo(() => analyzeCombo(selectedCards), [selectedCards])
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
    // Repioche vide -> recycle défausse
    if (pioche.length === 0 && defausse.length > 1) {
      const top = defausse[defausse.length - 1]
      pioche = shuffle(defausse.slice(0, -1))
      defausse = [top]
    }
    setState({ ...state, hands, pioche, defausse, phase: "play", justDrew: true })
  }

  function posePlease() {
    if (!analysis.valid) return alert("Sélection invalide.")
    if (!state.hasOpened[cur] && analysis.points < 51) {
      return alert(`Ouverture : il faut au moins 51 points. Cette combi vaut ${analysis.points}.`)
    }
    const newMeld = { ...analysis, owner: cur }
    const newHand = hand.filter(c => !selected.has(c.id))
    const hands = state.hands.map((h, i) => i === cur ? newHand : h)
    const hasOpened = state.hasOpened.slice()
    hasOpened[cur] = true
    setState({ ...state, hands, melds: [...state.melds, newMeld], hasOpened })
    setSelected(new Set())
    if (newHand.length === 0) endRound(hands)
  }

  function extendOn(meldIdx) {
    if (!state.hasOpened[cur]) return alert("Ouvre d'abord avec une combi de 51 pts min.")
    if (selectedCards.length !== 1) return alert("Sélectionne 1 seule carte pour compléter une combi.")
    const card = selectedCards[0]
    const m = state.melds[meldIdx]
    if (!canExtend(m, card)) return alert("Cette carte ne complète pas cette combi.")
    const nm = extendMeld(m, card)
    const melds = state.melds.map((x, i) => i === meldIdx ? nm : x)
    const newHand = hand.filter(c => c.id !== card.id)
    const hands = state.hands.map((h, i) => i === cur ? newHand : h)
    setState({ ...state, melds, hands })
    setSelected(new Set())
    if (newHand.length === 0) endRound(hands)
  }

  function discard() {
    if (state.phase !== "play") return alert("Pioche d'abord.")
    if (selectedCards.length !== 1) return alert("Sélectionne 1 carte à défausser.")
    const card = selectedCards[0]
    const newHand = hand.filter(c => c.id !== card.id)
    const hands = state.hands.map((h, i) => i === cur ? newHand : h)
    setSelected(new Set())
    if (newHand.length === 0) {
      endRound(hands, card)
      return
    }
    const defausse = [...state.defausse, card]
    setState({ ...state, hands, defausse, phase: "draw", current: 1 - cur, justDrew: false })
    setPass(true)
  }

  function endRound(hands, lastDiscard) {
    // Points restants dans la main de l'autre joueur
    const other = 1 - cur
    const pts = hands[other].reduce((s, c) => s + handValue(c), 0)
    const ns = scores.slice()
    ns[other] += pts
    setScores(ns)
    setState({ ...state, hands, over: true, winner: cur, roundPts: pts, lastDiscard: lastDiscard || null })
  }

  function nextRound() {
    setRoundNum(n => n + 1)
    setState(newRound(1 - state.current))
    setSelected(new Set())
    setPass(true)
  }

  function resetGame() {
    if (!confirm("Nouvelle partie ? Les scores seront remis à zéro.")) return
    setScores([0, 0])
    setRoundNum(1)
    setState(newRound(0))
    setSelected(new Set())
    setPass(true)
  }

  const top = state.defausse[state.defausse.length - 1]

  return (
    <div className="wrap">
      <div className="top">
        <div>
          <div style={{ fontSize: 20, fontWeight: 800 }}>🃏 Rami</div>
          <div style={{ opacity: .8, fontSize: 12 }}>Manche {roundNum}</div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div className="info">{names[0]} : <b>{scores[0]}</b> pts</div>
          <div className="info">{names[1]} : <b>{scores[1]}</b> pts</div>
          <button className="btn ghost" onClick={resetGame}>Nouvelle partie</button>
        </div>
      </div>

      {pass && !state.over && (
        <div className="overlay">
          <h1>Au tour de {names[cur]}</h1>
          <p style={{ opacity: .8 }}>Passe l'appareil à ce joueur puis appuie pour révéler la main.</p>
          <button className="btn" onClick={() => setPass(false)}>Révéler ma main</button>
        </div>
      )}

      {state.over && (
        <div className="overlay">
          <h1>🏆 {names[state.winner]} remporte la manche !</h1>
          <p>Points comptés dans la main de l'adversaire : <b>{state.roundPts}</b></p>
          <div>
            <div>Score total {names[0]} : {scores[0]}</div>
            <div>Score total {names[1]} : {scores[1]}</div>
          </div>
          <button className="btn" onClick={nextRound}>Manche suivante</button>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <h2>Tour de <span className="pill">{names[cur]}</span></h2>
        <div style={{ fontSize: 12, opacity: .85 }}>
          {state.hasOpened[cur] ? "✅ Ouvert" : "⚠️ Pas encore ouvert (51 pts min)"}
        </div>
      </div>

      <h3 style={{ fontSize: 13, opacity: .85, margin: "6px 2px" }}>Combinaisons posées (clique pour compléter)</h3>
      <div className="melds">
        {state.melds.length === 0 && <div style={{ opacity: .6, alignSelf: "center" }}>Aucune combi posée pour l'instant.</div>}
        {state.melds.map((m, i) => (
          <MeldView key={i} meld={m}
            highlight={selectedCards.length === 1 && canExtend(m, selectedCards[0])}
            onClick={() => extendOn(i)} />
        ))}
      </div>

      <div className="piles">
        <div className="pile">
          <div className="back" onClick={() => drawFrom("pioche")}>★</div>
          <button className="btn" disabled={state.phase !== "draw"} onClick={() => drawFrom("pioche")}>
            Pioche ({state.pioche.length})
          </button>
        </div>
        <div className="pile">
          {top ? <CardView card={top} onClick={() => drawFrom("defausse")} /> : <div className="back" style={{ opacity: .3 }}>∅</div>}
          <button className="btn" disabled={state.phase !== "draw" || !top} onClick={() => drawFrom("defausse")}>
            Défausse ({state.defausse.length})
          </button>
        </div>
      </div>

      <div className="staging">
        <div style={{ fontWeight: 700 }}>Sélection : {selectedCards.length} carte(s)</div>
        {selPts !== null ? (
          <span className="pill">{analysis.type === "set" ? "Brelan/Carré" : "Suite"} — {selPts} pts</span>
        ) : (
          <span style={{ opacity: .7, fontSize: 13 }}>
            {selectedCards.length === 0 ? "Choisis des cartes pour former une combi." : (analysis.reason || "Combi invalide")}
          </span>
        )}
        <div style={{ flex: 1 }} />
        <button className="btn" disabled={!analysis.valid || state.phase !== "play"} onClick={posePlease}>
          Poser la combi
        </button>
        <button className="btn danger" disabled={state.phase !== "play" || selectedCards.length !== 1} onClick={discard}>
          Défausser
        </button>
        <button className="btn ghost" disabled={selected.size === 0} onClick={() => setSelected(new Set())}>
          Vider sélection
        </button>
      </div>

      <h3 style={{ fontSize: 13, opacity: .85, margin: "6px 2px" }}>Main de {names[cur]} ({hand.length})</h3>
      <div className="hand">
        {hand.length === 0 && <div style={{ opacity: .6, alignSelf: "center" }}>Main vide.</div>}
        {hand.slice().sort((a, b) => {
          if (a.joker !== b.joker) return a.joker ? 1 : -1
          if (a.suit !== b.suit) return SUITS.indexOf(a.suit) - SUITS.indexOf(b.suit)
          return a.rank - b.rank
        }).map(c => (
          <CardView key={c.id} card={c} selected={selected.has(c.id)} onClick={() => toggleSel(c.id)} />
        ))}
      </div>

      <div style={{ marginTop: 12, fontSize: 12, opacity: .7, textAlign: "center" }}>
        Règles : pioche puis défausse. Ouverture ≥ 51 pts. Suites : même couleur, min 3 cartes. Brelans/carrés : même valeur, couleurs différentes. Joker = n'importe quelle carte.
      </div>
    </div>
  )
}
