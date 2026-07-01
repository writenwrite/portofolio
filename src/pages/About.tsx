import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/Animations'
import './About.css'

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git']

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
              I'm a beginner in the world of development, trying to learn new knowledge
              by becoming a developer. I believe all knowledge returns to human civilization —
              where it makes things easier, does not complicate, and can be accessed by anyone.
            </p>
            <p>
              Currently studying S1 Informatics Engineering in my 5th semester,
              and exploring modern web technologies along the way.
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
              <span>👤</span>
              <p>Photo (optional)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default About
