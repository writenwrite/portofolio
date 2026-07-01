import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './AIAssistant.css'

const SYSTEM_PROMPT = `You are a helpful assistant for Novan Y's portfolio website. Answer questions about Novan based on this data:

Name: Novan Y
Role: Newbie in Developer
Bio: A beginner in the world of development, learning new things every day. Believes knowledge returns to human civilization — making things easier, not complicated, and accessible to everyone.
Skills: HTML, CSS, JavaScript, React, Tailwind CSS, Git
Experience: Front-End Developer for a Baby Shop E-Commerce website
Education: S1 Teknik Informatika, semester 5
Location: Indonesia
Email: pengadaanbrs2@gmail.com
GitHub: github.com/pengadaanbrs2

Keep answers short, friendly, and in English. If asked something not in this data, say you don't know.`

interface Message {
  role: 'user' | 'assistant'
  text: string
}

function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hi! I'm Novan's AI assistant. Ask me anything about him!" },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function handleSend() {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setLoading(true)

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `${SYSTEM_PROMPT}\n\nUser: ${userMsg}\nAssistant:`
              }]
            }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 200 },
          }),
        }
      )
      const data = await res.json()
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not process that.'
      setMessages(prev => [...prev, { role: 'assistant', text: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: 'Oops! Something went wrong. Make sure the API key is set.' }])
    }
    setLoading(false)
  }

  return (
    <>
      <motion.button
        className="ai-fab"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="AI Assistant"
      >
        🤖
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="ai-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="ai-header">
              <span>🤖 AI Assistant</span>
              <button className="ai-close" onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="ai-body">
              {messages.map((m, i) => (
                <div key={i} className={`ai-msg ${m.role}`}>
                  {m.text}
                </div>
              ))}
              {loading && <div className="ai-msg assistant typing">Thinking...</div>}
              <div ref={bottomRef} />
            </div>
            <div className="ai-footer">
              <input
                className="ai-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Novan..."
                disabled={loading}
              />
              <button className="ai-send" onClick={handleSend} disabled={loading || !input.trim()}>
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIAssistant
