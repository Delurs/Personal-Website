import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X, Briefcase, CalendarDays } from 'lucide-react'
import { Reveal, Sparkle, Tag } from './ui'
import { project } from '../data'

export default function Project() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <Reveal><Tag>My Recent Project</Tag></Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-7 font-display text-4xl font-extrabold text-ink md:text-6xl">
              WORK THAT&apos;S <span className="text-primary">SHIPPED</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div
            onClick={() => setOpen(true)}
            className="group mt-14 cursor-pointer overflow-hidden rounded-3xl border border-white bg-white/80 shadow-card backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Mockup visual */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-sky via-[#E8EFFF] to-lilac md:h-80">
              <div className="absolute left-1/2 top-1/2 w-[85%] max-w-md -translate-x-1/2 -translate-y-1/2 -rotate-2 overflow-hidden rounded-xl bg-white shadow-card transition duration-500 group-hover:rotate-0">
                <div className="flex gap-1.5 px-4 pt-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-blush" />
                  <span className="h-2.5 w-2.5 rounded-full bg-butter" />
                  <span className="h-2.5 w-2.5 rounded-full bg-mint" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-lilac" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2 w-1/2 rounded-full bg-ink/15" />
                      <div className="h-2 w-1/3 rounded-full bg-ink/10" />
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="h-16 rounded-lg bg-gradient-to-br from-sky to-blush" />
                    ))}
                  </div>
                  <div className="mt-4 inline-flex rounded-full bg-primary px-5 py-1.5 text-xs font-semibold text-white">
                    Find food near you
                  </div>
                </div>
              </div>
              <Sparkle className="absolute left-10 top-10 w-6 animate-pulse" color="#A78BFA" />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="max-w-xl">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="rounded-full bg-sky px-3 py-1 text-xs font-semibold text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-3xl font-extrabold text-ink transition group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 leading-relaxed text-mist">{project.tagline}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-card transition group-hover:gap-3 group-hover:bg-primary/90">
                Open Case Study <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: 48, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 48, opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl md:p-10"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 rounded-full bg-paper p-2 text-mist transition hover:bg-sky hover:text-ink"
                aria-label="Close case study"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="font-hand text-2xl text-primary">Case Study</span>
              <h3 className="mt-2 font-display text-4xl font-extrabold text-ink">{project.title}</h3>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-mist">
                <span className="inline-flex items-center gap-2">
                  <Briefcase className="h-4 w-4" /> {project.role}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" /> {project.timeline}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl bg-paper p-4 text-center">
                    <p className="font-display text-2xl font-extrabold text-primary">{m.value}</p>
                    <p className="mt-1 text-xs text-mist">{m.label}</p>
                  </div>
                ))}
              </div>

              {[
                ['Overview', project.overview],
                ['The Challenge', project.challenge],
              ].map(([h, body]) => (
                <div key={h} className="mt-8">
                  <h4 className="font-display text-xl font-bold text-ink">{h}</h4>
                  <p className="mt-2 leading-relaxed text-mist">{body}</p>
                </div>
              ))}

              <div className="mt-8">
                <h4 className="font-display text-xl font-bold text-ink">What I Did</h4>
                <ul className="mt-3 space-y-2">
                  {project.contributions.map((c) => (
                    <li key={c} className="flex gap-3 text-mist">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" /> {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="font-display text-xl font-bold text-ink">Outcome & Learnings</h4>
                <p className="mt-2 leading-relaxed text-mist">{project.outcome}</p>
                <p className="mt-3 rounded-2xl bg-sky/50 p-4 font-hand text-xl leading-snug text-ink">
                  “{project.learnings}”
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}