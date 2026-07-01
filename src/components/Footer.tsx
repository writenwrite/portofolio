import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>Novan Portfolio</h3>
          <p>Built with React & Vite.</p>
        </div>
        <div className="footer-col">
          <h4>Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div className="footer-col">
          <h4>More</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/cv">CV</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Social</h4>
          <a href="https://github.com/pengadaanbrs2" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Novan. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
