import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import customLogo from './assets/logo.png' 

import Hero from './components/Hero'
import Quote from './components/Quote'
import Process from './components/Process'
import DesignTools from './components/DesignTools'
import TechStack from './components/TechStack'
import SoftSkills from './components/SoftSkills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 shadow-soft backdrop-blur-lg' : ''}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <img src={customLogo} alt="Justine Deluria Logo" className="h-8 w-auto object-contain" />
          <span className="font-display text-sm font-extrabold tracking-[0.2em] text-ink">
            JUSTINE DELURIA
          </span>
        </a>
        <div className="hidden items-center gap-10 text-sm font-semibold text-ink/80 md:flex">
          <a href="#projects" className="transition hover:text-primary">Projects</a>
          <a href="#about" className="transition hover:text-primary">About</a>
          <a href="#contact" className="transition hover:text-primary">Contact</a>
        </div>
        <span className="hidden items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-mist shadow-soft backdrop-blur sm:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for opportunities
        </span>
      </div>
    </nav>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  return (
    <div className="bg-sky min-h-screen">
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-primary"
        style={{ scaleX: scrollYProgress }}
      />
      <Nav />
      <main>
        <Hero />
        <Quote />
        <Process />
        <DesignTools />
        <TechStack />
        <SoftSkills />
        <Projects />
        <About />
      </main>
      <Contact />
    </div>
  )
}