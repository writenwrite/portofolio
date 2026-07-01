import { motion, type HTMLMotionProps, type Easing } from 'framer-motion'
import type { ReactNode } from 'react'

const ease: Easing = 'easeOut'

export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease },
}

export const stagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: '-50px' },
  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
}

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease },
}

interface SectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode
}

export function AnimatedSection({ children, className, ...props }: SectionProps) {
  return (
    <motion.section className={className} {...fadeUp} {...props}>
      {children}
    </motion.section>
  )
}

interface ContainerProps extends HTMLMotionProps<'div'> {
  children: ReactNode
}

export function StaggerContainer({ children, className, ...props }: ContainerProps) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="initial"
      whileInView="whileInView"
      viewport={stagger.viewport}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, ...props }: ContainerProps) {
  return (
    <motion.div className={className} variants={staggerItem} {...props}>
      {children}
    </motion.div>
  )
}
