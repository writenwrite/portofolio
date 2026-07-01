import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/Animations'
import { useGitHubRepos, type Repo } from '../hooks/useGitHubRepos'
import './Projects.css'

const fallbackProjects: Repo[] = [
  { title: 'Project Alpha', desc: 'A full-stack web application for task management.', tags: ['React', 'Node.js', 'MongoDB'], demo: '#', code: '#', stars: 0, forks: 0 },
  { title: 'Project Beta', desc: 'An e-commerce platform with payment integration.', tags: ['Next.js', 'Stripe', 'PostgreSQL'], demo: '#', code: '#', stars: 0, forks: 0 },
  { title: 'Project Gamma', desc: 'Weather dashboard with interactive charts.', tags: ['Vue', 'Chart.js', 'Tailwind'], demo: '#', code: '#', stars: 0, forks: 0 },
  { title: 'Project Delta', desc: 'CLI tool for project scaffolding.', tags: ['Python', 'Docker', 'GitHub Actions'], demo: '#', code: '#', stars: 0, forks: 0 },
]

function Projects() {
  const { repos, loading, error } = useGitHubRepos()

  return (
    <AnimatedSection className="projects-page">
      <SEO title="Projects" desc="Projects built by Novan - web apps, tools, and open source." path="/projects" />
      <div className="container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {loading ? 'Loading from GitHub...' : error ? 'Showing sample projects' : 'My GitHub repositories'}
        </motion.p>

        {loading ? (
          <div className="loading-grid">
            {[1,2,3,4].map(i => <div key={i} className="card skeleton" />)}
          </div>
        ) : (
          <StaggerContainer className="projects-grid">
            {(error ? fallbackProjects : repos).map(p => (
              <StaggerItem key={p.title} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <div className="card project-card">
                  <div className="project-header">
                    <span className="project-folder">📁</span>
                    <div className="project-links">
                      {p.demo !== '#' && <a href={p.demo} target="_blank" rel="noopener noreferrer" title="Live demo">🔗</a>}
                      <a href={p.code} target="_blank" rel="noopener noreferrer" title="Source code">💻</a>
                    </div>
                  </div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-meta">
                    <span>⭐ {p.stars}</span>
                    <span>⑂ {p.forks}</span>
                  </div>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </AnimatedSection>
  )
}

export default Projects
