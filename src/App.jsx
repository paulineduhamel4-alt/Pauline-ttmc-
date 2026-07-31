import { useState, useCallback, useRef, useEffect } from "react"
import { THEMES as SEED_THEMES } from "./themes.js"

const BS = 42
const INIT_GEN = 20
const BG_GEN = 10
const BG_TRIGGER = 5

const PL = [
  {bg:"#C0392B",lt:"#FDEDEC"},{bg:"#2471A3",lt:"#EBF5FB"},
  {bg:"#1E8449",lt:"#EAFAF1"},{bg:"#CA6F1E",lt:"#FEF5E7"},
  {bg:"#6C3483",lt:"#F4ECF7"},{bg:"#148F77",lt:"#E8F8F5"},
  {bg:"#B03A7A",lt:"#FDECF4"},{bg:"#5D4E37",lt:"#FAF0E6"}
]
const ST = {}
;[5,11,17,23,29,35,39].forEach(i => { ST[i] = "G" })
;[8,15,21,28,34,40].forEach(i => { ST[i] = "B" })

const GA = ["🎭 Mimez le thème 30s !","🗣️ Sans le mot principal !","🎤 Chantez sur Joyeux anniversaire !","🌍 Accent étranger !","✏️ Dessinez avec le doigt !","🙈 Yeux fermés !","🎯 Adversaire choisit niveau !","⏱️ 5 secondes max !","🔤 Épelez à l'envers !","🤫 Le + jeune seul !","👥 Tous en chœur !","🦶 Sur un pied !","📖 Anecdote d'abord !","🔇 Mots 1 syllabe !"]
const BO = [{tx:"⚡ DOUBLE ×2 !",id:"double",lb:"×2"},{tx:"🏴‍☠️ VOL adversaire −2 !",id:"steal",lb:"🏴‍☠️"},{tx:"🔄 REJOUER si correct !",id:"replay",lb:"🔄"},{tx:"🛡️ BOUCLIER +1 même raté !",id:"shield",lb:"🛡️"},{tx:"🎯 SNIPER +3 bonus !",id:"sniper",lb:"🎯+3"}]

const TONES = [
  { id: "familial", lb: "🌈 Familial", desc: "tout public" },
  { id: "fun",      lb: "🎉 Fun",       desc: "insolite, pop" },
  { id: "pointu",   lb: "🧠 Pointu",    desc: "exigeant" },
  { id: "adulte",   lb: "🔞 Adulte",    desc: "sans filtre" }
]

function shuffle(a){const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
function pickR(a){return a[Math.floor(Math.random()*a.length)]}
function normTitle(t){return t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g," ").trim()}
function timeFor(level){return 25 + level * 5}

