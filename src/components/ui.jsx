import { motion } from 'framer-motion'

export const Reveal = ({ children, delay = 0, y = 30, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

export const Tag = ({ children, className = '' }) => (
  <div className={`relative inline-flex items-center justify-center px-8 py-1 ${className}`}>
    <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 160 44" fill="none" preserveAspectRatio="none">
      <path d="M80 4C40 4 8 12 8 22s32 18 72 18 72-8 72-18S120 4 80 4Z" stroke="#4F7DFF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
    <span className="relative whitespace-nowrap font-hand text-2xl text-primary">{children}</span>
  </div>
)

export const SectionHeading = ({ tag, title, highlight, sub }) => (
  <div className="mx-auto mb-16 max-w-2xl text-center">
    <Reveal><Tag>{tag}</Tag></Reveal>
    <Reveal delay={0.08}>
      <h2 className="mt-7 font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.16}>
        <p className="mt-5 text-lg leading-relaxed text-mist">{sub}</p>
      </Reveal>
    )}
  </div>
)

export const Sparkle = ({ className = '', color = '#FACC15' }) => (
  <svg className={className} viewBox="0 0 24 24" fill={color}>
    <path d="M12 0c.7 6.5 5.5 11.3 12 12-6.5.7-11.3 5.5-12 12-.7-6.5-5.5-11.3-12-12C6.5 11.3 11.3 6.5 12 0Z" />
  </svg>
)

export const Squiggle = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 120 20" fill="none">
    <path d="M4 12c10-10 14 8 24-2s14 8 24-2 14 8 24-2 14 8 24-2 12 6 16 2" stroke="#7C9BFF" strokeWidth="3" strokeLinecap="round" />
  </svg>
)