import { useState, useCallback, useRef, useEffect } from "react"
import { THEMES } from "./themes.js"

const BS = 55
const PL = [
  {bg:"#C0392B",lt:"#FDEDEC"},{bg:"#2471A3",lt:"#EBF5FB"},
  {bg:"#1E8449",lt:"#EAFAF1"},{bg:"#CA6F1E",lt:"#FEF5E7"},
  {bg:"#6C3483",lt:"#F4ECF7"},{bg:"#148F77",lt:"#E8F8F5"},
  {bg:"#B03A7A",lt:"#FDECF4"},{bg:"#5D4E37",lt:"#FAF0E6"}
]
const ST = {}
;[5,11,17,23,29,35,41,47,52].forEach(i => { ST[i] = "G" })
;[8,14,20,26,32,38,44,50].forEach(i => { ST[i] = "B" })
;[3,19,33,46].forEach(i => { ST[i] = "C" })

const GA = ["🎭 Mimez le thème 30s !","🗣️ Sans le mot principal !","🎤 Chantez sur Joyeux anniversaire !","🌍 Accent étranger !","✏️ Dessinez avec le doigt !","🙈 Yeux fermés !","🎯 Adversaire choisit niveau !","⏱️ 5 secondes max !","🔤 Épelez à l'envers !","🤫 Le + jeune seul !","👥 Tous en chœur !","🦶 Sur un pied !","📖 Anecdote d'abord !","🔇 Mots 1 syllabe !"]
const BO = [{tx:"⚡ DOUBLE ×2 !",id:"double",lb:"×2"},{tx:"🏴‍☠️ VOL adversaire −2 !",id:"steal",lb:"🏴‍☠️"},{tx:"🔄 REJOUER si correct !",id:"replay",lb:"🔄"},{tx:"🛡️ BOUCLIER +1 même raté !",id:"shield",lb:"🛡️"},{tx:"🎯 SNIPER +3 bonus !",id:"sniper",lb:"🎯+3"}]
const CH = [
  "Nommez 5 pays d'Afrique",
  "Citez 3 films de Tarantino",
  "Chantez 20s d'un tube des années 80",
  "Trouvez 4 marques de voiture allemandes",
  "Nommez 5 capitales européennes",
  "Récitez l'alphabet à l'envers (M à A)",
  "Citez 4 acteurs qui ont joué James Bond",
  "Nommez 3 œuvres de Molière",
  "Citez 5 fruits qui commencent par une voyelle",
  "Trouvez 4 films Disney d'avant 2000",
  "Nommez 3 fleuves français",
  "Citez 5 sports olympiques d'hiver",
  "Trouvez 4 groupes de rock français",
  "Nommez 5 personnages de Harry Potter",
  "Citez 4 réalisateurs français",
  "Trouvez 3 plats italiens (pas la pizza)",
  "Nommez 5 mots qui riment avec « bateau »",
  "Citez 4 super-héros Marvel",
  "Trouvez 3 chansons des Beatles",
  "Nommez 5 stars françaises de plus de 60 ans"
]