const globalCSS = "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}:root{--bg:#F8F7F4;--sf:#FFF;--tx:#1C1C1A;--tx2:#6E6E68;--tx3:#A8A8A2;--bd:#EAEAE5}body{background:var(--bg)}@keyframes fi{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes si{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}@keyframes pop{0%{transform:scale(.6)}50%{transform:scale(1.08)}100%{transform:scale(1)}}@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}@keyframes prog{0%{background-position:0 0}100%{background-position:40px 0}}input::placeholder{color:var(--tx3)}button:active:not(:disabled){transform:scale(.97)!important}.spin{animation:spin 1s linear infinite;display:inline-block}.pulse{animation:pulse 1.5s ease-in-out infinite}"
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
    <div ref={ref} style={{display:"flex",gap:5,overflowX:"auto",padding:"10px 0",scrollbarWidth:"none"}}>
      {cells.map(idx => {
        const h = teams.filter(t => t.pos === idx)
        const fin = idx === BS, sq = ST[idx]
        const bg = fin ? "var(--tx)" : h.length ? h[0].pal.bg : sq === "G" ? "#FFF7E6" : sq === "B" ? "#E6FFFB" : "#F0EFEB"
        const cl = fin ? "#fff" : h.length ? "#fff" : sq === "G" ? "#D48806" : sq === "B" ? "#08979C" : "var(--tx3)"
        const bd = h.length || fin ? "none" : sq === "G" ? "1.5px solid #FFD666" : sq === "B" ? "1.5px solid #87E8DE" : "1px solid var(--bd)"
        const lb = fin ? "🏆" : h.length ? h.map(t => t.name[0]).join("") : sq === "G" ? "🎭" : sq === "B" ? "⚡" : idx
        return (
          <div key={idx} className={h.length ? "ba" : ""} style={{minWidth:38,height:38,borderRadius:10,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:sq?12:11,fontWeight:600,fontFamily:FB,position:"relative",transition:"all .3s",background:bg,color:cl,border:bd}}>
            {lb}
            {h.length > 1 && (
              <div style={{position:"absolute",top:-3,right:-3,width:14,height:14,borderRadius:"50%",background:h[1].pal.bg,border:"2px solid var(--bg)",fontSize:7,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700}}>{h[1].name[0]}</div>
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
  const [themes, setThemes] = useState(SEED_THEMES)
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
  const [tone, setTone] = useState("fun")
  const [timerEnabled, setTimerEnabled] = useState(false)
  const [timerLeft, setTimerLeft] = useState(0)
  const [judgeLoading, setJudgeLoading] = useState(false)
  const [judgeVerdict, setJudgeVerdict] = useState(null)
  const [loadProgress, setLoadProgress] = useState({ pct: 0, msg: "" })
  const [loadError, setLoadError] = useState("")
  const [history, setHistory] = useState([])
  const [bgBusy, setBgBusy] = useState(false)

  const usedRef = useRef({})
  const seenTitlesRef = useRef(new Set())
  const bgFiredRef = useRef(false)

  useEffect(() => {
    try {
      const h = localStorage.getItem("ttmc-history-v1")
      if (h) setHistory(JSON.parse(h))
      const t = localStorage.getItem("ttmc-tone")
      if (t && TONES.find(x => x.id === t)) setTone(t)
      const tim = localStorage.getItem("ttmc-timer")
      if (tim === "1") setTimerEnabled(true)
    } catch (e) {}
  }, [])

  useEffect(() => { try { localStorage.setItem("ttmc-tone", tone) } catch (e) {} }, [tone])
  useEffect(() => { try { localStorage.setItem("ttmc-timer", timerEnabled ? "1" : "0") } catch (e) {} }, [timerEnabled])

  /* --------- Génération de thèmes --------- */
  async function fetchThemes(count, existingThemes) {
    const r = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count, tone, existingThemes })
    })
    if (!r.ok) throw new Error("HTTP " + r.status)
    const data = await r.json()
    if (!data.themes?.length) throw new Error("Aucun thème généré")
    return data.themes
  }

  async function launchGame() {
    if (teams.length < 2) return
    setStep("loading")
    setLoadError("")
    setLoadProgress({ pct: 5, msg: "Contact du serveur…" })

    let progInterval
    const t0 = Date.now()
    const expectedMs = INIT_GEN * 2500
    progInterval = setInterval(() => {
      const el = Date.now() - t0
      const pct = Math.min(95, 5 + Math.round((el / expectedMs) * 90))
      setLoadProgress({ pct, msg: `L'IA fabrique ${INIT_GEN} thèmes originaux… (${Math.round(el/1000)}s)` })
    }, 500)

    try {
      const fresh = await fetchThemes(INIT_GEN, [])
      clearInterval(progInterval)
      setLoadProgress({ pct: 100, msg: `✅ ${fresh.length} thèmes prêts !` })
      seenTitlesRef.current = new Set(fresh.map(t => normTitle(t.t)))
      bgFiredRef.current = false
      setThemes(fresh)
      setTimeout(() => startWithThemes(fresh), 400)
    } catch (e) {
      clearInterval(progInterval)
      console.error(e)
      setLoadError("L'IA n'a pas répondu. On joue avec la banque de secours (11 thèmes).")
      const fallback = shuffle(SEED_THEMES).slice(0, 11)
      seenTitlesRef.current = new Set(fallback.map(t => normTitle(t.t)))
      setThemes(fallback)
      setTimeout(() => startWithThemes(fallback), 1500)
    }
  }

  function startWithThemes(pool) {
    usedRef.current = {}
    setDeck(shuffle(pool))
    setCi(0); setTurn(0); reset()
    setGageT(""); setBoost(null)
    goSq(teams[0]?.pos || 0)
  }

  async function backgroundGen() {
    if (bgBusy) return
    setBgBusy(true)
    try {
      const more = await fetchThemes(BG_GEN, themes.map(t => t.t))
      const fresh = more.filter(t => !seenTitlesRef.current.has(normTitle(t.t)))
      fresh.forEach(t => seenTitlesRef.current.add(normTitle(t.t)))
      if (fresh.length) {
        setThemes(cur => [...cur, ...fresh])
        setDeck(cur => [...cur, ...shuffle(fresh)])
        console.log(`[bg] +${fresh.length} thèmes prêts`)
      }
    } catch (e) {
      console.warn("[bg] échec:", e.message)
    } finally {
      setBgBusy(false)
    }
  }

  const ct = teams.length ? teams[turn % teams.length] : null
  const cd = deck[ci] || null
  const raw = (level > 0 && cd?.q?.[level - 1]) || null
  const cq = raw ? (raw[1] === "m"
    ? { q: raw[0], t: "m", o: raw[2], c: raw[3], x: raw[4] || "" }
    : { q: raw[0], t: "o", a: raw[2], x: raw[3] || "" }) : null

  function reset() { setLevel(0); setPicked(null); setShowA(false); setUserA(""); setAk(k => k + 1); setJudgeVerdict(null); setJudgeLoading(false); setTimerLeft(0) }

  function goSq(pos) {
    const sq = ST[pos]
    if (sq === "G") { setGageT(pickR(GA)); setBoost(null); setStep("gage") }
    else if (sq === "B") { setBoost(pickR(BO)); setGageT(""); setStep("boost") }
    else { setGageT(""); setBoost(null); setStep("theme") }
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
    setStep("question"); setAk(k => k + 1)
    setJudgeVerdict(null); setJudgeLoading(false)
    if (timerEnabled) setTimerLeft(timeFor(v))
  }

  /* --------- Timer --------- */
  useEffect(() => {
    if (step !== "question" || !timerEnabled || timerLeft <= 0) return
    if (picked !== null || showA) return
    const t = setTimeout(() => setTimerLeft(x => x - 1), 1000)
    return () => clearTimeout(t)
  }, [step, timerEnabled, timerLeft, picked, showA])

  useEffect(() => {
    if (step === "question" && timerEnabled && timerLeft === 0 && picked === null && !showA && cq) {
      if (cq.t === "m") { setPicked(-1); setTimeout(() => advance(false), 800) }
      else { setShowA(true); setJudgeVerdict({ correct: false, feedback: "⏱️ Temps écoulé !" }) }
    }
  }, [timerLeft, step, timerEnabled, picked, showA, cq])

  /* --------- Backgroud gen quand deck bientôt vide --------- */
  useEffect(() => {
    if (!deck.length || bgFiredRef.current) return
    const remaining = deck.length - ci
    if (remaining <= BG_TRIGGER && !bgBusy) {
      bgFiredRef.current = true
      backgroundGen()
    }
  }, [ci, deck.length, bgBusy])

  useEffect(() => {
    if (bgFiredRef.current && !bgBusy) {
      const t = setTimeout(() => { bgFiredRef.current = false }, 2000)
      return () => clearTimeout(t)
    }
  }, [bgBusy])

  function selOpt(i) {
    if (picked === null) setPicked(i)
  }

  async function submitOpen() {
    if (!userA.trim() || judgeLoading || showA) return
    setJudgeLoading(true)
    setShowA(true)
    try {
      const r = await fetch("/api/judge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: cq.q, expected: cq.a, answer: userA })
      })
      const v = await r.json()
      setJudgeVerdict(v)
    } catch (e) {
      setJudgeVerdict({ correct: false, feedback: "Impossible de joindre le juge, décidez entre vous." })
    } finally {
      setJudgeLoading(false)
    }
  }

  function pts(ok) {
    const m = boost?.id === "double" ? 2 : 1
    const b = boost?.id === "sniper" && ok ? 3 : 0
    const sh = boost?.id === "shield" && !ok ? 1 : 0
    return ok ? level * m + b : sh
  }

  function advance(ok) {
    const p = pts(ok)
    const ti = turn % teams.length
    const doSteal = boost?.id === "steal" && ok && teams.length > 1
    const doReplay = boost?.id === "replay" && ok
    const vi = (ti + 1) % teams.length
    const nt = teams.map((t, i) => {
      if (i === ti) return { name: t.name, pos: Math.min(BS, t.pos + p), pal: t.pal }
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
      setDeck(shuffle(themes))
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
      tone,
      winner: w.name,
      teams: finalTeams.map(t => ({ name: t.name, pos: t.pos })),
      themesTotal: themes.length
    }
    const next = [entry, ...history].slice(0, 20)
    setHistory(next)
    try { localStorage.setItem("ttmc-history-v1", JSON.stringify(next)) } catch (e) {}
  }

  const pOk = pts(true), pFail = pts(false)
  const mcqOk = cq?.t === "m" && picked !== null && picked >= 0 ? picked === cq.c : false

  const sP = { minHeight: "100dvh", fontFamily: FB, color: "var(--tx)", background: "var(--bg)" }
  const sC = { maxWidth: 440, margin: "0 auto", padding: "0 20px" }
  const sK = { background: "var(--sf)", borderRadius: 20, padding: "24px 22px", boxShadow: "0 1px 3px rgba(0,0,0,.04),0 6px 20px rgba(0,0,0,.025)", border: "1px solid var(--bd)" }

  /* ================== HOME ================== */
  if (step === "home") return (
    <div style={sP}>
      <style>{globalCSS}</style>
      <div style={sC}>
        <div style={{textAlign:"center",padding:"48px 0 24px",animation:"fi .5s ease both"}}>
          <div style={{fontSize:13,fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"var(--tx3)",marginBottom:14}}>Le jeu de culture G</div>
          <h1 style={{fontFamily:FH,fontWeight:900,fontSize:34,lineHeight:1.1}}>Tu te mets<br/>combien ?</h1>
          <p style={{marginTop:12,fontSize:13,color:"var(--tx2)"}}>✨ {INIT_GEN} nouveaux thèmes générés à chaque partie</p>
        </div>

        {/* Tone selector */}
        <div style={{marginBottom:16}}>
          <label style={{fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:".12em",color:"var(--tx3)",display:"block",marginBottom:10}}>Ambiance</label>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6}}>
            {TONES.map(t => {
              const on = tone === t.id
              return (
                <button key={t.id} onClick={() => setTone(t.id)} style={{padding:"10px 4px",borderRadius:12,border:on?"1.5px solid var(--tx)":"1px solid var(--bd)",background:on?"var(--tx)":"var(--sf)",color:on?"#fff":"var(--tx)",fontSize:12,fontWeight:600,fontFamily:FB,cursor:"pointer",lineHeight:1.2}}>
                  <div>{t.lb}</div>
                  <div style={{fontSize:10,opacity:.7,marginTop:2,fontWeight:400}}>{t.desc}</div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Timer toggle */}
        <div style={{marginBottom:20,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 14px",borderRadius:12,background:"var(--sf)",border:"1px solid var(--bd)"}}>
          <div>
            <div style={{fontSize:14,fontWeight:600}}>⏱️ Chrono par question</div>
            <div style={{fontSize:11,color:"var(--tx3)",marginTop:2}}>Niveau 1 : 30s · Niveau 10 : 75s</div>
          </div>
          <button onClick={() => setTimerEnabled(v => !v)} style={{width:52,height:28,borderRadius:14,border:"none",background:timerEnabled?"#1E8449":"#D0D0CB",position:"relative",cursor:"pointer",transition:"all .2s"}}>
            <div style={{position:"absolute",top:2,left:timerEnabled?26:2,width:24,height:24,borderRadius:"50%",background:"#fff",boxShadow:"0 1px 3px rgba(0,0,0,.15)",transition:"all .2s"}}/>
          </button>
        </div>

        {/* Teams */}
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
          <button onClick={launchGame} disabled={teams.length < 2} style={mb(teams.length >= 2, { opacity: teams.length >= 2 ? 1 : 0.4, fontSize: 17, fontFamily: FH, fontWeight: 700 })}>
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

  /* ================== LOADING ================== */
  if (step === "loading") return (
    <div style={sP}>
      <style>{globalCSS}</style>
      <div style={sC}>
        <div style={{textAlign:"center",padding:"80px 0 30px"}}>
          <div style={{fontSize:56,marginBottom:22,animation:"fl 2s ease-in-out infinite"}}>✨</div>
          <h2 style={{fontFamily:FH,fontWeight:800,fontSize:24,marginBottom:8}}>Préparation de la partie</h2>
          <p style={{fontSize:14,color:"var(--tx2)",marginBottom:30}} className="pulse">{loadProgress.msg}</p>
          <div style={{width:"100%",height:8,background:"var(--bd)",borderRadius:20,overflow:"hidden",marginBottom:14}}>
            <div style={{width:loadProgress.pct+"%",height:"100%",background:"linear-gradient(90deg,#2471A3,#6C3483)",borderRadius:20,transition:"width .5s",backgroundSize:"40px 40px",animation:"prog 1s linear infinite"}}/>
          </div>
          <div style={{fontSize:12,color:"var(--tx3)"}}>{loadProgress.pct}%</div>
          {loadError && (
            <div style={{marginTop:24,padding:"12px 14px",borderRadius:10,background:"#FEF5E7",border:"1px solid #F5CBA7",color:"#B9770E",fontSize:13,lineHeight:1.5}}>
              ⚠️ {loadError}
            </div>
          )}
        </div>
      </div>
    </div>
  )

  /* ================== JEU ================== */
  if (["gage","boost","theme","question"].includes(step) && ct) return (
    <div style={sP}>
      <style>{globalCSS}</style>
      <div style={sC}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 0 6px"}}>
          <span style={{fontSize:11,fontWeight:600,color:"var(--tx3)",letterSpacing:".08em"}}>TOUR {turn+1}</span>
          <div style={{display:"flex",alignItems:"center",gap:7}}>
            <div style={{width:18,height:18,borderRadius:5,background:ct.pal.bg}}/>
            <span style={{fontSize:14,fontWeight:700,color:ct.pal.bg}}>{ct.name}</span>
            {bgBusy && <span title="Génération en arrière-plan" style={{fontSize:14,marginLeft:4}} className="spin">⚙️</span>}
          </div>
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

            {cq.t === "o" && (
              <div style={{marginTop:16}}>
                {!showA && (
                  <div>
                    <input type="text" placeholder="Votre réponse…" value={userA} onChange={e => setUserA(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && userA.trim()) submitOpen() }} style={{width:"100%",padding:"14px 16px",borderRadius:12,border:"1px solid var(--bd)",background:"var(--sf)",fontSize:16,fontFamily:FB,outline:"none",color:"var(--tx)",marginBottom:10}}/>
                    <button onClick={submitOpen} disabled={!userA.trim()} style={mb(!!userA.trim(), { opacity: userA.trim() ? 1 : 0.4 })}>Valider</button>
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

                    {judgeLoading && (
                      <div style={{padding:"14px",borderRadius:12,background:"#F0EFEB",textAlign:"center",fontSize:14,color:"var(--tx2)",marginBottom:12}}>
                        <span className="spin">⚖️</span> Le juge IA délibère…
                      </div>
                    )}

                    {judgeVerdict && !judgeLoading && (
                      <div style={{padding:"14px 16px",borderRadius:12,background:judgeVerdict.correct?"#EAFAF1":"#FDEDEC",border:"1px solid "+(judgeVerdict.correct?"#82E0AA":"#F1948A"),marginBottom:12}}>
                        <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".12em",color:judgeVerdict.correct?"#1E8449":"#C0392B",marginBottom:5}}>
                          {judgeVerdict.correct ? "✓ Verdict : correct" : "✗ Verdict : non"}
                        </div>
                        <p style={{fontSize:13,lineHeight:1.5,color:judgeVerdict.correct?"#145A32":"#78281F"}}>{judgeVerdict.feedback}</p>
                      </div>
                    )}

                    {cq.x && judgeVerdict && !judgeLoading && (
                      <div style={{padding:"12px 14px",borderRadius:12,background:"#EBF5FB",border:"1px solid #AED6F1",fontSize:13,lineHeight:1.5,color:"#1A4971",marginBottom:12}}>
                        💡 {cq.x}
                      </div>
                    )}

                    {judgeVerdict && !judgeLoading && (
                      <div>
                        <button onClick={() => advance(judgeVerdict.correct)} style={mb(true, { background: judgeVerdict.correct ? "#1E8449" : "#C0392B", marginBottom: 8 })}>
                          {judgeVerdict.correct ? `Encaisser +${pOk} →` : (pFail > 0 ? `Continuer +${pFail} →` : "Continuer →")}
                        </button>
                        <button onClick={() => setJudgeVerdict(v => ({ ...v, correct: !v.correct }))} style={{width:"100%",padding:"10px",borderRadius:11,border:"1px solid var(--bd)",background:"none",color:"var(--tx3)",fontSize:12,cursor:"pointer",fontFamily:FB}}>
                          🤨 Contester le verdict
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div style={{height:32}}/>
      </div>
    </div>
  )

  /* ================== WIN ================== */
  if (step === "win") {
    let w = teams[0]
    teams.forEach(t => { if (t.pos >= BS) w = t })
    const so = teams.slice().sort((a, b) => b.pos - a.pos)
    return (
      <div style={sP}>
        <style>{globalCSS}</style>
        <div style={sC}>
          <div style={{textAlign:"center",padding:"52px 0 28px",animation:"fi .5s ease both"}}>
            <div style={{fontSize:60,marginBottom:14,animation:"pop .5s .2s ease both",opacity:0}}>🏆</div>
            <div style={{fontSize:11,fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"var(--tx3)",marginBottom:10}}>Victoire</div>
            <h1 style={{fontFamily:FH,fontWeight:900,fontSize:30,color:w.pal.bg,animation:"fi .5s .3s ease both",opacity:0}}>{w.name}</h1>
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
            <button onClick={() => { setTeams(p => p.map(t => ({ name: t.name, pos: 0, pal: t.pal }))); launchGame() }} style={mb(true, { flex: 1 })}>Rejouer</button>
            <button onClick={() => { setTeams(p => p.map(t => ({ name: t.name, pos: 0, pal: t.pal }))); setStep("home") }} style={mb(false, { flex: 1 })}>Accueil</button>
          </div>
          <div style={{textAlign:"center",paddingBottom:30}}>
            <button onClick={() => setStep("history")} style={{background:"none",border:"none",color:"var(--tx3)",fontSize:12,cursor:"pointer",fontFamily:FB,textDecoration:"underline"}}>📜 Voir l'historique</button>
          </div>
        </div>
      </div>
    )
  }

  /* ================== HISTORY ================== */
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
              const tn = TONES.find(x => x.id === h.tone)?.lb || h.tone
              return (
                <div key={i} style={{padding:"14px 16px",borderRadius:13,background:"var(--sf)",border:"1px solid var(--bd)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                    <div style={{fontSize:13,fontWeight:700,fontFamily:FH}}>🏆 {h.winner}</div>
                    <div style={{fontSize:11,color:"var(--tx3)"}}>{dStr}</div>
                  </div>
                  <div style={{fontSize:11,color:"var(--tx2)",marginBottom:8}}>{tn}</div>
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
