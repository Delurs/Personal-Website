import { Reveal, Sparkle, SectionHeading } from './ui'
import { designTools } from '../data'

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

export default function DesignTools() {
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