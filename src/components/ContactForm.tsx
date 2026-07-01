import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/yourformid'

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) setSent(true)
    } catch {
      alert('Gagal mengirim. Coba lagi.')
    }
    setLoading(false)
  }

  if (sent) return <p className="form-success">Pesan berhasil dikirim! ✅</p>

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Your name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="your@email.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" placeholder="Subject" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows={5} placeholder="Your message..." required></textarea>
      </div>
      <motion.button
        type="submit"
        className="btn btn-primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </motion.button>
    </form>
  )
}

export default ContactForm
