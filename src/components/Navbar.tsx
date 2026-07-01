import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import DarkModeToggle from './DarkModeToggle'
import './Navbar.css'

interface LinkItem {
  to: string
  label: string
}

const links: LinkItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/cv', label: 'CV' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">Novan</Link>
        <div className="nav-right">
          <ul className={`nav-links ${open ? 'active' : ''}`}>
            {links.map(l => (
              <li key={l.to} className="nav-li">
                <NavLink
                  to={l.to}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={() => setOpen(false)}
                  end={l.to === '/'}
                >
                  {l.label}
                  {pathname === l.to && (
                    <motion.div
                      className="nav-indicator"
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <DarkModeToggle />
          <button
            className={`hamburger ${open ? 'active' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
