import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X, Briefcase, CalendarDays } from 'lucide-react'
import { Reveal, Sparkle, Tag } from './ui'
import { projects } from '../data' // Changed to import the array

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Reveal><Tag>My Recent Work</Tag></Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-7 font-display text-4xl font-extrabold text-ink md:text-6xl">
              PROJECTS THAT <span className="text-primary">MATTER</span>
            </h2>
          </Reveal>
        </div>

        {/* Bento Box Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <Reveal key={proj.id} delay={0.15 + (idx * 0.1)} className={proj.featured ? "md:col-span-2" : "col-span-1"}>
              <div
                onClick={() => setSelectedProject(proj)}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white bg-white/80 shadow-card backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Abstract Visual Header based on project type */}
                <div className={`relative flex items-center justify-center overflow-hidden ${proj.featured ? 'h-72 md:h-80 bg-gradient-to-br from-sky via-[#E8EFFF] to-lilac' : 'h-56 bg-gradient-to-br from-paper to-sky'}`}>
                  <div className="absolute left-1/2 top-1/2 w-[85%] max-w-sm -translate-x-1/2 -translate-y-1/2 -rotate-2 overflow-hidden rounded-xl bg-white p-4 shadow-card transition duration-500 group-hover:rotate-0">
                     {/* Window Dots */}
                    <div className="mb-3 flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-blush" />
                      <span className="h-2 w-2 rounded-full bg-butter" />
                      <span className="h-2 w-2 rounded-full bg-mint" />
                    </div>
                    {/* Abstract Content */}
                    <div className="space-y-3">
                      <div className="h-3 w-3/4 rounded-full bg-ink/10" />
                      <div className="h-3 w-1/2 rounded-full bg-ink/5" />
                      <div className="mt-4 grid grid-cols-2 gap-2">
                         <div className="h-12 rounded-md bg-primary/20" />
                         <div className="h-12 rounded-md bg-lilac/50" />
                      </div>
                    </div>
                  </div>
                  {proj.featured && <Sparkle className="absolute left-10 top-10 w-6 animate-pulse" color="#A78BFA" />}
                </div>

                {/* Card Info */}
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-full bg-sky/50 px-3 py-1 text-xs font-semibold text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-extrabold text-ink transition group-hover:text-primary md:text-3xl">
                      {proj.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 leading-relaxed text-mist">{proj.tagline}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 font-semibold text-primary">
                    View Case Study <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Dynamic Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <motion.div
              initial={{ y: 48, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 48, opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl md:p-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 rounded-full bg-paper p-2 text-mist transition hover:bg-sky hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="font-hand text-2xl text-primary">Case Study</span>
              <h3 className="mt-2 font-display text-4xl font-extrabold text-ink">{selectedProject.title}</h3>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-mist">
                <span className="inline-flex items-center gap-2">
                  <Briefcase className="h-4 w-4" /> {selectedProject.role}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" /> {selectedProject.timeline}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl bg-paper p-4 text-center">
                    <p className="font-display text-2xl font-extrabold text-primary">{m.value}</p>
                    <p className="mt-1 text-xs text-mist">{m.label}</p>
                  </div>
                ))}
              </div>

              {[
                ['Overview', selectedProject.overview],
                ['The Challenge', selectedProject.challenge],
              ].map(([h, body]) => (
                <div key={h} className="mt-8">
                  <h4 className="font-display text-xl font-bold text-ink">{h}</h4>
                  <p className="mt-2 leading-relaxed text-mist">{body}</p>
                </div>
              ))}

              <div className="mt-8">
                <h4 className="font-display text-xl font-bold text-ink">What I Did</h4>
                <ul className="mt-3 space-y-2">
                  {selectedProject.contributions.map((c) => (
                    <li key={c} className="flex gap-3 text-mist">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" /> {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="font-display text-xl font-bold text-ink">Outcome & Learnings</h4>
                <p className="mt-2 leading-relaxed text-mist">{selectedProject.outcome}</p>
                <p className="mt-3 rounded-2xl bg-sky/50 p-4 font-hand text-xl leading-snug text-ink">
                  “{selectedProject.learnings}”
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}