import { Reveal, SectionHeading } from './ui'
import { techStack } from '../data'

export default function TechStack() {
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