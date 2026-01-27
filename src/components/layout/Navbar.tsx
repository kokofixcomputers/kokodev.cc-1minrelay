import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Monitor } from 'lucide-react'

type Theme = 'light' | 'dark' | 'system'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme || 'system'
    setTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (newTheme: Theme) => {
    if (newTheme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      document.documentElement.classList.toggle('dark', systemDark)
    } else {
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
  }

  const toggleTheme = () => {
    const themes: Theme[] = ['system', 'light', 'dark']
    const currentIndex = themes.indexOf(theme)
    const nextTheme = themes[(currentIndex + 1) % themes.length]
    
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    applyTheme(nextTheme)
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <Sun className="w-5 h-5" />
      case 'dark': return <Moon className="w-5 h-5" />
      case 'system': return <Monitor className="w-5 h-5" />
    }
  }

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={isScrolled ? 'navbar-float' : 'sticky top-0 z-50'}
      >
        <div className="container flex items-center justify-between h-16">
          <span className="font-semibold">1min Relay</span>

          <nav className="hidden md:flex gap-8 text-sm text-[rgb(var(--muted))]">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#clients">Clients</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label={`Current theme: ${theme}. Click to cycle themes`}
              title={`Theme: ${theme}`}
            >
              {getThemeIcon()}
            </button>
            <a 
              href="https://github.com/kokofixcomputers/1min-relay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              GitHub →
            </a>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}
