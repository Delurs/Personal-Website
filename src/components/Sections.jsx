import { Reveal, SectionHeading, Sparkle } from './ui'
import { processSteps, designTools, techStack, softSkills } from '../data'

/* ---------- 2. QUOTE ---------- */
export function Quote() {
  return (
    <section className="relative overflow-hidden py-32">
      <Sparkle className="absolute left-[8%] top-24 w-8" />
      <Sparkle className="absolute right-[8%] top-40 w-6 animate-pulse" color="#A78BFA" />
      
      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="font-display text-8xl leading-none text-primary">“</span>
        <blockquote className="mt-4 text-2xl font-medium leading-relaxed text-ink md:text-[2rem]">
          Simple can be harder than complex: You have to work hard to get your
          thinking clean to make it simple. But it&apos;s worth it in the end because
          once you get there, you can{' '}
          <span className="font-semibold text-primary">move mountains</span>.
        </blockquote>
        <p className="mt-8 font-hand text-2xl text-mist">— Steve Jobs</p>
      </Reveal>
    </section>
  )
}

/* ---------- 3. MY PROCESS ---------- */
export function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          tag="My Process"
          title="MY "
          highlight="PROCESS"
          sub="A simple, focused process to turn ideas into meaningful digital experiences."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="h-full">
              <div className="group h-full rounded-3xl border border-white bg-white/80 p-8 shadow-card backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold ${s.tint}`}>
                  {s.n}
                </span>
                <div className={`mt-8 flex h-32 items-center justify-center rounded-2xl ${s.tint.split(' ')[0]} opacity-90 transition group-hover:scale-[1.03]`}>
                  <s.icon className="h-12 w-12" strokeWidth={1.5} />
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-mist">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 4. DESIGN TOOLS ---------- */
function ToolMark({ mark }) {
  switch (mark) {
    case 'figma':
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
          <path d="M8 2h4v6H8a3 3 0 1 1 0-6Z" />
          <circle cx="15" cy="5" r="3" fill="#FF7237" />
          <circle cx="8" cy="12" r="3" />
          <circle cx="15" cy="12" r="3" fill="#19BCFE" />
          <path d="M8 14h4v6a3 3 0 1 1-4-6Z" fill="#0ACF83" />
        </svg>
      )
    case 'canva':
      return <span className="font-hand text-2xl font-bold">Ca</span>
    case 'sparkle':
      return <Sparkle className="h-7 w-7" color="#fff" />
    case 'triangle':
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3 21 20H3L12 3Z" />
          <path d="M12 9.5 16.5 18h-9L12 9.5Z" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'capcut':
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
          <rect x="3" y="6" width="14" height="12" rx="3" transform="rotate(-8 3 6)" />
          <rect x="9" y="6" width="14" height="12" rx="3" fill="#666" transform="rotate(8 9 6)" />
        </svg>
      )
    case 'asterisk':
      return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
        </svg>
      )
    default:
      return null
  }
}

export function DesignTools() {
  return (
    <section id="tools" className="relative overflow-hidden py-28">
      <p className="absolute left-[6%] top-24 hidden rotate-[-6deg] font-hand text-xl text-mist lg:block">
        Create → Design<br />Iterate → Repeat ♡
      </p>
      <p className="absolute right-[5%] top-20 hidden rotate-[6deg] font-hand text-xl text-ink lg:block">
        Good Design =<br />Better Experiences 😊
      </p>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="✦ Design Tools"
          title="DESIGN "
          highlight="TOOLS"
          sub="Tools I use to bring ideas to life, create beautiful interfaces, and build meaningful experiences."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {designTools.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className={`group flex items-center gap-5 rounded-full border border-white/70 ${t.pill} px-6 py-5 shadow-soft backdrop-blur transition hover:-translate-y-1.5 hover:shadow-card`}>
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${t.badge} shadow-inner`}>
                  <ToolMark mark={t.mark} />
                </span>
                <span className="h-10 w-px bg-ink/10" />
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{t.name}</h3>
                  <p className="text-sm text-mist">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 5. TECH STACK ---------- */
export function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden py-28">
      <p className="absolute bottom-16 left-[6%] hidden rotate-[-6deg] font-hand text-xl text-mist lg:block">
        Build → Create<br />Improve → Repeat ♡
      </p>
      <p className="absolute right-[5%] top-20 hidden rotate-[6deg] font-hand text-xl text-ink lg:block">
        Clean Code +<br />Better Solutions 😊
      </p>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="</> Tech Stack"
          title="TECH "
          highlight="STACK"
          sub="Modern tools and technologies I use to build responsive, scalable, and user-friendly applications."
        />
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {techStack.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06} className="flex flex-col items-center">
              <div className={`flex h-28 w-28 items-center justify-center rounded-full border border-white/80 ${t.tint} shadow-soft transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-card`}>
                <img src={t.src} alt={t.name} loading="lazy" className="h-12 w-12" />
              </div>
              <span className="mt-4 rounded-full bg-white/80 px-5 py-1.5 font-display text-sm font-semibold text-ink shadow-soft">
                {t.name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 6. SOFT SKILLS ---------- */
export function SoftSkills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="♡ Soft Skills"
          title="BEYOND THE "
          highlight="PIXELS"
          sub="Design and code get the job done — these make the journey enjoyable for everyone involved."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07} className="h-full">
              <div className={`h-full rounded-3xl border border-white/80 ${s.tint} p-7 shadow-soft transition hover:-translate-y-1.5 hover:shadow-card`}>
                <s.icon className="h-8 w-8 text-ink" strokeWidth={1.8} />
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}