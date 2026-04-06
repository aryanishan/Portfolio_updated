import { motion } from 'framer-motion'
import { ArrowRight, Download, ExternalLink, Link2, Mail, SquareKanban } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import { capabilityCards, heroStats, personalInfo, projects } from '../data/portfolio.js'

function HomePage() {
  const MotionParagraph = motion.p
  const MotionHeading = motion.h2
  const MotionDiv = motion.div
  const MotionArticle = motion.article

  return (
    <PageShell
      eyebrow="Portfolio"
      title="Full-stack developer crafting performant products with modern web tooling."
      description={personalInfo.shortIntro}
    >
      <section className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="glass-panel rounded-[32px] p-8 sm:p-10">
          <MotionParagraph
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-accent"
          >
            Hello, I am
          </MotionParagraph>
          <MotionHeading
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-4 font-display text-5xl font-bold tracking-tight text-text sm:text-6xl"
          >
            {personalInfo.name}
          </MotionHeading>
          <MotionParagraph
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-3 text-2xl font-semibold text-gradient"
          >
            {personalInfo.role}
          </MotionParagraph>
          <MotionParagraph
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
          >
            {personalInfo.tagline}
          </MotionParagraph>

          <MotionDiv
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-black shadow-lg shadow-primary/25 transition hover:scale-[1.02]"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="glass-panel inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-text transition hover:scale-[1.02]"
            >
              Contact Me
            </Link>
            <a
              href={personalInfo.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-surface-border px-6 py-3 font-semibold text-text transition hover:border-primary hover:text-primary"
            >
              <Download size={18} />
              Download Resume
            </a>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3 text-sm text-muted"
          >
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 hover:text-primary">
              <SquareKanban size={16} />
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 hover:text-primary">
              <Link2 size={16} />
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 hover:text-primary">
              <Mail size={16} />
              Email
            </a>
          </MotionDiv>
        </div>

        <div className="space-y-6">
          {heroStats.map((stat, index) => (
            <MotionDiv
              key={stat.label}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * index }}
              className="glass-panel rounded-[28px] p-6"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-muted">{stat.label}</p>
              <p className="mt-3 font-display text-3xl font-bold text-text">{stat.value}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {capabilityCards.map((card, index) => (
          <MotionArticle
            key={card.title}
            data-aos="fade-up"
            data-aos-delay={index * 80}
            whileHover={{ y: -6 }}
            className="glass-panel rounded-[28px] p-6"
          >
            <card.icon className="h-10 w-10 text-primary" />
            <h3 className="mt-5 font-display text-2xl font-bold text-text">{card.title}</h3>
            <p className="mt-3 leading-7 text-muted">{card.description}</p>
          </MotionArticle>
        ))}
      </section>

      <section className="mt-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Featured Work</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-text">Projects with practical engineering focus</h3>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Explore all
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <MotionArticle
                whileHover={{ y: -8 }}
                className="project-card glass-panel h-full rounded-[30px] p-6 transition"
              >
                <div className="rounded-[22px] border border-primary/40 bg-primary/8 p-[1px]">
                  <div className="rounded-[21px] bg-bg px-4 py-3 text-sm font-semibold text-muted">{project.period}</div>
                </div>
                <h4 className="mt-5 font-display text-2xl font-bold text-text">{project.title}</h4>
                <p className="mt-3 leading-7 text-muted">{project.description}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                  View details
                  <ExternalLink size={16} />
                </div>
              </MotionArticle>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

export default HomePage
