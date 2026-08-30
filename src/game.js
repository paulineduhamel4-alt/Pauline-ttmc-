// ============ Logique de jeu (pure) ============
export const SUITS = ["♠", "♥", "♦", "♣"]
export const SUIT_COLOR = { "♠": "#1C1C1A", "♣": "#1C1C1A", "♥": "#B91C1C", "♦": "#B91C1C" }
export const RANK_LABEL = { 1: "A", 11: "V", 12: "D", 13: "R" }
export const rankLabel = r => RANK_LABEL[r] || String(r)

export const DEFAULT_OPTS = {
  numPlayers: 2,
  names: ["Joueur 1", "Joueur 2", "Joueur 3", "Joueur 4", "Joueur 5"],
  openMin: 51,
  accumulateOpen: true,
  jokerHandValue: 20,
  aceHandValue: 11,
  handSize: 13,
  numJokers: 4,
  starter: "loser", // 'p1' | 'random' | 'loser'
  endOnDiscardOnly: false,
  allowRedrawDiscarded: false,
  targetScore: 100,
}

export function handValue(c, opts) {
  if (c.joker) return opts.jokerHandValue
  if (c.rank === 1) return opts.aceHandValue
  if (c.rank >= 11) return 10
  return c.rank
}
export function meldValue(rank, aceLow) {
  if (rank === 1) return aceLow ? 1 : 11
  if (rank >= 11) return 10
  return rank
}

export function buildDeck(numJokers) {
  const cards = []
  let id = 0
  for (let d = 0; d < 2; d++) {
    for (const s of SUITS) {
      for (let r = 1; r <= 13; r++) cards.push({ id: id++, suit: s, rank: r, joker: false, deck: d })
    }
  }
  for (let i = 0; i < numJokers; i++) cards.push({ id: id++, suit: null, rank: null, joker: true, deck: i % 2 })
  return cards
}

export function shuffle(a) {
  const b = a.slice()
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[b[i], b[j]] = [b[j], b[i]]
  }
  return b
}

export function analyzeCombo(cards) {
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

  // SUITE
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
  return { valid: false, reason: "Ni brelan/carré ni suite valide." }
}

export function orderRunCards(meld) {
  const nat = meld.cards.filter(c => !c.joker)
  const jok = meld.cards.filter(c => c.joker).slice()
  const ordered = []
  for (let v = meld.start; v <= meld.end; v++) {
    const idx = nat.findIndex(c => (meld.aceHigh && c.rank === 1 ? 14 : c.rank) === v)
    if (idx >= 0) { ordered.push(nat[idx]); nat.splice(idx, 1) }
    else if (jok.length) ordered.push(jok.shift())
  }
  return ordered
}

export function canExtend(meld, card) {
  if (!card) return false
  if (meld.type === "set") {
    if (meld.cards.length >= 4) return false
    if (card.joker) return true
    if (card.rank !== meld.rank) return false
    const usedSuits = new Set(meld.cards.filter(c => !c.joker).map(c => c.suit))
    return !usedSuits.has(card.suit)
  }
  if (meld.type === "run") {
    const lo = meld.aceHigh ? 2 : 1, hi = meld.aceHigh ? 14 : 13
    const before = meld.start - 1, after = meld.end + 1
    if (card.joker) return before >= lo || after <= hi
    if (card.suit !== meld.suit) return false
    const v = meld.aceHigh && card.rank === 1 ? 14 : card.rank
    if (v === before && before >= lo) return true
    if (v === after && after <= hi) return true
    return false
  }
  return false
}

