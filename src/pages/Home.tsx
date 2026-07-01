import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/Animations'
import './Home.css'

const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Open Source Lover']

function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [char, setChar] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[idx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && char < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, char + 1))
        setChar(c => c + 1)
      }, 80)
    } else if (!deleting && char === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && char > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, char - 1))
        setChar(c => c - 1)
      }, 40)
    } else if (deleting && char === 0) {
      setDeleting(false)
      setIdx((idx + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [char, deleting, idx, words])

  return <span>{text}<span className="cursor-blink">|</span></span>
}

function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <>
      <SEO
        title="Home"
        desc="Novan - Full-Stack Developer. Portfolio website with projects, blog, and contact."
        path="/"
      />
      <motion.section className="hero" style={{ y: heroY }}>
        <motion.div className="container hero-content" style={{ opacity: heroOpacity }}>
          <motion.span
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm
          </motion.span>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            Novan
          </motion.h1>
          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Typewriter words={roles} />
          </motion.h2>
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            I build accessible, performant web applications with modern technologies.
            Passionate about clean code and great user experiences.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-shapes"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </motion.div>
      </motion.section>

      <AnimatedSection className="highlights">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technologies & services I work with
          </motion.p>
          <StaggerContainer className="highlights-grid">
            <StaggerItem whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <div className="card highlight-card">
                <span className="highlight-icon">⚛️</span>
                <h3>Frontend</h3>
                <p>React, Next.js, Vue, TypeScript, Tailwind CSS</p>
              </div>
            </StaggerItem>
            <StaggerItem whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <div className="card highlight-card">
                <span className="highlight-icon">⚙️</span>
                <h3>Backend</h3>
                <p>Node.js, Express, Python, PostgreSQL, MongoDB</p>
              </div>
            </StaggerItem>
            <StaggerItem whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <div className="card highlight-card">
                <span className="highlight-icon">☁️</span>
                <h3>DevOps</h3>
                <p>Docker, AWS, CI/CD, Linux, Nginx</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </AnimatedSection>
    </>
  )
}

export default Home
