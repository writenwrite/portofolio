import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found">
      <SEO title="404 - Page Not Found" desc="Halaman tidak ditemukan." />
      <div className="container not-found-content">
        <motion.h1
          className="not-found-code"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.p
          className="not-found-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Halaman tidak ditemukan
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </motion.div>
      </div>
    </section>
  )
}

export default NotFound
