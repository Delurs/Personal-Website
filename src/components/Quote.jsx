import { motion } from 'framer-motion'
import { Reveal, Sparkle } from './ui'
import authorImage from '../assets/einstein.jpg'

export default function Quote() {
  return (
    <section className="relative overflow-hidden pt-8 pb-28 md:pt-12 md:pb-36">
      {/* Giant Background Quote Mark */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 select-none text-[20rem] font-black leading-none text-white/50 md:text-[30rem]">
        “
      </div>

      {/* Physics Atom Motif (Einstein) */}
      <motion.svg 
        className="absolute -left-32 top-10 w-[400px] text-primary/10"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <ellipse cx="50" cy="50" rx="45" ry="12" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(30 50 50)" />
        <ellipse cx="50" cy="50" rx="45" ry="12" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="45" ry="12" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(150 50 50)" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
      </motion.svg>

      {/* Bicycle Wheel Motif (Balance & Movement) */}
      <motion.svg 
        className="absolute -right-24 bottom-10 w-[300px] text-primary/10" 
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1="50" y1="50" x2="50" y2="5" stroke="currentColor" strokeWidth="0.5" transform={`rotate(${i * 30} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="6" fill="currentColor" />
      </motion.svg>

      <Sparkle className="absolute left-[15%] top-16 w-8 animate-pulse text-butter" color="currentColor" />
      <Sparkle className="absolute right-[20%] top-32 w-6 animate-pulse text-lilac" color="currentColor" />
      
      <Reveal className="relative mx-auto max-w-4xl px-6 text-center">
        {/* The Glassmorphism Quote Card */}
        <div className="relative z-10 mx-auto rounded-3xl border border-white/60 bg-white/40 p-10 shadow-soft backdrop-blur-xl md:p-16">
          <blockquote className="text-3xl font-medium leading-tight text-ink md:text-5xl md:leading-[1.15]">
            Life is like riding a bicycle. To keep your balance,{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 font-bold text-primary">you must keep moving</span>
              {/* Stylized Underline */}
              <svg className="absolute -bottom-2 left-0 -z-10 h-4 w-full text-butter" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>.
          </blockquote>
          
          {/* Profile Attribution */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-md">
              <img 
                src={authorImage} 
                alt="Albert Einstein"
                className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
              />
            </div>
            <div className="text-left">
              <p className="font-display text-xl font-bold text-ink">Albert Einstein</p>
              <p className="font-hand text-lg text-mist">Theoretical Physicist</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}