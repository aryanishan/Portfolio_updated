import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 24, mass: 0.2 })
  const MotionDiv = motion.div

  return (
    <MotionDiv
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-primary"
    />
  )
}

export default ScrollProgress
