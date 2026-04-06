import { motion } from 'framer-motion'

function PageShell({ eyebrow, title, description, children }) {
  const MotionMain = motion.main

  return (
    <MotionMain
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
      className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-14 pt-12 sm:px-6 lg:px-10"
    >
      <section className="section-grid relative overflow-hidden rounded-[36px] border border-surface-border/70 bg-bg-soft px-6 py-10 sm:px-10">
        <div className="absolute inset-0 bg-primary/6" />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-text sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">{description}</p>
        </div>
      </section>
      <div className="mt-10">{children}</div>
    </MotionMain>
  )
}

export default PageShell
