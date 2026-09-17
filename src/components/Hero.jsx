import { motion } from 'framer-motion'
import { ArrowRight, User } from 'lucide-react'
import { Reveal, Sparkle, Squiggle } from './ui'

const checklist = ['Research', 'Ideate', 'Design', 'Prototype', 'Test']

export default function Hero() {
  return (
    <header id="home" className="relative min-h-screen overflow-hidden pb-16 pt-32 lg:pt-36">
      <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-sky/60 blur-3xl" />
      <div className="absolute -right-32 top-1/3 h-[480px] w-[480px] rounded-full bg-lilac/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.25em] text-ink/80">
              HELLO, I&apos;M JUSTINE — A DESIGNER &amp; BUILDER
              <Sparkle className="w-5" color="#7C9BFF" />
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] text-ink md:text-7xl">
              I DESIGN
              <span className="block text-primary">DIGITAL EXPERIENCES</span>
              THAT FEEL RIGHT.
            </h1>
            <Squiggle className="mt-5 w-40" />
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-7 text-lg font-semibold text-ink">
              UI/Designer <span className="mx-1 text-primary">×</span> Computer Science Student
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-mist">
              I create thoughtful and user-centered designs that bridge creativity and
              technology, turning ideas into meaningful digital experiences.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-primary/90">
                View My Work
                <ArrowRight className="w-5 h-5 transition group-hover:translate-x-1" />
              </a>
              <a href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-8 py-4 font-semibold text-ink backdrop-blur transition hover:-translate-y-0.5 hover:border-primary hover:text-primary">
                <User className="w-5 h-5" /> Get to Know Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <div className="mt-16 flex items-center gap-3 text-sm text-mist">
              <div className="flex h-10 w-6 justify-center rounded-full border-2 border-ink/30 pt-2">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-ink/50"
                  animate={{ y: [0, 14, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              Scroll to explore
            </div>
          </Reveal>
        </div>

        <HeroCollage />
      </div>
    </header>
  )
}

function HeroCollage() {
  return (
    <div className="relative hidden h-[600px] select-none lg:block">
      {/* organic blob */}
      <div className="absolute right-0 top-16 h-[440px] w-[440px] rounded-[46%_54%_58%_42%/48%_44%_56%_52%] bg-gradient-to-br from-sky via-[#E7EDFF] to-lilac" />

      {/* sticky note */}
      <Reveal delay={0.15} className="absolute right-[280px] top-2">
        <div className="w-44 rotate-[5deg] rounded-sm bg-gradient-to-br from-blush to-lilac p-4 font-hand text-xl leading-snug text-ink shadow-soft">
          Better Experiences for a Brighter Future <span className="text-primary">♡</span>
        </div>
      </Reveal>

      {/* checklist card */}
      <Reveal delay={0.25} className="absolute right-0 top-6">
        <div className="w-60 rotate-[3deg] rounded-2xl bg-white/85 p-5 shadow-card backdrop-blur-md">
          <div className="mb-4 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint" />
            <span className="h-2.5 w-2.5 rounded-full bg-butter" />
          </div>
          <ul className="space-y-2.5 text-sm text-mist">
            {checklist.map((item) => (
              <li key={item}
                className={`flex items-center gap-2.5 rounded-lg px-2 py-1 ${item === 'Design' ? 'bg-sky font-semibold text-ink' : ''}`}>
                <span className={`h-3.5 w-3.5 rounded-full border-2 ${item === 'Design' ? 'border-primary bg-primary' : 'border-ink/15'}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* photo polaroid */}
      <Reveal delay={0.35} className="absolute right-[120px] top-48">
        <div className="relative w-64 -rotate-6 rounded-xl bg-white p-3 pb-8 shadow-card">
          <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-4deg] rounded-sm bg-sky/70" />
          <div className="overflow-hidden rounded-lg bg-gradient-to-br from-[#C7D6FA] to-[#A9BEF5]">
            <svg viewBox="0 0 200 170" className="w-full">
              <circle cx="100" cy="62" r="30" fill="#8FA8EC" />
              <path d="M45 170c0-40 25-60 55-60s55 20 55 60z" fill="#8FA8EC" />
            </svg>
          </div>
          <p className="mt-3 text-center font-hand text-lg text-mist">Your photo here ↺</p>
        </div>
      </Reveal>

      {/* designing pill */}
      <Reveal delay={0.45} className="absolute right-[300px] top-[380px]">
        <div className="rotate-[8deg] rounded-full bg-sky px-5 py-1.5 font-hand text-lg text-ink shadow-soft">Designing…</div>
      </Reveal>

      {/* code window */}
      <Reveal delay={0.55} className="absolute bottom-4 right-0">
        <div className="w-72 rotate-[2deg] rounded-xl bg-ink p-4 shadow-card">
          <div className="mb-3 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-butter" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-primary/80" />
            <div className="h-2 w-1/2 rounded-full bg-blush" />
            <div className="h-2 w-2/3 rounded-full bg-butter" />
            <div className="h-2 w-1/3 rounded-full bg-lilac" />
          </div>
        </div>
      </Reveal>

      {/* color palette */}
      <Reveal delay={0.5} className="absolute right-[60px] top-[300px]">
        <div className="flex -rotate-6 gap-2 rounded-full bg-white/90 px-4 py-2.5 shadow-soft backdrop-blur">
          {['#4F7DFF', '#7DD3FC', '#C4B5FD', '#F9A8D4', '#FDE047'].map((c) => (
            <span key={c} className="h-5 w-5 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </Reveal>

      {/* handwritten note */}
      <Reveal delay={0.6} className="absolute bottom-16 right-[330px]">
        <p className="rotate-[10deg] font-hand text-2xl leading-tight text-ink">
          Good Design<br />= Happy Users <span>😊</span>
        </p>
      </Reveal>

      <Sparkle className="absolute right-[220px] top-24 w-6 animate-pulse" color="#A78BFA" />
      <Sparkle className="absolute bottom-40 right-10 w-8 animate-pulse" />
    </div>
  )
}