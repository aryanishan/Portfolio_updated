import { ArrowLeft, ExternalLink, SquareKanban } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell.jsx'
import { projects } from '../data/portfolio.js'

function ProjectDetailPage() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  if (!project) {
    return (
      <PageShell eyebrow="Project" title="Project not found" description="The requested project route does not exist.">
        <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 font-semibold text-white">
          <ArrowLeft size={18} />
          Back to projects
        </Link>
      </PageShell>
    )
  }

  return (
    <PageShell eyebrow="Project Detail" title={project.title} description={project.description}>
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="glass-panel rounded-[30px] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Implementation Notes</p>
          <div className="mt-5 space-y-4 text-muted">
            {project.highlights.map((item) => (
              <p key={item} className="rounded-[20px] border border-surface-border px-4 py-4 leading-7">
                {item}
              </p>
            ))}
          </div>
        </article>

        <article className="glass-panel rounded-[30px] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Stack & Links</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-surface-border px-3 py-2 text-sm font-semibold text-muted">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 font-semibold text-white"
            >
              <SquareKanban size={18} />
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-surface-border px-5 py-3 font-semibold text-text"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          </div>
          <Link to="/projects" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </article>
      </section>
    </PageShell>
  )
}

export default ProjectDetailPage
