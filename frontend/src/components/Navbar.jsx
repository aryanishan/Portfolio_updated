import { motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { personalInfo } from '../data/portfolio.js'
import ThemeToggle from './ThemeToggle.jsx'

const navItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/skills', 'Skills'],
  ['/projects', 'Projects'],
  ['/contact', 'Contact'],
]

function linkClassName({ isActive }) {
  return `rounded-full px-4 py-2 text-sm font-semibold transition ${
    isActive ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'text-muted hover:text-text'
  }`
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const MotionDiv = motion.div

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-[28px] px-4 py-3 sm:px-6">
        <NavLink to="/" className="font-display text-lg font-bold tracking-tight text-text">
          {personalInfo.name}
        </NavLink>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map(([to, label]) => (
            <NavLink key={to} to={to} className={linkClassName}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={personalInfo.resumePath}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:scale-[1.02]"
            download
          >
            <Download size={16} />
            Resume
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="glass-panel flex h-11 w-11 items-center justify-center rounded-full"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <MotionDiv
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel mx-auto mt-3 flex max-w-7xl flex-col gap-3 rounded-[24px] p-4 lg:hidden"
        >
          {navItems.map(([to, label]) => (
            <NavLink key={to} to={to} className={linkClassName} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <a
            href={personalInfo.resumePath}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-white"
            download
          >
            <Download size={16} />
            Resume
          </a>
        </MotionDiv>
      ) : null}
    </header>
  )
}

export default Navbar
