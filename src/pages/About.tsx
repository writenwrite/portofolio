import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/Animations'
import './About.css'

const skills = ['JavaScript/TypeScript', 'React/Next.js', 'Node.js', 'Python', 'Tailwind CSS', 'Docker', 'PostgreSQL', 'Git', 'REST APIs', 'GraphQL']

function About() {
  return (
    <AnimatedSection className="about-page">
      <SEO title="About" desc="About Novan - skills, experience, and background." path="/about" />
      <div className="container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          A little bit about myself
        </motion.p>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Hello! I'm a passionate developer with experience building web applications.
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, writing technical
              blog posts, or contributing to open-source projects.
            </p>
            <h3>Skills & Technologies</h3>
            <StaggerContainer className="skills-list">
              {skills.map(s => (
                <StaggerItem key={s}>
                  <span className="skill-tag">{s}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="about-placeholder">
              <span>📸</span>
              <p>Your Photo</p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default About
