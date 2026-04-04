import PageShell from '../components/PageShell.jsx'
import { quickFacts, skillGroups } from '../data/portfolio.js'

function SkillsPage() {
  return (
    <PageShell
      eyebrow="Skills"
      title="A practical stack for modern interfaces, scalable APIs, and reliable data layers."
      description="These are the technologies and core concepts I lean on most often when designing, building, and shipping software."
    >
      <section className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <article key={group.title} data-aos="fade-up" data-aos-delay={index * 90} className="glass-panel rounded-[30px] p-7">
            <group.icon className="h-10 w-10 text-primary" />
            <h2 className="mt-5 font-display text-2xl font-bold text-text">{group.title}</h2>
            <div className="mt-6 space-y-5">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm font-semibold text-muted">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-200/70 dark:bg-slate-800/80">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-primary via-highlight to-accent"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {quickFacts.map((fact, index) => (
          <article key={fact.label} data-aos="zoom-in" data-aos-delay={index * 90} className="glass-panel rounded-[28px] p-6">
            <fact.icon className="h-10 w-10 text-accent" />
            <h3 className="mt-5 font-display text-xl font-bold text-text">{fact.label}</h3>
            <p className="mt-3 leading-7 text-muted">{fact.text}</p>
          </article>
        ))}
      </section>
    </PageShell>
  )
}

export default SkillsPage
