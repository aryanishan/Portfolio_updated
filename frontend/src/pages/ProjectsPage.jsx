import { motion } from 'framer-motion'
import { ExternalLink, SquareKanban } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import { personalInfo, projects } from '../data/portfolio.js'

function ProjectsPage() {
  const [repos, setRepos] = useState([])
  const [repoError, setRepoError] = useState('')
  const MotionArticle = motion.article

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/aryanishan/repos?sort=updated&per_page=4')

        if (!response.ok) {
          throw new Error('Unable to fetch GitHub repositories.')
        }

        const data = await response.json()
        setRepos(data)
      } catch (error) {
        setRepoError(error.message)
      }
    }

    fetchRepos()
  }, [])

  return (
    <PageShell
      eyebrow="Projects"
      title="Selected builds spanning full-stack apps, matching systems, and applied machine learning."
      description="Every project below has its own route so recruiters can dive deeper into implementation details, stack choices, and outcomes."
    >
      <section className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <MotionArticle
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 90}
            whileHover={{ y: -8 }}
            className="project-card glass-panel rounded-[30px] p-6 transition"
          >
            <div className={`rounded-[22px] bg-gradient-to-r ${project.gradient} p-[1px]`}>
              <div className="rounded-[21px] bg-bg px-4 py-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">{project.period}</p>
              </div>
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold text-text">{project.title}</h2>
            <p className="mt-3 leading-7 text-muted">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-surface-border px-3 py-1 text-xs font-semibold text-muted">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white"
              >
                Details
              </Link>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-surface-border px-4 py-2 text-sm font-semibold text-text"
              >
                <SquareKanban size={16} />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-surface-border px-4 py-2 text-sm font-semibold text-text"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </MotionArticle>
        ))}
      </section>

      <section className="mt-10 glass-panel rounded-[30px] p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">GitHub Integration</p>
        <h3 className="mt-3 font-display text-3xl font-bold text-text">
          Latest repositories from {personalInfo.github.replace('https://', '')}
        </h3>
        {repoError ? <p className="mt-4 text-sm text-rose-500">{repoError}</p> : null}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="rounded-[24px] border border-surface-border p-5 transition hover:border-primary"
            >
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-display text-xl font-bold text-text">{repo.name}</h4>
                <ExternalLink size={16} className="text-primary" />
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">
                {repo.description || 'Public repository from Aryan Gupta GitHub profile.'}
              </p>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

export default ProjectsPage
