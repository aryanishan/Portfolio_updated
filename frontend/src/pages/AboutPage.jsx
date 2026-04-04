import PageShell from '../components/PageShell.jsx'
import { aboutSections, achievements, certifications, education, training } from '../data/portfolio.js'

function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Strong fundamentals, practical project work, and a product-first mindset."
      description="This page brings together my academic background, learning path, and the experiences shaping how I build software."
    >
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          {aboutSections.map((section, index) => (
            <article key={section.title} data-aos="fade-up" data-aos-delay={index * 90} className="glass-panel rounded-[30px] p-7">
              <h2 className="font-display text-2xl font-bold text-text">{section.title}</h2>
              <p className="mt-4 leading-8 text-muted">{section.content}</p>
            </article>
          ))}

          <article data-aos="fade-up" className="glass-panel rounded-[30px] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Training</p>
            {training.map((item) => (
              <div key={item.title} className="mt-5 rounded-[24px] border border-surface-border p-5">
                <h3 className="font-display text-xl font-bold text-text">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{item.organization}</p>
                <p className="mt-1 text-sm text-muted">{item.duration}</p>
                <div className="mt-4 space-y-3 text-muted">
                  {item.points.map((point) => (
                    <p key={point} className="leading-7">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </article>
        </div>

        <div className="space-y-6">
          <article data-aos="zoom-in" className="glass-panel rounded-[30px] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Education</p>
            <div className="mt-5 space-y-4">
              {education.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-surface-border p-5">
                  <h3 className="font-display text-lg font-bold text-text">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-primary">{item.institution}</p>
                  <p className="mt-1 text-sm text-muted">{item.duration}</p>
                  <p className="mt-3 text-sm text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article data-aos="fade-up" className="glass-panel rounded-[30px] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Certifications</p>
            <div className="mt-5 space-y-3 text-muted">
              {certifications.map((item) => (
                <p key={item} className="rounded-[20px] border border-surface-border px-4 py-3">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article data-aos="fade-up" className="glass-panel rounded-[30px] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Highlights</p>
            <div className="mt-5 space-y-3 text-muted">
              {achievements.map((item) => (
                <p key={item} className="rounded-[20px] border border-surface-border px-4 py-3">
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  )
}

export default AboutPage
