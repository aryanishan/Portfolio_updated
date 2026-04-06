import OrbitImages from '../components/OrbitImages.jsx'
import PageShell from '../components/PageShell.jsx'
import { quickFacts, skillConstellations, skillGroups } from '../data/portfolio.js'

function SkillTile({ item }) {
  const hasImage = Boolean(item.image)

  return (
    <div className="flex w-36 flex-col items-center gap-3">
      <div className="grid h-24 w-24 place-items-center rounded-[24px] border border-primary/30 bg-bg-elevated shadow-[0_14px_30px_rgba(0,0,0,0.16)]">
        {hasImage ? (
          <img src={item.image} alt={item.name} className="h-14 w-14 object-contain" loading="lazy" />
        ) : (
          <div className="grid h-14 w-14 place-items-center rounded-[16px] border border-primary/40 bg-primary text-[0.95rem] font-extrabold tracking-[0.12em] text-black shadow-[0_8px_18px_rgba(201,162,39,0.28)]">
            {item.badge}
          </div>
        )}
      </div>
      <span className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted">{item.name}</span>
    </div>
  )
}

function SkillBoard({ title, eyebrow, items, icon: Icon }) {
  return (
    <article className="glass-panel rounded-[30px] p-7">
      <div className="flex items-center gap-3">
        {Icon ? <Icon className="h-10 w-10 text-primary" /> : null}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
          <h2 className="mt-1 font-display text-2xl font-bold text-text">{title}</h2>
        </div>
      </div>

      <div className="relative mt-7 overflow-hidden rounded-[28px] border border-primary/20 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--primary)_7%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--primary)_7%,transparent)_1px,transparent_1px),color-mix(in_srgb,var(--bg)_94%,black_6%)] bg-[length:44px_44px,44px_44px,auto] px-3 py-4 sm:px-5 lg:px-8">
        <OrbitImages
          items={items}
          shape="ellipse"
          baseWidth={1600}
          baseHeight={520}
          radiusX={500}
          radiusY={132}
          rotation={-6}
          duration={28}
          itemSize={152}
          responsive
          direction="normal"
          fill
          showPath
          pathColor="rgba(201,162,39,0.26)"
          className="mx-auto"
          centerContent={
            <div className="pointer-events-none rounded-[24px] border border-primary/30 bg-bg-elevated/95 px-7 py-5 text-center shadow-[0_14px_30px_rgba(0,0,0,0.16)]">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Skill Set</span>
              <span className="mt-2 block font-display text-2xl font-bold text-text">{title}</span>
            </div>
          }
          renderItem={(item) => <SkillTile item={item} />}
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item.name} className="rounded-full border border-surface-border bg-bg px-3 py-1.5 text-xs font-semibold text-muted">
            {item.name}
          </span>
        ))}
      </div>
    </article>
  )
}

function SkillsPage() {
  return (
    <PageShell
      eyebrow="Skills"
      title="A practical stack for modern interfaces, scalable APIs, and reliable data layers."
      description="These are the technologies and core concepts I lean on most often when designing, building, and shipping software."
    >
      <section className="grid gap-6">
        {skillGroups.map((group, index) => (
          <div key={group.title} data-aos="fade-up" data-aos-delay={index * 90}>
            <SkillBoard title={group.title} eyebrow={group.boardLabel} items={group.skills} icon={group.icon} />
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6">
        {skillConstellations.map((group, index) => (
          <div key={group.title} data-aos="fade-up" data-aos-delay={index * 90}>
            <SkillBoard title={group.title} eyebrow={group.eyebrow} items={group.items} />
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
