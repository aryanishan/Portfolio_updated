import { motion } from 'framer-motion'
import { MoonStar, SunMedium } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const MotionButton = motion.button

  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      type="button"
      onClick={toggleTheme}
      className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-text transition hover:text-primary"
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
    </MotionButton>
  )
}

export default ThemeToggle