export function extendMeld(meld, card, sideHint) {
  const next = { ...meld, cards: meld.cards.slice() }
  if (meld.type === "set") {
    next.cards.push(card)
    next.points = next.cards.length * meldValue(next.rank, false)
    return next
  }
  const lo = meld.aceHigh ? 2 : 1, hi = meld.aceHigh ? 14 : 13
  const before = meld.start - 1, after = meld.end + 1
  let side
  if (card.joker) {
    const leftOk = before >= lo, rightOk = after <= hi
    if (sideHint === "start" && leftOk) side = "start"
    else if (sideHint === "end" && rightOk) side = "end"
    else side = rightOk ? "end" : "start"
  } else {
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

export function jokerReplacements(meld, jokerIdx) {
  if (meld.type === "set") {
    const usedSuits = new Set(meld.cards.filter(c => !c.joker).map(c => c.suit))
    return SUITS.filter(s => !usedSuits.has(s)).map(s => ({ suit: s, rank: meld.rank }))
  }
  const v = meld.start + jokerIdx
  const rank = v === 14 ? 1 : v
  return [{ suit: meld.suit, rank }]
}

export function replaceCardInMeld(meld, cardIdx, newCard) {
  const cards = meld.cards.slice()
  cards[cardIdx] = newCard
  return { ...meld, cards }
}

export function newRound(opts, startingPlayer) {
  const deck = shuffle(buildDeck(opts.numJokers))
  const hs = opts.handSize
  const hands = []
  for (let i = 0; i < opts.numPlayers; i++) hands.push(deck.slice(i * hs, (i + 1) * hs))
  const rest = deck.slice(opts.numPlayers * hs)
  let idx = 0
  while (rest[idx]?.joker) idx++
  const first = rest.splice(idx, 1)[0]
  return {
    hands,
    pioche: rest,
    defausse: [first],
    melds: [],
    hasOpened: Array(opts.numPlayers).fill(false),
    openingSum: Array(opts.numPlayers).fill(0),
    current: startingPlayer,
    phase: "draw",
    over: false, winner: null, roundPts: null,
    retrievedJokerId: null,
    justDrewDiscardId: null,
    turnStartMelds: [],
    turnStartHand: null,
  }
}

export function pickStarter(opts, prevRoundPts) {
  if (opts.starter === "p1") return 0
  if (opts.starter === "random") return Math.floor(Math.random() * opts.numPlayers)
  // loser : joueur avec la main la plus lourde de la manche précédente
  if (Array.isArray(prevRoundPts)) {
    let worst = 0
    for (let i = 1; i < prevRoundPts.length; i++) if (prevRoundPts[i] > prevRoundPts[worst]) worst = i
    return worst
  }
  return 0
}

// Trie main pour affichage
export function sortHand(hand) {
  return hand.slice().sort((a, b) => {
    if (a.joker !== b.joker) return a.joker ? 1 : -1
    if (a.suit !== b.suit) return SUITS.indexOf(a.suit) - SUITS.indexOf(b.suit)
    return a.rank - b.rank
  })
}

// ==== Actions autoritaires (mutent l'état) ====

export function actDraw(state, opts, source, playerIdx) {
  if (playerIdx !== state.current) return { error: "Pas ton tour." }
  if (state.phase !== "draw") return { error: "Tu as déjà pioché." }
  let card, pioche = state.pioche, defausse = state.defausse
  if (source === "pioche") {
    if (pioche.length === 0) return { error: "Pioche vide." }
    card = pioche[0]; pioche = pioche.slice(1)
  } else {
    if (defausse.length === 0) return { error: "Défausse vide." }
    card = defausse[defausse.length - 1]; defausse = defausse.slice(0, -1)
  }
  const hands = state.hands.map((h, i) => i === playerIdx ? [...h, card] : h)
  if (pioche.length === 0 && defausse.length > 1) {
    const top = defausse[defausse.length - 1]
    pioche = shuffle(defausse.slice(0, -1))
    defausse = [top]
  }
  return {
    state: {
      ...state, hands, pioche, defausse, phase: "play",
      justDrewDiscardId: source === "defausse" ? card.id : null,
      turnStartMelds: state.melds.map(m => ({ ...m, cards: m.cards.slice() })),
      turnStartHand: state.hands[playerIdx].slice(),
    }
  }
}

export function actPose(state, opts, cardIds, playerIdx) {
  if (playerIdx !== state.current) return { error: "Pas ton tour." }
  if (state.phase !== "play") return { error: "Pioche d'abord." }
  const hand = state.hands[playerIdx]
  const cards = hand.filter(c => cardIds.includes(c.id))
  if (cards.length !== cardIds.length) return { error: "Cartes introuvables." }
  const a = analyzeCombo(cards)
  if (!a.valid) return { error: a.reason }
  let hasOpened = state.hasOpened.slice()
  let openingSum = state.openingSum.slice()
  if (!hasOpened[playerIdx]) {
    if (opts.accumulateOpen) {
      openingSum[playerIdx] += a.points
      if (openingSum[playerIdx] >= opts.openMin) hasOpened[playerIdx] = true
    } else {
      if (opts.openMin > 0 && a.points < opts.openMin) {
        return { error: `Ouverture : combi min ${opts.openMin} pts (celle-ci ${a.points}).` }
      }
      hasOpened[playerIdx] = true
    }
  }
  const newHand = hand.filter(c => !cardIds.includes(c.id))
  const hands = state.hands.map((h, i) => i === playerIdx ? newHand : h)
  const meld = { ...a, owner: playerIdx }
  let retrievedJokerId = state.retrievedJokerId
  if (retrievedJokerId && cardIds.includes(retrievedJokerId)) retrievedJokerId = null
  return { state: { ...state, hands, melds: [...state.melds, meld], hasOpened, openingSum, retrievedJokerId } }
}

export function actExtend(state, opts, meldIdx, cardId, sideHint, playerIdx) {
  if (playerIdx !== state.current) return { error: "Pas ton tour." }
  if (state.phase !== "play") return { error: "Pioche d'abord." }
  if (!state.hasOpened[playerIdx]) return { error: `Ouvre d'abord (min ${opts.openMin} pts).` }
  const hand = state.hands[playerIdx]
  const card = hand.find(c => c.id === cardId)
  if (!card) return { error: "Carte introuvable." }
  const m = state.melds[meldIdx]
  if (!m || !canExtend(m, card)) return { error: "Extension impossible." }
  const nm = extendMeld(m, card, sideHint)
  const melds = state.melds.map((x, i) => i === meldIdx ? nm : x)
  const newHand = hand.filter(c => c.id !== cardId)
  const hands = state.hands.map((h, i) => i === playerIdx ? newHand : h)
  let retrievedJokerId = state.retrievedJokerId
  if (retrievedJokerId === cardId) retrievedJokerId = null
  return { state: { ...state, melds, hands, retrievedJokerId } }
}

export function actRetrieveJoker(state, opts, meldIdx, jokerIdx, myCardId, playerIdx) {
  if (playerIdx !== state.current) return { error: "Pas ton tour." }
  if (state.phase !== "play") return { error: "Pioche d'abord." }
  if (state.retrievedJokerId) return { error: "Un joker est déjà repris." }
  const m = state.melds[meldIdx]
  const jokerCard = m?.cards[jokerIdx]
  if (!jokerCard?.joker) return { error: "Ce n'est pas un joker." }
  const options = jokerReplacements(m, jokerIdx)
  const hand = state.hands[playerIdx]
  const myCard = hand.find(c => c.id === myCardId)
  if (!myCard || !options.some(o => o.rank === myCard.rank && o.suit === myCard.suit)) {
    return { error: "Cette carte ne correspond pas à ce que représente le joker." }
  }
  const newMeld = replaceCardInMeld(m, jokerIdx, myCard)
  const melds = state.melds.map((x, i) => i === meldIdx ? newMeld : x)
  const newHand = hand.filter(c => c.id !== myCardId).concat([jokerCard])
  const hands = state.hands.map((h, i) => i === playerIdx ? newHand : h)
  return { state: { ...state, melds, hands, retrievedJokerId: jokerCard.id } }
}

export function actDiscard(state, opts, cardId, playerIdx) {
  if (playerIdx !== state.current) return { error: "Pas ton tour." }
  if (state.phase !== "play") return { error: "Pioche d'abord." }
  if (state.retrievedJokerId) return { error: "Tu dois d'abord réutiliser le joker repris." }
  if (!opts.allowRedrawDiscarded && state.justDrewDiscardId === cardId) return { error: "Interdit de redéfausser la carte piochée à la défausse." }
  const hand = state.hands[playerIdx]
  const card = hand.find(c => c.id === cardId)
  if (!card) return { error: "Carte introuvable." }
  // Vérif ouverture : si non ouvert mais des combis posées ce tour, retour de tout
  let hands = state.hands, melds = state.melds
  let hasOpened = state.hasOpened.slice()
  let openingSum = state.openingSum.slice()
  if (!hasOpened[playerIdx] && openingSum[playerIdx] > 0) {
    // rollback des combis posées ce tour
    melds = state.turnStartMelds.map(m => ({ ...m, cards: m.cards.slice() }))
    hands = hands.map((h, i) => i === playerIdx ? state.turnStartHand.slice() : h)
    openingSum[playerIdx] = 0
    // ne pas encore défausser : signaler l'erreur
    return { error: "Ouverture non atteinte : ta pose est annulée. Réessaie ou pioche/défausse autrement.", state: { ...state, hands, melds, openingSum } }
  }
  const currentHand = hands[playerIdx]
  const newHand = currentHand.filter(c => c.id !== cardId)
  hands = hands.map((h, i) => i === playerIdx ? newHand : h)
  const defausse = [...state.defausse, card]
  if (newHand.length === 0) {
    return endRound({ ...state, hands, melds, defausse, hasOpened }, opts, playerIdx)
  }
  return {
    state: {
      ...state, hands, melds, defausse,
      phase: "draw",
      current: (playerIdx + 1) % opts.numPlayers,
      retrievedJokerId: null, justDrewDiscardId: null,
      hasOpened, openingSum,
    }
  }
}

export function actFinishOnPose(state, opts, playerIdx) {
  // Utilisé quand main vide sans défausser et opts.endOnDiscardOnly === false
  const hand = state.hands[playerIdx]
  if (hand.length !== 0) return { error: "Ta main n'est pas vide." }
  return endRound(state, opts, playerIdx)
}

function endRound(state, opts, winner) {
  const roundPts = state.hands.map((h, i) => i === winner ? 0 : h.reduce((s, c) => s + handValue(c, opts), 0))
  return {
    state: { ...state, over: true, winner, roundPts, phase: "roundOver" }
  }
}

export function publicState(state, forPlayerIdx) {
  if (!state) return null
  return {
    ...state,
    hands: state.hands.map((h, i) => i === forPlayerIdx ? h : h.map(() => ({ hidden: true }))),
  }
}
