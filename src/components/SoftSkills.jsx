import { Reveal, SectionHeading } from './ui'
import { softSkills } from '../data'

export default function SoftSkills() {
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