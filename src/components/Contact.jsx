import { Mail, Code, Globe, Share2, ArrowUp, FileDown } from 'lucide-react'
import { Reveal, Sparkle, Tag } from './ui'

const socials = [
  { icon: Code, href: 'https://github.com/Delurs', label: 'GitHub' },
  { icon: Globe, href: 'https://www.linkedin.com/in/justine-deluria/', label: 'LinkedIn' },
  { icon: Share2, href: 'https://dribbble.com/Delurs', label: 'Portfolio' },
]

export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden pb-12 pt-28">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-sky/70 to-transparent" />
      <Sparkle className="absolute left-[10%] top-24 w-7 animate-pulse" color="#A78BFA" />
      <Sparkle className="absolute right-[12%] top-40 w-5" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal><Tag>Get in Touch</Tag></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-4xl font-extrabold leading-tight text-ink md:text-6xl">
            HAVE AN IDEA?<br />
            LET&apos;S MAKE IT <span className="text-primary">FEEL RIGHT.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-mist">
            I&apos;m currently open to internship opportunities, freelance projects,
            and interesting conversations about design & tech.
          </p>
          <a
            href="mailto:hello@justinedeluria.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white shadow-card transition hover:-translate-y-1 hover:bg-primary/90"
          >
            <Mail className="h-5 w-5" /> Say Hello
          </a>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex justify-center gap-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                className="rounded-full bg-white/80 p-3.5 text-mist shadow-soft backdrop-blur transition hover:-translate-y-1 hover:bg-ink hover:text-white">
                <s.icon className="h-5 w-5" />
              </a>
            ))}
            <a href="/Justine-DeLuria-Resume.pdf" download
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 font-display text-sm font-semibold text-ink shadow-soft backdrop-blur transition hover:-translate-y-1 hover:bg-ink hover:text-white">
              <FileDown className="h-5 w-5" /> Resume
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 text-sm text-mist md:flex-row">
          <p>© {new Date().getFullYear()} Justine DeLuria — Designed &amp; built with ♡ (and lots of coffee).</p>
          <a href="#home" className="inline-flex items-center gap-1.5 font-semibold transition hover:text-primary">
            Back to top <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}