import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/Animations'
import './CV.css'

interface ExperienceItem {
  role: string
  company: string
  period: string
  desc: string
}

interface EducationItem {
  degree: string
  school: string
  period: string
}

const experience: ExperienceItem[] = [
  { role: 'Senior Developer', company: 'Tech Corp', period: '2024 - Present', desc: 'Leading frontend architecture and mentoring junior developers.' },
  { role: 'Full-Stack Developer', company: 'StartUp Inc', period: '2022 - 2024', desc: 'Built and maintained multiple client-facing web applications.' },
  { role: 'Junior Developer', company: 'Web Agency', period: '2020 - 2022', desc: 'Developed responsive websites and contributed to internal tools.' },
]

const education: EducationItem[] = [
  { degree: 'B.Sc. Computer Science', school: 'University Name', period: '2016 - 2020' },
]

function CV() {
  return (
    <AnimatedSection className="cv-page">
      <SEO title="CV" desc="Curriculum Vitae - experience, education, and skills." path="/cv" />
      <div className="container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Curriculum Vitae
        </motion.h1>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          My professional journey
        </motion.p>

        <motion.div
          className="cv-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="cv-section-title">Experience</h2>
          <StaggerContainer>
            {experience.map(e => (
              <StaggerItem key={e.role} whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
                <div className="cv-item card">
                  <div className="cv-item-header">
                    <h3>{e.role}</h3>
                    <span className="cv-period">{e.period}</span>
                  </div>
                  <p className="cv-company">{e.company}</p>
                  <p className="cv-desc">{e.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>

        <motion.div
          className="cv-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="cv-section-title">Education</h2>
          <StaggerContainer>
            {education.map(e => (
              <StaggerItem key={e.degree} whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
                <div className="cv-item card">
                  <div className="cv-item-header">
                    <h3>{e.degree}</h3>
                    <span className="cv-period">{e.period}</span>
                  </div>
                  <p className="cv-company">{e.school}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>

        <motion.div
          className="cv-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="cv-section-title">Download</h2>
          <p>Download my full CV as PDF:</p>
          <motion.a
            href="#"
            className="btn btn-primary"
            style={{ marginTop: 12, display: 'inline-block' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default CV
