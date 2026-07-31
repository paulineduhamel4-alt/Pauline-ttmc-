import { useState, useCallback, useRef, useEffect } from "react"
import { THEMES as SEED_THEMES } from "./themes.js"

const BS = 42
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

function shuffle(a){const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
function pickR(a){return a[Math.floor(Math.random()*a.length)];}

const globalCSS = "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}:root{--bg:#F8F7F4;--sf:#FFF;--tx:#1C1C1A;--tx2:#6E6E68;--tx3:#A8A8A2;--bd:#EAEAE5}body{background:var(--bg)}@keyframes fi{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes si{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}@keyframes pop{0%{transform:scale(.6)}50%{transform:scale(1.08)}100%{transform:scale(1)}}@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}input::placeholder{color:var(--tx3)}button:active:not(:disabled){transform:scale(.97)!important}.spin{animation:spin 1s linear infinite;display:inline-block}"
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
  const [genLoading, setGenLoading] = useState(false)
  const [genError, setGenError] = useState("")
  const [genCount, setGenCount] = useState(15)
  const usedRef = useRef({})
  const [playedCount, setPlayedCount] = useState(0)
  const playedRef = useRef({})

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ttmc-played5")
      if (saved) {
        const obj = JSON.parse(saved)
        playedRef.current = obj
        setPlayedCount(Object.keys(obj).length)
      }
      const savedThemes = localStorage.getItem("ttmc-themes-v1")
      if (savedThemes) {
        const arr = JSON.parse(savedThemes)
        if (Array.isArray(arr) && arr.length) {
          const seedTitles = new Set(SEED_THEMES.map(t => t.t))
          const extras = arr.filter(t => !seedTitles.has(t.t))
          setThemes([...SEED_THEMES, ...extras])
        }
      }
    } catch (e) { /* noop */ }
  }, [])

  function persistThemes(next) {
    try {
      const seedTitles = new Set(SEED_THEMES.map(t => t.t))
      const extras = next.filter(t => !seedTitles.has(t.t))
      localStorage.setItem("ttmc-themes-v1", JSON.stringify(extras))
    } catch (e) { /* noop */ }
  }

  function markPlayed(name) {
    playedRef.current[name] = true
    setPlayedCount(Object.keys(playedRef.current).length)
    try { localStorage.setItem("ttmc-played5", JSON.stringify(playedRef.current)) } catch (e) {}
  }

  function resetPlayed() {
    playedRef.current = {}
    setPlayedCount(0)
    try { localStorage.removeItem("ttmc-played5") } catch (e) {}
  }

  async function generateThemes() {
    setGenLoading(true)
    setGenError("")
    try {
      const r = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          count: genCount,
          existingThemes: themes.map(t => t.t)
        })
      })
      if (!r.ok) throw new Error("Erreur serveur (HTTP " + r.status + ")")
      const data = await r.json()
      if (!data.themes?.length) throw new Error("Aucun thème généré")
      const merged = [...themes, ...data.themes]
      setThemes(merged)
      persistThemes(merged)
    } catch (e) {
      setGenError(e.message || "Erreur inconnue. Le serveur est-il lancé ?")
    } finally {
      setGenLoading(false)
    }
  }

  function clearGeneratedThemes() {
    setThemes(SEED_THEMES)
    try { localStorage.removeItem("ttmc-themes-v1") } catch (e) {}
  }

  const ct = teams.length ? teams[turn % teams.length] : null
  const cd = deck[ci] || null
  const raw = (level > 0 && cd?.q?.[level - 1]) || null
  const cq = raw ? (raw[1] === "m" ? { q: raw[0], t: "m", o: raw[2], c: raw[3] } : { q: raw[0], t: "o", a: raw[2] }) : null

  function reset() { setLevel(0); setPicked(null); setShowA(false); setUserA(""); setAk(k => k + 1) }

  function goSq(pos) {
    const sq = ST[pos]
    if (sq === "G") { setGageT(pickR(GA)); setBoost(null); setStep("gage") }
    else if (sq === "B") { setBoost(pickR(BO)); setGageT(""); setStep("boost") }
    else { setGageT(""); setBoost(null); setStep("theme") }
  }

  function startGame() {
    if (teams.length < 2) return
    usedRef.current = {}
    let unseen = themes.filter(c => !playedRef.current[c.t])
    if (unseen.length < 5) unseen = themes.slice()
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
    setStep("question"); setAk(k => k + 1)
    if (cd) markPlayed(cd.t)
  }

  function selOpt(i) { if (picked === null) setPicked(i) }

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
    if (nt.some(t => t.pos >= BS)) { setStep("win"); return }
    usedRef.current[ci] = true
    let nc = ci + 1
    while (nc < deck.length && usedRef.current[nc]) nc++
    if (nc >= deck.length) {
      let unseen2 = themes.filter(c => !playedRef.current[c.t])
      if (unseen2.length < 3) unseen2 = themes.slice()
      usedRef.current = {}
      setDeck(shuffle(unseen2))
      nc = 0
    }
    setCi(nc); reset()
    if (doReplay) { goSq(nt[ti].pos); return }
    const ntn = turn + 1
    setTurn(ntn)
    goSq(nt[ntn % nt.length].pos)
  }

  const generatedCount = themes.length - SEED_THEMES.length
  const remaining = themes.length - playedCount
  const pOk = pts(true), pFail = pts(false)
  const mcqOk = cq?.t === "m" && picked !== null ? picked === cq.c : false

  const sP = { minHeight: "100dvh", fontFamily: FB, color: "var(--tx)", background: "var(--bg)" }
  const sC = { maxWidth: 440, margin: "0 auto", padding: "0 20px" }
  const sK = { background: "var(--sf)", borderRadius: 20, padding: "24px 22px", boxShadow: "0 1px 3px rgba(0,0,0,.04),0 6px 20px rgba(0,0,0,.025)", border: "1px solid var(--bd)" }

  if (step === "home") return (
    <div style={sP}>
      <style>{globalCSS}</style>
      <div style={sC}>
        <div style={{textAlign:"center",padding:"52px 0 32px",animation:"fi .5s ease both"}}>
          <div style={{fontSize:13,fontWeight:600,letterSpacing:".14em",textTransform:"uppercase",color:"var(--tx3)",marginBottom:14}}>Le jeu de culture G</div>
          <h1 style={{fontFamily:FH,fontWeight:900,fontSize:34,lineHeight:1.1}}>Tu te mets<br/>combien ?</h1>
          <p style={{marginTop:12,fontSize:14,color:"var(--tx2)",lineHeight:1.6}}>
            {themes.length} thèmes · {themes.length * 10} questions
            {generatedCount > 0 && <span style={{color:"#1E8449",fontWeight:600}}> · {generatedCount} générés ✨</span>}
          </p>
          <p style={{marginTop:6,fontSize:12,color:"var(--tx3)"}}>🎭 Gages · ⚡ Boosts · {BS} cases</p>
          {playedCount > 0 && (
            <p style={{marginTop:10,fontSize:13,fontWeight:600,color:remaining<5?"#C0392B":"var(--tx2)"}}>
              {playedCount} thèmes vus · {remaining > 0 ? remaining + " restants" : "génère-en de nouveaux !"}
            </p>
          )}
        </div>

        {/* Bloc génération IA */}
        <div style={{background:"linear-gradient(135deg,#EBF5FB 0%,#F4ECF7 100%)",borderRadius:18,padding:"18px 18px",marginBottom:24,border:"1px solid #D6EAF8"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
            <div>
              <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".12em",color:"#2471A3"}}>✨ Générer avec l'IA</div>
              <div style={{fontSize:12,color:"var(--tx2)",marginTop:3}}>Nouveaux thèmes originaux, calibrés 1→10</div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <button onClick={() => setGenCount(Math.max(5, genCount - 5))} disabled={genLoading || genCount <= 5} style={{width:28,height:28,borderRadius:8,border:"1px solid #AED6F1",background:"#fff",cursor:"pointer",fontWeight:700,color:"#2471A3",opacity:genCount<=5?0.4:1}}>−</button>
              <span style={{minWidth:24,textAlign:"center",fontWeight:700,color:"#2471A3"}}>{genCount}</span>
              <button onClick={() => setGenCount(Math.min(25, genCount + 5))} disabled={genLoading || genCount >= 25} style={{width:28,height:28,borderRadius:8,border:"1px solid #AED6F1",background:"#fff",cursor:"pointer",fontWeight:700,color:"#2471A3",opacity:genCount>=25?0.4:1}}>+</button>
            </div>
          </div>
          <button
            onClick={generateThemes}
            disabled={genLoading}
            style={{width:"100%",padding:"13px",borderRadius:12,border:"none",background:genLoading?"#AED6F1":"#2471A3",color:"#fff",fontSize:15,fontWeight:700,cursor:genLoading?"wait":"pointer",fontFamily:FB,transition:"all .2s"}}
          >
            {genLoading
              ? <><span className="spin">⏳</span> Génération en cours… ({genCount} thèmes, ~30-60s)</>
              : `🎲 Générer ${genCount} nouveaux thèmes`}
          </button>
          {genError && (
            <div style={{marginTop:10,padding:"10px 12px",borderRadius:10,background:"#FDEDEC",border:"1px solid #F1948A",color:"#C0392B",fontSize:12,lineHeight:1.5}}>
              ❌ {genError}
              <br/><span style={{fontSize:11,opacity:.85}}>Vérifie que <code>npm run dev</code> tourne bien (serveur + front) et que ta clé API est dans <code>.env</code>.</span>
            </div>
          )}
          {generatedCount > 0 && !genLoading && (
            <button onClick={clearGeneratedThemes} style={{marginTop:8,width:"100%",background:"none",border:"none",color:"#6E6E68",fontSize:11,cursor:"pointer",fontFamily:FB,textDecoration:"underline"}}>
              Supprimer les {generatedCount} thèmes générés
            </button>
          )}
        </div>

        <div style={{marginBottom:20}}>
          <label style={{fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:".12em",color:"var(--tx3)",display:"block",marginBottom:10}}>Équipes (2 à 8)</label>
          <div style={{display:"flex",gap:8}}>
            <input type="text" placeholder="Nom…" value={nameIn} onChange={e => setNameIn(e.target.value)} onKeyDown={e => { if (e.key === "Enter") addTeam() }} maxLength={14} style={{flex:1,padding:"13px 16px",borderRadius:12,border:"1px solid var(--bd)",background:"var(--sf)",fontSize:16,fontFamily:FB,outline:"none",color:"var(--tx)"}}/>
            <button onClick={addTeam} disabled={!nameIn.trim() || teams.length >= 8} style={{width:48,borderRadius:12,border:"1px solid var(--bd)",background:nameIn.trim()?"var(--tx)":"var(--sf)",color:nameIn.trim()?"#fff":"var(--tx3)",fontSize:22,cursor:"pointer"}}>+</button>
          </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:28}}>
          {teams.map((t, i) => (
            <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"11px 14px",borderRadius:12,background:"var(--sf)",border:"1px solid var(--bd)"}}>
              <div style={{width:30,height:30,borderRadius:8,background:t.pal.bg,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:700,fontFamily:FH}}>{t.name[0]}</div>
              <span style={{flex:1,fontSize:15,fontWeight:600}}>{t.name}</span>
              <button onClick={() => remTeam(i)} style={{width:26,height:26,borderRadius:8,border:"none",background:"#FFF1F0",color:"#CF1322",fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
            </div>
          ))}
          {teams.length === 0 && <p style={{textAlign:"center",color:"var(--tx3)",fontSize:14,padding:"24px 0"}}>Ajoutez au moins 2 équipes.</p>}
        </div>

        <div style={{paddingBottom:20}}>
          <button onClick={startGame} disabled={teams.length < 2} style={mb(teams.length >= 2, { opacity: teams.length >= 2 ? 1 : 0.4, fontSize: 17, fontFamily: FH, fontWeight: 700 })}>
            {teams.length < 2 ? `Encore ${2 - teams.length} équipe${2 - teams.length > 1 ? "s" : ""}` : "Lancer la partie 🚀"}
          </button>
        </div>

        {playedCount > 0 && (
          <div style={{textAlign:"center",paddingBottom:30}}>
            <button onClick={resetPlayed} style={{background:"none",border:"none",color:"var(--tx3)",fontSize:12,cursor:"pointer",fontFamily:FB,textDecoration:"underline"}}>
              Remettre à zéro ({playedCount} thèmes vus)
            </button>
          </div>
        )}
      </div>
    </div>
  )

  if (["gage","boost","theme","question"].includes(step) && ct) return (
    <div style={sP}>
      <style>{globalCSS}</style>
      <div style={sC}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 0 6px"}}>
          <span style={{fontSize:11,fontWeight:600,color:"var(--tx3)",letterSpacing:".08em"}}>TOUR {turn+1}</span>
          <div style={{display:"flex",alignItems:"center",gap:7}}>
            <div style={{width:18,height:18,borderRadius:5,background:ct.pal.bg}}/>
            <span style={{fontSize:14,fontWeight:700,color:ct.pal.bg}}>{ct.name}</span>
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
                <span style={{fontSize:24,fontWeight:900,fontFamily:FH,color:ct.pal.bg,animation:"pop .4s ease both"}}>{level}</span>
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
                    <button key={i} onClick={() => selOpt(i)} style={{padding:"14px 16px",borderRadius:13,border:"1.5px solid "+bd,background:bg,color:cl,fontSize:15,fontWeight:done && isOk ? 700 : 500,textAlign:"left",cursor:done?"default":"pointer",fontFamily:FB,transition:"all .2s",display:"flex",alignItems:"center",gap:10}}>
                      <span style={{width:26,height:26,borderRadius:8,border:"1.5px solid "+bd,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0,background:ib,color:ic}}>{it}</span>
                      {opt}
                    </button>
                  )
                })}
                {picked !== null && (
                  <div style={{marginTop:8}}>
                    <button onClick={() => advance(mcqOk)} style={mb(true, { background: mcqOk ? "#1E8449" : "#C0392B" })}>
                      {mcqOk ? `Correct ! +${pOk} case${pOk > 1 ? "s" : ""} →` : (pFail > 0 ? `Raté +${pFail} →` : "Raté → suivant")}
                    </button>
                  </div>
                )}
              </div>
            )}

            {cq.t === "o" && (
              <div style={{marginTop:16}}>
                {!showA && (
                  <div>
                    <input type="text" placeholder="Votre réponse…" value={userA} onChange={e => setUserA(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && userA.trim()) setShowA(true) }} style={{width:"100%",padding:"14px 16px",borderRadius:12,border:"1px solid var(--bd)",background:"var(--sf)",fontSize:16,fontFamily:FB,outline:"none",color:"var(--tx)",marginBottom:10}}/>
                    <button onClick={() => setShowA(true)} disabled={!userA.trim()} style={mb(!!userA.trim(), { opacity: userA.trim() ? 1 : 0.4 })}>Valider</button>
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
                    <div style={{background:"#EAFAF1",border:"1px solid #D5F5E3",borderRadius:14,padding:"16px 18px",marginBottom:16}}>
                      <div style={{fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:".12em",color:"#1E8449",marginBottom:5}}>Réponse attendue</div>
                      <p style={{fontFamily:FH,fontWeight:700,fontSize:17,lineHeight:1.4,color:"#145A32"}}>{cq.a}</p>
                    </div>
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

        <div style={{height:32}}/>
      </div>
    </div>
  )

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
            <p style={{marginTop:10,fontSize:12,color:"var(--tx3)",animation:"fi .5s .5s ease both",opacity:0}}>{playedCount}/{themes.length} thèmes joués au total</p>
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
          <div style={{display:"flex",gap:10,paddingBottom:40}}>
            <button onClick={() => { setTeams(p => p.map(t => ({ name: t.name, pos: 0, pal: t.pal }))); startGame() }} style={mb(true, { flex: 1 })}>Rejouer</button>
            <button onClick={() => { setTeams(p => p.map(t => ({ name: t.name, pos: 0, pal: t.pal }))); setStep("home") }} style={mb(false, { flex: 1 })}>Accueil</button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
