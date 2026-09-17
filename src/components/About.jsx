import { GraduationCap, Briefcase, Sprout, MapPin } from 'lucide-react'
import { Reveal, SectionHeading, Sparkle } from './ui'

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tag="About Me"
          title="GETTING TO" highlight="KNOW ME"
          sub="Designer by passion, developer by training, storyteller at heart."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {/* bio — wide card */}
          <Reveal className="md:col-span-2">
            <div className="h-full rounded-3xl border border-white bg-white/80 p-8 shadow-card backdrop-blur md:p-10">
              <p className="font-hand text-3xl text-primary">Hi again!</p>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                I&apos;m Justine — a UI/UX designer and computer science student who
                fell in love with the moment an interface just <em>clicks</em> for someone.
              </p>
              <p className="mt-4 leading-relaxed text-mist">
                My sweet spot is the space between design and engineering: I sketch the
                flow, build the prototype, and then ship the real thing with clean code.
                When I&apos;m not pushing pixels, you&apos;ll find me sketching in
                cafés, watching UX teardown videos, or over-engineering my study playlist.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-semibold text-mist">
                <MapPin className="h-4 w-4 text-primary" /> Based in Manila · Open to remote
              </p>
            </div>
          </Reveal>

          {/* photo card */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col items-center justify-center rounded-3xl border border-white bg-gradient-to-br from-sky/60 to-lilac/50 p-8 shadow-soft">
              <div className="relative w-44 -rotate-3 rounded-xl bg-white p-2.5 pb-7 shadow-card">
                <div className="overflow-hidden rounded-lg bg-gradient-to-br from-[#C7D6FA] to-[#A9BEF5]">
                  <svg viewBox="0 0 200 170" className="w-full">
                    <circle cx="100" cy="62" r="30" fill="#8FA8EC" />
                    <path d="M45 170c0-40 25-60 55-60s55 20 55 60z" fill="#8FA8EC" />
                  </svg>
                </div>
                <p className="mt-2 text-center font-hand text-base text-mist">that&apos;s me (soon)</p>
              </div>
              <Sparkle className="absolute right-8 top-8 w-6 animate-pulse" color="#A78BFA" />
            </div>
          </Reveal>

          {/* currently */}
          <Reveal delay={0.15}>
            <div className="h-full rounded-3xl border border-white bg-butter/60 p-8 shadow-soft">
              <p className="font-hand text-2xl text-ink">Currently…</p>
              <ul className="mt-5 space-y-4 text-sm text-ink">
                <li className="flex gap-3">
                  <GraduationCap className="h-5 w-5 shrink-0 text-primary" />
                  <span><strong>3rd-year CS student</strong> — diving into databases & HCI</span>
                </li>
                <li className="flex gap-3">
                  <Briefcase className="h-5 w-5 shrink-0 text-primary" />
                  <span><strong>Open to internships</strong> — design or frontend roles</span>
                </li>
                <li className="flex gap-3">
                  <Sprout className="h-5 w-5 shrink-0 text-primary" />
                  <span><strong>Learning</strong> — motion design & micro-interactions</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* values */}
          <Reveal delay={0.2} className="md:col-span-2">
            <div className="flex h-full flex-col justify-center rounded-3xl border border-white bg-white/80 p-8 shadow-card backdrop-blur">
              <p className="font-hand text-2xl text-primary">Things I believe</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {['People first, always', 'Simplicity wins', 'Done > perfect', 'Feedback is a gift', 'Craft the details'].map((v) => (
                  <span key={v} className="rounded-full bg-paper px-5 py-2.5 font-display text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-sky">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}