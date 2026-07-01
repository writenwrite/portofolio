import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CustomCursor from './CustomCursor'
import Background from './Background'
import ScrollProgress from './ScrollProgress'
import BackToTop from './BackToTop'
import AIAssistant from './AIAssistant'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Background />
      <div className="bg-grid" />
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <AIAssistant />
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