function shuffle(a){const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
function pickR(a){return a[Math.floor(Math.random()*a.length)]}
function timeFor(level){return 25 + level * 5}

const globalCSS = "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}:root{--bg:#F8F7F4;--sf:#FFF;--tx:#1C1C1A;--tx2:#6E6E68;--tx3:#A8A8A2;--bd:#EAEAE5}body{background:var(--bg)}@keyframes fi{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes si{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}@keyframes pop{0%{transform:scale(.6)}50%{transform:scale(1.08)}100%{transform:scale(1)}}@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes cf{0%{transform:translateY(-20vh) rotate(0);opacity:1}100%{transform:translateY(110vh) rotate(720deg);opacity:0}}@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}input::placeholder{color:var(--tx3)}button:active:not(:disabled){transform:scale(.97)!important}.confetti{position:fixed;top:-20vh;left:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;overflow:hidden}.confetti span{position:absolute;top:0;font-size:22px;animation:cf linear forwards}"
const FH = "'Playfair Display',Georgia,serif"
const FB = "'DM Sans',system-ui,sans-serif"

function mb(active, extra) {
  const s = {width:"100%",padding:"15px 20px",borderRadius:14,border:active?"none":"1px solid var(--bd)",background:active?"var(--tx)":"var(--sf)",color:active?"#fff":"var(--tx)",fontSize:16,fontWeight:600,cursor:"pointer",fontFamily:FB,transition:"all .2s"}
  return extra ? {...s, ...extra} : s
}

function Board({ teams }) {
  const ref = useCallback(n => {
    if (n) {
      const e = n.querySelector(".ba")
      if (e) e.scrollIntoView({ behavior:"smooth", inline:"center", block:"nearest" })
    }
  }, [teams.map(t => t.pos).join(",")])
  const mx = Math.max(0, ...teams.map(t => t.pos))
  const f = Math.max(0, mx - 3), to = Math.min(BS, mx + 12)
  const cells = []
  for (let i = f; i <= to; i++) cells.push(i)
  return (
    <div ref={ref} style={{display:"flex",gap:5,overflowX:"auto",padding:"10px 0 16px",scrollbarWidth:"none"}}>
      {cells.map(idx => {
        const h = teams.filter(t => t.pos === idx)
        const fin = idx === BS, sq = ST[idx]
        const bg = fin ? "var(--tx)" : sq === "G" ? "#FFF7E6" : sq === "B" ? "#E6FFFB" : sq === "C" ? "#F4ECF7" : "#F0EFEB"
        const cl = fin ? "#fff" : sq === "G" ? "#D48806" : sq === "B" ? "#08979C" : sq === "C" ? "#6C3483" : "var(--tx3)"
        const bd = fin ? "none" : sq === "G" ? "1.5px solid #FFD666" : sq === "B" ? "1.5px solid #87E8DE" : sq === "C" ? "1.5px solid #D2B4DE" : "1px solid var(--bd)"
        const lb = fin ? "🏆" : sq === "G" ? "🎭" : sq === "B" ? "⚡" : sq === "C" ? "🎪" : idx
        const nP = h.length
        return (
          <div key={idx} className={nP ? "ba" : ""} style={{minWidth:42,height:42,borderRadius:11,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:sq?13:12,fontWeight:600,fontFamily:FB,position:"relative",transition:"all .3s",background:bg,color:cl,border:bd}}>
            {nP === 0 && lb}
            {nP > 0 && (
              <div style={{position:"absolute",inset:0,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:1,padding:2}}>
                {h.map((t, i) => {
                  const sz = nP === 1 ? 28 : nP === 2 ? 20 : nP <= 4 ? 16 : 14
                  const fs = nP === 1 ? 14 : nP === 2 ? 11 : 9
                  return (
                    <div key={i} style={{width:sz,height:sz,borderRadius:"50%",background:t.pal.bg,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:fs,fontWeight:700,fontFamily:FH,border:"2px solid #fff",boxShadow:"0 1px 3px rgba(0,0,0,.25)"}}>{t.name[0].toUpperCase()}</div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function App() {
  const [step, setStep] = useState("home")
  const [teams, setTeams] = useState([])
  const [nameIn, setNameIn] = useState("")
  const [deck, setDeck] = useState([])
  const [ci, setCi] = useState(0)
  const [turn, setTurn] = useState(0)
  const [level, setLevel] = useState(0)
  const [picked, setPicked] = useState(null)
  const [showA, setShowA] = useState(false)
  const [userA, setUserA] = useState("")
  const [ak, setAk] = useState(0)
  const [gageT, setGageT] = useState("")
  const [boost, setBoost] = useState(null)
  const [timerEnabled, setTimerEnabled] = useState(false)
  const [timerLeft, setTimerLeft] = useState(0)
  const [history, setHistory] = useState([])
  const [playedCount, setPlayedCount] = useState(0)
  const [contreEnabled, setContreEnabled] = useState(true)
  const [contreTeamIdx, setContreTeamIdx] = useState(null)
  const [originalLevel, setOriginalLevel] = useState(0)
  const [chText, setChText] = useState("")
  const [chLeft, setChLeft] = useState(0)
  const [prevStep, setPrevStep] = useState("home")

  const usedRef = useRef({})
  const playedRef = useRef({})

  useEffect(() => {
    try {
      const p = localStorage.getItem("ttmc-played-v2")
      if (p) {
        playedRef.current = JSON.parse(p)
        setPlayedCount(Object.keys(playedRef.current).length)
      }
      const h = localStorage.getItem("ttmc-history-v1")
      if (h) setHistory(JSON.parse(h))
      const tim = localStorage.getItem("ttmc-timer")
      if (tim === "1") setTimerEnabled(true)
      const co = localStorage.getItem("ttmc-contre")
      if (co === "0") setContreEnabled(false)
    } catch (e) {}
  }, [])

  useEffect(() => { try { localStorage.setItem("ttmc-timer", timerEnabled ? "1" : "0") } catch (e) {} }, [timerEnabled])
  useEffect(() => { try { localStorage.setItem("ttmc-contre", contreEnabled ? "1" : "0") } catch (e) {} }, [contreEnabled])

  function markPlayed(name) {
    if (playedRef.current[name]) return
    playedRef.current[name] = true
    setPlayedCount(Object.keys(playedRef.current).length)
    try { localStorage.setItem("ttmc-played-v2", JSON.stringify(playedRef.current)) } catch (e) {}
  }

  function resetPlayed() {
    playedRef.current = {}
    setPlayedCount(0)
    try { localStorage.removeItem("ttmc-played-v2") } catch (e) {}
  }

  const baseIdx = teams.length ? turn % teams.length : 0
  const answeringIdx = contreTeamIdx !== null ? contreTeamIdx : baseIdx
  const ct = teams.length ? teams[answeringIdx] : null
  const originalTeam = teams.length ? teams[baseIdx] : null
  const cd = deck[ci] || null
  const raw = (level > 0 && cd?.q?.[level - 1]) || null
  const cq = raw ? (raw[1] === "m"
    ? { q: raw[0], t: "m", o: raw[2], c: raw[3], x: raw[4] || "" }
    : { q: raw[0], t: "o", a: raw[2], x: raw[3] || "" }) : null

  function reset() { setLevel(0); setPicked(null); setShowA(false); setUserA(""); setAk(k => k + 1); setTimerLeft(0); setContreTeamIdx(null); setOriginalLevel(0) }

  function goSq(pos) {
    const sq = ST[pos]
    if (sq === "G") { setGageT(pickR(GA)); setBoost(null); setStep("gage") }
    else if (sq === "B") { setBoost(pickR(BO)); setGageT(""); setStep("boost") }
    else if (sq === "C") { setChText(pickR(CH)); setChLeft(30); setGageT(""); setBoost(null); setStep("challenge") }
    else { setGageT(""); setBoost(null); setStep("theme") }
  }

  function startGame() {
    if (teams.length < 2) return
    usedRef.current = {}
    let unseen = THEMES.filter(c => !playedRef.current[c.t])
    if (unseen.length === 0) {
      resetPlayed()
      unseen = THEMES.slice()
    } else if (unseen.length < 3) {
      const played = THEMES.filter(c => playedRef.current[c.t])
      unseen = [...unseen, ...shuffle(played).slice(0, 6)]
    }
    setDeck(shuffle(unseen))
    setCi(0); setTurn(0); reset()
    setGageT(""); setBoost(null)
    goSq(teams[0]?.pos || 0)
  }

  function addTeam() {
    const n = nameIn.trim()
    if (!n || teams.length >= 8) return
    setTeams(p => [...p, { name: n, pos: 0, pal: PL[p.length % 8] }])
    setNameIn("")
  }
  function remTeam(i) { setTeams(p => p.filter((_, x) => x !== i)) }

  function pickLv(v) {
    setLevel(v); setPicked(null); setShowA(false); setUserA("")
    setOriginalLevel(v); setContreTeamIdx(null)
    if (cd) markPlayed(cd.t)
    if (contreEnabled && teams.length >= 2 && v < 10) {
      setStep("contre"); setAk(k => k + 1)
    } else {
      setStep("question"); setAk(k => k + 1)
      if (timerEnabled) setTimerLeft(timeFor(v))
    }
  }

  function takeContre(teamIdx, newLevel) {
    setContreTeamIdx(teamIdx)
    setLevel(newLevel)
    setStep("question"); setAk(k => k + 1)
    if (timerEnabled) setTimerLeft(timeFor(newLevel))
  }

  function skipContre() {
    setStep("question"); setAk(k => k + 1)
    if (timerEnabled) setTimerLeft(timeFor(level))
  }

  function doneChallenge(ok) {
    const gain = ok ? 3 : 0
    const ti = baseIdx
    const nt = teams.map((t, i) => i === ti ? { name: t.name, pos: Math.min(BS, t.pos + gain), pal: t.pal } : t)
    setTeams(nt)
    if (nt.some(t => t.pos >= BS)) { saveHistory(nt); setStep("win"); return }
    const ntn = turn + 1
    setTurn(ntn)
    reset()
    goSq(nt[ntn % nt.length].pos)
  }

  useEffect(() => {
    if (step !== "question" || !timerEnabled || timerLeft <= 0) return
    if (picked !== null || showA) return
    const t = setTimeout(() => setTimerLeft(x => x - 1), 1000)
    return () => clearTimeout(t)
  }, [step, timerEnabled, timerLeft, picked, showA])

  useEffect(() => {
    if (step === "question" && timerEnabled && timerLeft === 0 && picked === null && !showA && cq) {
      if (cq.t === "m") { setPicked(-1); setTimeout(() => advance(false), 800) }
      else { setShowA(true) }
    }
  }, [timerLeft, step, timerEnabled, picked, showA, cq])

  useEffect(() => {
    if (step !== "challenge" || chLeft <= 0) return
    const t = setTimeout(() => setChLeft(x => x - 1), 1000)
    return () => clearTimeout(t)
  }, [step, chLeft])

  function selOpt(i) { if (picked === null) setPicked(i) }

  function pts(ok) {
    const m = boost?.id === "double" ? 2 : 1
    const b = boost?.id === "sniper" && ok ? 3 : 0
    const sh = boost?.id === "shield" && !ok ? 1 : 0
    return ok ? level * m + b : sh
  }

  function advance(ok) {
    const p = pts(ok)
    const ti = answeringIdx
    const contreActive = contreTeamIdx !== null
    const doSteal = !contreActive && boost?.id === "steal" && ok && teams.length > 1
    const doReplay = !contreActive && boost?.id === "replay" && ok
    const vi = (baseIdx + 1) % teams.length
    const consolation = contreActive && !ok ? originalLevel : 0
    const nt = teams.map((t, i) => {
      if (i === ti) return { name: t.name, pos: Math.min(BS, t.pos + p), pal: t.pal }
      if (consolation && i === baseIdx) return { name: t.name, pos: Math.min(BS, t.pos + consolation), pal: t.pal }
      if (doSteal && i === vi) return { name: t.name, pos: Math.max(0, t.pos - 2), pal: t.pal }
      return t
    })
    setTeams(nt)
    if (nt.some(t => t.pos >= BS)) { saveHistory(nt); setStep("win"); return }
    usedRef.current[ci] = true
    let nc = ci + 1
    while (nc < deck.length && usedRef.current[nc]) nc++
    if (nc >= deck.length) {
      usedRef.current = {}
      let unseen = THEMES.filter(c => !playedRef.current[c.t])
      if (unseen.length === 0) { resetPlayed(); unseen = THEMES.slice() }
      setDeck(shuffle(unseen))
      nc = 0
    }
    setCi(nc); reset()
    if (doReplay) { goSq(nt[ti].pos); return }
    const ntn = turn + 1
    setTurn(ntn)
    goSq(nt[ntn % nt.length].pos)
  }

  function saveHistory(finalTeams) {
    let w = finalTeams[0]
    finalTeams.forEach(t => { if (t.pos >= BS) w = t })
    const entry = {
      date: new Date().toISOString(),
      winner: w.name,
      teams: finalTeams.map(t => ({ name: t.name, pos: t.pos }))
    }
    const next = [entry, ...history].slice(0, 20)
    setHistory(next)
    try { localStorage.setItem("ttmc-history-v1", JSON.stringify(next)) } catch (e) {}
  }

  const remaining = THEMES.length - playedCount
  const pOk = pts(true), pFail = pts(false)
  const mcqOk = cq?.t === "m" && picked !== null && picked >= 0 ? picked === cq.c : false

  const sP = { minHeight: "100dvh", fontFamily: FB, color: "var(--tx)", background: "var(--bg)" }
  const sC = { maxWidth: 440, margin: "0 auto", padding: "0 20px" }
  const sK = { background: "var(--sf)", borderRadius: 20, padding: "24px 22px", boxShadow: "0 1px 3px rgba(0,0,0,.04),0 6px 20px rgba(0,0,0,.025)", border: "1px solid var(--bd)" }

  if (step === "home") return (
    <div style={sP}>
      <style>{globalCSS}</style>
      <div style={sC}>
        <div style={{textAlign:"center",padding:"48px 0 24px",animation:"fi .5s ease both",position:"relative"}}>
          <button onClick={() => { setPrevStep("home"); setStep("rules") }} style={{position:"absolute",top:44,right:0,width:36,height:36,borderRadius:"50%",border:"1px solid var(--bd)",background:"var(--sf)",fontSize:16,fontWeight:700,cursor:"pointer",fontFamily:FH,color:"var(--tx2)"}}>?</button>
          <div style={{fontSize:13,fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"var(--tx3)",marginBottom:14}}>Le jeu de culture G</div>
          <h1 style={{fontFamily:FH,fontWeight:900,fontSize:34,lineHeight:1.1}}>Tu te mets<br/>combien ?</h1>
        </div>

        {/* Compteur thèmes */}
        <div style={{background:"var(--sf)",borderRadius:16,padding:"14px 16px",border:"1px solid var(--bd)",marginBottom:18}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
            <span style={{fontSize:12,fontWeight:600,letterSpacing:".1em",textTransform:"uppercase",color:"var(--tx3)"}}>Banque de thèmes</span>
            <span style={{fontSize:14,fontWeight:700,color:remaining<5?"#C0392B":remaining<15?"#CA6F1E":"#1E8449",fontFamily:FH}}>
              {remaining} / {THEMES.length}
            </span>
          </div>
          <div style={{width:"100%",height:6,background:"var(--bd)",borderRadius:20,overflow:"hidden"}}>
            <div style={{width:(remaining/THEMES.length*100)+"%",height:"100%",background:remaining<5?"#C0392B":remaining<15?"#CA6F1E":"#1E8449",transition:"width .5s",borderRadius:20}}/>
          </div>
          <div style={{fontSize:11,color:"var(--tx3)",marginTop:8}}>
            {remaining === THEMES.length
              ? "Tous frais, jamais joués."
              : remaining === 0
                ? "🎉 Tous joués ! Ils vont être remis à zéro à la prochaine partie."
                : `${playedCount} déjà joué${playedCount>1?"s":""}, ${remaining} restant${remaining>1?"s":""} avant reset.`}
          </div>
          {playedCount > 0 && (
            <button onClick={resetPlayed} style={{marginTop:8,background:"none",border:"none",color:"var(--tx3)",fontSize:11,cursor:"pointer",fontFamily:FB,textDecoration:"underline",padding:0}}>
              🔄 Remettre tous les thèmes à zéro
            </button>
          )}
        </div>

        {/* Chrono */}
        <div style={{marginBottom:10,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 14px",borderRadius:12,background:"var(--sf)",border:"1px solid var(--bd)"}}>
          <div>
            <div style={{fontSize:14,fontWeight:600}}>⏱️ Chrono par question</div>
            <div style={{fontSize:11,color:"var(--tx3)",marginTop:2}}>Niveau 1 : 30s · Niveau 10 : 75s</div>
          </div>
          <button onClick={() => setTimerEnabled(v => !v)} style={{width:52,height:28,borderRadius:14,border:"none",background:timerEnabled?"#1E8449":"#D0D0CB",position:"relative",cursor:"pointer",transition:"all .2s"}}>
            <div style={{position:"absolute",top:2,left:timerEnabled?26:2,width:24,height:24,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 3px rgba(0,0,0,.15)",transition:"all .2s"}}/>
          </button>
        </div>

        {/* Contre */}
        <div style={{marginBottom:20,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 14px",borderRadius:12,background:"var(--sf)",border:"1px solid var(--bd)"}}>
          <div>
            <div style={{fontSize:14,fontWeight:600}}>🎯 Mode CONTRE</div>
            <div style={{fontSize:11,color:"var(--tx3)",marginTop:2}}>Une équipe peut surenchérir</div>
          </div>
          <button onClick={() => setContreEnabled(v => !v)} style={{width:52,height:28,borderRadius:14,border:"none",background:contreEnabled?"#6C3483":"#D0D0CB",position:"relative",cursor:"pointer",transition:"all .2s"}}>
            <div style={{position:"absolute",top:2,left:contreEnabled?26:2,width:24,height:24,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 3px rgba(0,0,0,.15)",transition:"all .2s"}}/>
          </button>
        </div>

        {/* Équipes */}
        <div style={{marginBottom:16}}>
          <label style={{fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:".12em",color:"var(--tx3)",display:"block",marginBottom:10}}>Équipes (2 à 8)</label>
          <div style={{display:"flex",gap:8}}>
            <input type="text" placeholder="Nom…" value={nameIn} onChange={e => setNameIn(e.target.value)} onKeyDown={e => { if (e.key === "Enter") addTeam() }} maxLength={14} style={{flex:1,padding:"13px 16px",borderRadius:12,border:"1px solid var(--bd)",background:"var(--sf)",fontSize:16,fontFamily:FB,outline:"none",color:"var(--tx)"}}/>
            <button onClick={addTeam} disabled={!nameIn.trim() || teams.length >= 8} style={{width:48,borderRadius:12,border:"1px solid var(--bd)",background:nameIn.trim()?"var(--tx)":"var(--sf)",color:nameIn.trim()?"#fff":"var(--tx3)",fontSize:22,cursor:"pointer"}}>+</button>
          </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:24}}>
          {teams.map((t, i) => (
            <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"11px 14px",borderRadius:12,background:"var(--sf)",border:"1px solid var(--bd)"}}>
              <div style={{width:30,height:30,borderRadius:8,background:t.pal.bg,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:700,fontFamily:FH}}>{t.name[0]}</div>
              <span style={{flex:1,fontSize:15,fontWeight:600}}>{t.name}</span>
              <button onClick={() => remTeam(i)} style={{width:26,height:26,borderRadius:8,border:"none",background:"#FFF1F0",color:"#CF1322",fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
            </div>
          ))}
          {teams.length === 0 && <p style={{textAlign:"center",color:"var(--tx3)",fontSize:14,padding:"24px 0"}}>Ajoutez au moins 2 équipes.</p>}
        </div>

        <div style={{paddingBottom:14}}>
          <button onClick={startGame} disabled={teams.length < 2} style={mb(teams.length >= 2, { opacity: teams.length >= 2 ? 1 : 0.4, fontSize: 17, fontFamily: FH, fontWeight: 700 })}>
            {teams.length < 2 ? `Encore ${2 - teams.length} équipe${2 - teams.length > 1 ? "s" : ""}` : "Lancer la partie 🚀"}
          </button>
        </div>

        {history.length > 0 && (
          <div style={{textAlign:"center",paddingBottom:30}}>
            <button onClick={() => setStep("history")} style={{background:"none",border:"none",color:"var(--tx3)",fontSize:12,cursor:"pointer",fontFamily:FB,textDecoration:"underline"}}>
              📜 Historique ({history.length} partie{history.length>1?"s":""})
            </button>
          </div>
        )}
      </div>
    </div>
  )

  if (["gage","boost","theme","question","contre","challenge"].includes(step) && ct) return (
    <div style={sP}>
      <style>{globalCSS}</style>
      <div style={sC}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 0 6px",gap:8}}>
          <span style={{fontSize:11,fontWeight:600,color:"var(--tx3)",letterSpacing:".08em"}}>TOUR {turn+1} · {remaining} restants</span>
          <div style={{display:"flex",alignItems:"center",gap:7,flex:1,justifyContent:"flex-end"}}>
            <div style={{width:18,height:18,borderRadius:5,background:ct.pal.bg}}/>
            <span style={{fontSize:14,fontWeight:700,color:ct.pal.bg}}>{ct.name}</span>
          </div>
          <button onClick={() => { if(confirm("Quitter la partie en cours ?")){ reset(); setTeams(p => p.map(t => ({name:t.name,pos:0,pal:t.pal}))); setStep("home") } }} style={{width:28,height:28,borderRadius:8,border:"1px solid var(--bd)",background:"var(--sf)",color:"var(--tx3)",fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}} title="Quitter">✕</button>
        </div>
        <Board teams={teams}/>

        {step === "gage" && (
          <div key={"g"+ak} style={{animation:"fi .4s ease both"}}>
            <div style={{background:"#FFFBE6",borderRadius:20,padding:"24px 22px",border:"1px solid #FFD666",textAlign:"center",margin:"14px 0 18px"}}>
              <div style={{fontSize:42,marginBottom:12}}>🎭</div>
              <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".14em",color:"#D48806",marginBottom:10}}>Case gage !</div>
              <p style={{fontSize:16,fontWeight:500,lineHeight:1.6,color:"#614700"}}>{gageT}</p>
            </div>
            <button onClick={() => { setStep("theme"); setAk(k => k + 1) }} style={mb(true)}>Compris ! →</button>
          </div>
        )}

        {step === "boost" && boost && (
          <div key={"b"+ak} style={{animation:"fi .4s ease both"}}>
            <div style={{background:"#E6FFFB",borderRadius:20,padding:"24px 22px",border:"1px solid #87E8DE",textAlign:"center",margin:"14px 0 18px"}}>
              <div style={{fontSize:42,marginBottom:12}}>⚡</div>
              <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".14em",color:"#08979C",marginBottom:10}}>Case boost !</div>
              <p style={{fontSize:16,fontWeight:500,lineHeight:1.6,color:"#00474F"}}>{boost.tx}</p>
            </div>
            <button onClick={() => { setStep("theme"); setAk(k => k + 1) }} style={mb(true)}>C'est parti ! →</button>
          </div>
        )}

        {step === "theme" && cd && (
          <div key={"t"+ak} style={{animation:"fi .4s ease both"}}>
            <div style={{background:"var(--sf)",borderRadius:20,padding:"24px 22px",boxShadow:"0 1px 3px rgba(0,0,0,.04),0 6px 20px rgba(0,0,0,.025)",border:"1px solid var(--bd)",textAlign:"center",margin:"14px 0 18px"}}>
              <div style={{fontSize:48,marginBottom:14,animation:"fl 3s ease-in-out infinite"}}>{cd.e}</div>
              <div style={{fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:".14em",color:"var(--tx3)",marginBottom:6}}>Le thème est…</div>
              <h2 style={{fontFamily:FH,fontWeight:800,fontSize:22,lineHeight:1.2}}>{cd.t}</h2>
            </div>
            {boost && (
              <div style={{textAlign:"center",marginBottom:10}}>
                <span style={{display:"inline-block",padding:"4px 12px",borderRadius:8,background:"#E6FFFB",color:"#08979C",fontSize:12,fontWeight:600}}>{boost.lb}</span>
              </div>
            )}
            <p style={{fontSize:13,color:"var(--tx2)",textAlign:"center",marginBottom:14}}>
              <b style={{color:ct.pal.bg}}>{ct.name}</b>, combien ?
            </p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:7,marginBottom:10}}>
              {[1,2,3,4,5,6,7,8,9,10].map(v => (
                <button key={v} onClick={() => pickLv(v)} style={{aspectRatio:"1",borderRadius:11,border:"1.5px solid var(--bd)",background:"var(--sf)",fontSize:19,fontWeight:800,fontFamily:FH,color:"var(--tx)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>{v}</button>
              ))}
            </div>
            <p style={{textAlign:"center",fontSize:11,color:"var(--tx3)"}}>Plus c'est haut, plus c'est dur !</p>
          </div>
        )}

        {step === "question" && cq && (
          <div key={"q"+ak} style={{animation:"fi .4s ease both"}}>
            <div style={sK}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16}}>
                <span style={{fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:".1em",color:"var(--tx3)"}}>{cd ? cd.t : ""}</span>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  {timerEnabled && timerLeft > 0 && picked === null && !showA && (
                    <span style={{fontSize:14,fontWeight:700,color:timerLeft<10?"#C0392B":timerLeft<20?"#CA6F1E":"var(--tx2)",fontFamily:FB}}>⏱️ {timerLeft}s</span>
                  )}
                  <span style={{fontSize:24,fontWeight:900,fontFamily:FH,color:ct.pal.bg,animation:"pop .4s ease both"}}>{level}</span>
                </div>
              </div>
              <p style={{fontFamily:FH,fontWeight:600,fontSize:19,lineHeight:1.4}}>{cq.q}</p>
            </div>

            {cq.t === "m" && cq.o && (
              <div style={{display:"flex",flexDirection:"column",gap:8,marginTop:16,marginBottom:16}}>
                {cq.o.map((opt, i) => {
                  const done = picked !== null, isOk = i === cq.c, isMe = i === picked
                  let bg = "var(--sf)", bd = "var(--bd)", cl = "var(--tx)", ib = "transparent", ic = "var(--tx)", it = String.fromCharCode(65 + i)
                  if (done && isOk) { bg = "#EAFAF1"; bd = "#82E0AA"; cl = "#1E8449"; ib = "#1E8449"; ic = "#fff"; it = "✓" }
                  else if (done && isMe && !isOk) { bg = "#FDEDEC"; bd = "#F1948A"; cl = "#C0392B"; ib = "#C0392B"; ic = "#fff"; it = "✗" }
                  return (
                    <button key={i} onClick={() => selOpt(i)} disabled={done} style={{padding:"14px 16px",borderRadius:13,border:"1.5px solid "+bd,background:bg,color:cl,fontSize:15,fontWeight:done && isOk ? 700 : 500,textAlign:"left",cursor:done?"default":"pointer",fontFamily:FB,transition:"all .2s",display:"flex",alignItems:"center",gap:10}}>
                      <span style={{width:26,height:26,borderRadius:8,border:"1.5px solid "+bd,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0,background:ib,color:ic}}>{it}</span>
                      {opt}
                    </button>
                  )
                })}
                {picked !== null && cq.x && (
                  <div style={{padding:"12px 14px",borderRadius:12,background:mcqOk?"#EAFAF1":"#EBF5FB",border:"1px solid "+(mcqOk?"#D5F5E3":"#AED6F1"),fontSize:13,lineHeight:1.5,color:mcqOk?"#145A32":"#1A4971"}}>
                    💡 {cq.x}
                  </div>
                )}
                {picked !== null && (
                  <button onClick={() => advance(mcqOk)} style={mb(true, { background: mcqOk ? "#1E8449" : "#C0392B" })}>
                    {mcqOk ? `Correct ! +${pOk} case${pOk > 1 ? "s" : ""} →` : (pFail > 0 ? `Raté +${pFail} →` : "Raté → suivant")}
                  </button>
                )}
              </div>
            )}

            {cq.t === "o" && contreTeamIdx !== null && (
              <div style={{marginTop:10,padding:"8px 12px",borderRadius:10,background:"#F4ECF7",border:"1px solid #D2B4DE",fontSize:11,color:"#6C3483",textAlign:"center",fontWeight:600}}>
                🎯 CONTRE de {ct.name} · si raté, +{originalLevel} à {originalTeam?.name}
              </div>
            )}
            {cq.t === "m" && contreTeamIdx !== null && picked === null && (
              <div style={{padding:"8px 12px",borderRadius:10,background:"#F4ECF7",border:"1px solid #D2B4DE",fontSize:11,color:"#6C3483",textAlign:"center",fontWeight:600,marginTop:10}}>
                🎯 CONTRE de {ct.name} · si raté, +{originalLevel} à {originalTeam?.name}
              </div>
            )}
            {cq.t === "o" && (
              <div style={{marginTop:16}}>
                {!showA && (
                  <div>
                    <input type="text" placeholder="Votre réponse…" value={userA} onChange={e => setUserA(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && userA.trim()) setShowA(true) }} style={{width:"100%",padding:"14px 16px",borderRadius:12,border:"1px solid var(--bd)",background:"var(--sf)",fontSize:16,fontFamily:FB,outline:"none",color:"var(--tx)",marginBottom:10}}/>
                    <button onClick={() => setShowA(true)} disabled={!userA.trim()} style={mb(!!userA.trim(), { opacity: userA.trim() ? 1 : 0.4 })}>Voir la réponse</button>
                  </div>
                )}
                {showA && (
                  <div style={{animation:"si .3s ease both"}}>
                    {userA.trim() && (
                      <div style={{background:"#EBF5FB",border:"1px solid #AED6F1",borderRadius:14,padding:"14px 16px",marginBottom:10}}>
                        <div style={{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".12em",color:"#2471A3",marginBottom:4}}>Votre réponse</div>
                        <p style={{fontFamily:FH,fontWeight:600,fontSize:16,lineHeight:1.3,color:"#1A4971"}}>{userA}</p>
                      </div>
                    )}
                    <div style={{background:"#EAFAF1",border:"1px solid #D5F5E3",borderRadius:14,padding:"16px 18px",marginBottom:12}}>
                      <div style={{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".12em",color:"#1E8449",marginBottom:5}}>Réponse attendue</div>
                      <p style={{fontFamily:FH,fontWeight:700,fontSize:17,lineHeight:1.4,color:"#145A32"}}>{cq.a}</p>
                    </div>
                    {cq.x && (
                      <div style={{padding:"12px 14px",borderRadius:12,background:"#EBF5FB",border:"1px solid #AED6F1",fontSize:13,lineHeight:1.5,color:"#1A4971",marginBottom:12}}>
                        💡 {cq.x}
                      </div>
                    )}
                    <p style={{fontSize:13,color:"var(--tx2)",textAlign:"center",marginBottom:12}}>
                      <b style={{color:ct.pal.bg}}>{ct.name}</b> correct ?
                    </p>
                    <div style={{display:"flex",gap:8}}>
                      <button onClick={() => advance(true)} style={{flex:1,padding:"14px",borderRadius:13,border:"1.5px solid #82E0AA",background:"#EAFAF1",color:"#1E8449",fontWeight:700,fontSize:15,fontFamily:FB,cursor:"pointer"}}>✓ +{pOk}</button>
                      <button onClick={() => advance(false)} style={{flex:1,padding:"14px",borderRadius:13,border:"1.5px solid #F1948A",background:"#FDEDEC",color:"#C0392B",fontWeight:700,fontSize:15,fontFamily:FB,cursor:"pointer"}}>✗{pFail > 0 ? ` +${pFail}` : ""}</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {step === "contre" && cd && (
          <div key={"co"+ak} style={{animation:"fi .4s ease both"}}>
            <div style={{background:"#F4ECF7",borderRadius:20,padding:"20px 20px",border:"1px solid #D2B4DE",textAlign:"center",margin:"14px 0 14px"}}>
              <div style={{fontSize:32,marginBottom:8}}>🎯</div>
              <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".14em",color:"#6C3483",marginBottom:8}}>Contre ?</div>
              <p style={{fontSize:14,color:"#4A235A",lineHeight:1.4}}>
                <b style={{color:originalTeam?.pal.bg}}>{originalTeam?.name}</b> s'est mis à <b>{originalLevel}</b> sur <b>{cd.t}</b>.<br/>
                Une autre équipe fait mieux ?
              </p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:12}}>
              {teams.map((t, i) => {
                if (i === baseIdx) return null
                const higherLevels = []
                for (let lv = originalLevel + 1; lv <= 10; lv++) higherLevels.push(lv)
                return (
                  <div key={i} style={{padding:"10px 12px",borderRadius:12,background:"var(--sf)",border:"1px solid var(--bd)"}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                      <div style={{width:20,height:20,borderRadius:6,background:t.pal.bg}}/>
                      <span style={{fontSize:13,fontWeight:700,color:t.pal.bg}}>{t.name}</span>
                    </div>
                    <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                      {higherLevels.map(lv => (
                        <button key={lv} onClick={() => takeContre(i, lv)} style={{width:36,height:36,borderRadius:10,border:"1.5px solid "+t.pal.bg,background:t.pal.lt,color:t.pal.bg,fontSize:15,fontWeight:800,fontFamily:FH,cursor:"pointer"}}>{lv}</button>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
            <button onClick={skipContre} style={mb(false)}>Non, on continue →</button>
            <p style={{fontSize:11,color:"var(--tx3)",textAlign:"center",marginTop:10}}>Si contre réussi : la nouvelle équipe gagne les cases. Si raté : +{originalLevel} pour {originalTeam?.name}.</p>
          </div>
        )}

        {step === "challenge" && (
          <div key={"ch"+ak} style={{animation:"fi .4s ease both"}}>
            <div style={{background:"#F4ECF7",borderRadius:20,padding:"24px 22px",border:"1px solid #D2B4DE",textAlign:"center",margin:"14px 0 18px"}}>
              <div style={{fontSize:42,marginBottom:12,animation:"pulse 1.5s ease-in-out infinite"}}>🎪</div>
              <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".14em",color:"#6C3483",marginBottom:10}}>Défi !</div>
              <p style={{fontFamily:FH,fontWeight:700,fontSize:20,lineHeight:1.3,color:"#4A235A",marginBottom:14}}>{chText}</p>
              <div style={{fontSize:32,fontWeight:900,fontFamily:FH,color:chLeft<10?"#C0392B":"#6C3483"}}>⏱️ {chLeft}s</div>
            </div>
            <p style={{fontSize:12,color:"var(--tx3)",textAlign:"center",marginBottom:12}}>Réussi → +3 cases · Raté → 0</p>
            <div style={{display:"flex",gap:8}}>
              <button onClick={() => doneChallenge(true)} style={{flex:1,padding:"14px",borderRadius:13,border:"1.5px solid #82E0AA",background:"#EAFAF1",color:"#1E8449",fontWeight:700,fontSize:15,fontFamily:FB,cursor:"pointer"}}>✓ Réussi +3</button>
              <button onClick={() => doneChallenge(false)} style={{flex:1,padding:"14px",borderRadius:13,border:"1.5px solid #F1948A",background:"#FDEDEC",color:"#C0392B",fontWeight:700,fontSize:15,fontFamily:FB,cursor:"pointer"}}>✗ Raté</button>
            </div>
          </div>
        )}

        <div style={{height:32}}/>
      </div>
    </div>
  )

  if (step === "rules") return (
    <div style={sP}>
      <style>{globalCSS}</style>
      <div style={sC}>
        <div style={{padding:"32px 0 18px"}}>
          <button onClick={() => setStep(prevStep || "home")} style={{background:"none",border:"none",color:"var(--tx3)",fontSize:14,cursor:"pointer",fontFamily:FB,marginBottom:14}}>← Retour</button>
          <h1 style={{fontFamily:FH,fontWeight:800,fontSize:26}}>📜 Comment on joue</h1>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:14,paddingBottom:40}}>
          <div style={sK}>
            <div style={{fontSize:12,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#6C3483",marginBottom:8}}>🎯 Le principe</div>
            <p style={{fontSize:14,lineHeight:1.55}}>Un thème tombe. Avant de voir la question, <b>tu annonces ton niveau de 1 à 10</b> selon ce que tu penses savoir. Plus tu vises haut, plus la question est dure — mais plus tu gagnes de cases.</p>
          </div>
          <div style={sK}>
            <div style={{fontSize:12,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#6C3483",marginBottom:8}}>🏁 Le but</div>
            <p style={{fontSize:14,lineHeight:1.55}}>Première équipe à atteindre la <b>case {BS}</b> gagne. Bonne réponse = tu avances de ton niveau. Mauvaise = tu restes.</p>
          </div>
          <div style={sK}>
            <div style={{fontSize:12,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#6C3483",marginBottom:8}}>🎭 Cases spéciales</div>
            <div style={{display:"flex",flexDirection:"column",gap:8,fontSize:13,lineHeight:1.5}}>
              <div><b style={{color:"#D48806"}}>🎭 Gage</b> — mime, chanson, accent… au choix du sort avant de répondre.</div>
              <div><b style={{color:"#08979C"}}>⚡ Boost</b> — bonus tiré au hasard : ×2, sniper +3, vol adversaire, bouclier, rejouer.</div>
              <div><b style={{color:"#6C3483"}}>🎪 Défi</b> — défi collectif chronométré (30s). Réussi = +3 cases.</div>
              <div><b>🏆 Case {BS}</b> — victoire.</div>
            </div>
          </div>
          <div style={sK}>
            <div style={{fontSize:12,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#6C3483",marginBottom:8}}>🎯 Le CONTRE (option)</div>
            <p style={{fontSize:14,lineHeight:1.55}}>Quand une équipe annonce son niveau, une autre peut <b>surenchérir</b>. Ex : Marie se met à 6, Paul propose de le faire à 8. Si Paul réussit, il rafle les cases. S'il rate, Marie récupère ses 6 cases en consolation.</p>
          </div>
          <div style={sK}>
            <div style={{fontSize:12,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#6C3483",marginBottom:8}}>⏱️ Chrono (option)</div>
            <p style={{fontSize:14,lineHeight:1.55}}>30 s au niveau 1, +5 s par niveau (jusqu'à 75 s au niveau 10). Temps écoulé = question ratée.</p>
          </div>
          <div style={sK}>
            <div style={{fontSize:12,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#6C3483",marginBottom:8}}>❓ Types de questions</div>
            <p style={{fontSize:14,lineHeight:1.55}}><b>QCM</b> (choix multiples, niveaux 1-5 et 8-10) — tu tapes la bonne case.<br/><b>Réponse libre</b> (niveaux 6-7) — tu tapes ta réponse puis tu compares. À toi de te juger honnêtement 😉</p>
          </div>
        </div>
      </div>
    </div>
  )

  if (step === "win") {
    let w = teams[0]
    teams.forEach(t => { if (t.pos >= BS) w = t })
    const so = teams.slice().sort((a, b) => b.pos - a.pos)
    const confetti = Array.from({length:40},(_,i)=>({e:["🎉","🎊","✨","⭐","🏆","💫"][i%6],l:Math.random()*100,d:Math.random()*3,du:2+Math.random()*3}))
    return (
      <div style={sP}>
        <style>{globalCSS}</style>
        <div className="confetti">{confetti.map((c,i)=><span key={i} style={{left:c.l+"vw",animationDelay:c.d+"s",animationDuration:c.du+"s"}}>{c.e}</span>)}</div>
        <div style={sC}>
          <div style={{textAlign:"center",padding:"52px 0 28px",animation:"fi .5s ease both"}}>
            <div style={{fontSize:60,marginBottom:14,animation:"pop .5s .2s ease both",opacity:0}}>🏆</div>
            <div style={{fontSize:11,fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"var(--tx3)",marginBottom:10}}>Victoire</div>
            <h1 style={{fontFamily:FH,fontWeight:900,fontSize:30,color:w.pal.bg,animation:"fi .5s .3s ease both",opacity:0}}>{w.name}</h1>
            <p style={{marginTop:10,fontSize:12,color:"var(--tx3)"}}>{playedCount}/{THEMES.length} thèmes joués au total</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:7,marginBottom:32}}>
            {so.map((t, i) => (
              <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"13px 15px",borderRadius:13,background:i===0?t.pal.lt:"var(--sf)",border:"1px solid "+(i===0?t.pal.bg+"33":"var(--bd)"),animation:`fi .3s ${0.3+i*0.07}s ease both`,opacity:0}}>
                <div style={{width:28,height:28,borderRadius:8,background:t.pal.bg,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:12,fontWeight:800,fontFamily:FH}}>{i+1}</div>
                <span style={{flex:1,fontSize:15,fontWeight:600}}>{t.name}</span>
                <span style={{fontSize:13,fontWeight:600,color:"var(--tx2)"}}>case {t.pos}/{BS}</span>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:10,paddingBottom:20}}>
            <button onClick={() => { setTeams(p => p.map(t => ({ name: t.name, pos: 0, pal: t.pal }))); startGame() }} style={mb(true, { flex: 1 })}>Rejouer</button>
            <button onClick={() => { setTeams(p => p.map(t => ({ name: t.name, pos: 0, pal: t.pal }))); setStep("home") }} style={mb(false, { flex: 1 })}>Accueil</button>
          </div>
          <div style={{textAlign:"center",paddingBottom:30}}>
            <button onClick={() => setStep("history")} style={{background:"none",border:"none",color:"var(--tx3)",fontSize:12,cursor:"pointer",fontFamily:FB,textDecoration:"underline"}}>📜 Voir l'historique</button>
          </div>
        </div>
      </div>
    )
  }

  if (step === "history") return (
    <div style={sP}>
      <style>{globalCSS}</style>
      <div style={sC}>
        <div style={{padding:"32px 0 18px"}}>
          <button onClick={() => setStep("home")} style={{background:"none",border:"none",color:"var(--tx3)",fontSize:14,cursor:"pointer",fontFamily:FB,marginBottom:14}}>← Retour</button>
          <h1 style={{fontFamily:FH,fontWeight:800,fontSize:26}}>📜 Historique</h1>
          <p style={{fontSize:12,color:"var(--tx3)",marginTop:4}}>{history.length} partie{history.length>1?"s":""} — 20 dernières conservées</p>
        </div>
        {history.length === 0 ? (
          <p style={{textAlign:"center",color:"var(--tx3)",fontSize:14,padding:"40px 0"}}>Rien encore. Lance une partie !</p>
        ) : (
          <div style={{display:"flex",flexDirection:"column",gap:10,paddingBottom:40}}>
            {history.map((h, i) => {
              const d = new Date(h.date)
              const dStr = d.toLocaleDateString("fr-FR", { day:"numeric", month:"short", hour:"2-digit", minute:"2-digit" })
              return (
                <div key={i} style={{padding:"14px 16px",borderRadius:13,background:"var(--sf)",border:"1px solid var(--bd)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                    <div style={{fontSize:13,fontWeight:700,fontFamily:FH}}>🏆 {h.winner}</div>
                    <div style={{fontSize:11,color:"var(--tx3)"}}>{dStr}</div>
                  </div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                    {h.teams.sort((a,b)=>b.pos-a.pos).map((t,j) => (
                      <span key={j} style={{fontSize:11,padding:"3px 8px",borderRadius:8,background:t.name===h.winner?"#FFFBE6":"#F0EFEB",color:t.name===h.winner?"#B9770E":"var(--tx2)",fontWeight:600}}>
                        {t.name} — {t.pos}/{BS}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
            <button onClick={() => { if(confirm("Effacer tout l'historique ?")){ setHistory([]); try{localStorage.removeItem("ttmc-history-v1")}catch(e){} } }} style={{marginTop:10,background:"none",border:"none",color:"#C0392B",fontSize:12,cursor:"pointer",fontFamily:FB,textDecoration:"underline"}}>Effacer l'historique</button>
          </div>
        )}
      </div>
    </div>
  )

  return null
}
