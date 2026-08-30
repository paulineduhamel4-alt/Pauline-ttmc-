// ============ Multi-appareil via PeerJS ============
import Peer from "peerjs"

function randomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  let s = ""
  for (let i = 0; i < 4; i++) s += chars[Math.floor(Math.random() * chars.length)]
  return s
}

export function createHost({ onMessage, onOpen, onClose, onError, roomCode }) {
  const code = roomCode || randomCode()
  const peer = new Peer("rami-" + code, {
    config: {
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: "stun:global.stun.twilio.com:3478" },
      ]
    }
  })
  const conns = new Map() // clientId -> conn
  peer.on("open", id => onOpen && onOpen(code, id))
  peer.on("error", err => {
    if (err.type === "unavailable-id") {
      // ID pris, régénère
      peer.destroy()
      createHost({ onMessage, onOpen, onClose, onError })
      return
    }
    onError && onError(err)
  })
  peer.on("connection", conn => {
    conn.on("open", () => {
      conns.set(conn.peer, conn)
      conn.on("data", data => onMessage && onMessage(conn.peer, data, conn))
      conn.on("close", () => { conns.delete(conn.peer); onClose && onClose(conn.peer) })
    })
  })
  return {
    peer,
    code,
    broadcast(msg) { for (const c of conns.values()) c.send(msg) },
    sendTo(clientId, msg) { const c = conns.get(clientId); if (c) c.send(msg) },
    getClients() { return Array.from(conns.keys()) },
    destroy() { peer.destroy() },
  }
}

export function createClient({ code, onMessage, onOpen, onClose, onError }) {
  const peer = new Peer({
    config: {
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: "stun:global.stun.twilio.com:3478" },
      ]
    }
  })
  let conn = null
  peer.on("open", () => {
    conn = peer.connect("rami-" + code, { reliable: true })
    conn.on("open", () => onOpen && onOpen())
    conn.on("data", data => onMessage && onMessage(data))
    conn.on("close", () => onClose && onClose())
    conn.on("error", err => onError && onError(err))
  })
  peer.on("error", err => onError && onError(err))
  return {
    peer,
    send(msg) { if (conn && conn.open) conn.send(msg) },
    destroy() { peer.destroy() },
  }
}
