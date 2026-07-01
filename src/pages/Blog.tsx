import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/Animations'
import './Blog.css'

interface Post {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

const posts: Post[] = [
  {
    title: 'Getting Started with React and Vite',
    excerpt: 'Learn how to set up a modern React project using Vite, the next-generation build tool.',
    date: 'Jun 15, 2026',
    readTime: '5 min read',
    tags: ['React', 'Vite'],
  },
  {
    title: 'Understanding CSS Grid Layout',
    excerpt: 'A comprehensive guide to CSS Grid, from basic concepts to advanced layouts.',
    date: 'May 28, 2026',
    readTime: '7 min read',
    tags: ['CSS', 'Frontend'],
  },
  {
    title: 'Building REST APIs with Node.js',
    excerpt: 'Step-by-step tutorial on creating robust and scalable RESTful APIs using Express.',
    date: 'May 10, 2026',
    readTime: '8 min read',
    tags: ['Node.js', 'API'],
  },
  {
    title: 'Introduction to TypeScript',
    excerpt: 'Why TypeScript matters and how to get started with it in your projects.',
    date: 'Apr 22, 2026',
    readTime: '6 min read',
    tags: ['TypeScript', 'JavaScript'],
  },
]

function Blog() {
  return (
    <AnimatedSection className="blog-page">
      <SEO title="Blog" desc="Blog posts about web development, React, Node.js and more." path="/blog" />
      <div className="container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Blog
        </motion.h1>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Thoughts, tutorials, and notes
        </motion.p>
        <StaggerContainer className="blog-grid">
          {posts.map(p => (
            <StaggerItem key={p.title} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <article className="card blog-card">
                <div className="blog-meta">
                  <span>{p.date}</span>
                  <span>{p.readTime}</span>
                </div>
                <h3 className="blog-title">{p.title}</h3>
                <p className="blog-excerpt">{p.excerpt}</p>
                <div className="blog-tags">
                  {p.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
                </div>
                <motion.a
                  href="#"
                  className="blog-readmore"
                  whileHover={{ x: 5 }}
                >
                  Read more →
                </motion.a>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}

export default Blog
