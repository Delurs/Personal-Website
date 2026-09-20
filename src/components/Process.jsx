import { motion } from 'framer-motion'
import { Search, User, BarChart2, GitBranch, LayoutTemplate, Palette, Layout, Code2, CheckCircle2, Rocket, ArrowRight, ArrowDown, MousePointer2 } from 'lucide-react'
import { Reveal, Sparkle } from './ui'

const steps = [
  {
    number: "01",
    title: "RESEARCH",
    description: "Understand before designing the core foundation.",
    output: "INSIGHT",
    accent: "bg-[#4F7DFF]",
    textAccent: "text-[#4F7DFF]",
    bgAccent: "bg-[#4F7DFF]/10",
    items: [
      { icon: <Search className="w-3.5 h-3.5"/>, text: "User needs" },
      { icon: <User className="w-3.5 h-3.5"/>, text: "Pain points" },
      { icon: <BarChart2 className="w-3.5 h-3.5"/>, text: "Context" },
    ],
    illustration: (
      <div className="relative h-44 w-full bg-gradient-to-br from-sky/40 to-sky/10 rounded-2xl flex items-center justify-center overflow-hidden mt-6 border border-white/60">
        <motion.div animate={{ rotate: [-3, 3, -3], y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute left-6 top-5 w-28 h-20 bg-white/90 backdrop-blur rounded-xl shadow-soft p-3">
           <div className="w-3/4 h-1.5 bg-[#4F7DFF]/30 rounded mb-2"/><div className="w-full h-1.5 bg-[#4F7DFF]/20 rounded mb-2"/><div className="w-1/2 h-1.5 bg-[#4F7DFF]/20 rounded"/>
        </motion.div>
        <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 w-16 h-16 rounded-full border-4 border-[#4F7DFF] bg-white shadow-xl flex items-center justify-center">
          <Search className="w-7 h-7 text-[#4F7DFF]" />
        </motion.div>
      </div>
    )
  },
  {
    number: "02",
    title: "STORYTELLING",
    description: "Shape raw concepts into a seamless user journey.",
    output: "STRUCTURE",
    accent: "bg-[#9366ed]",
    textAccent: "text-[#9366ed]",
    bgAccent: "bg-[#9366ed]/10",
    items: [
      { icon: <GitBranch className="w-3.5 h-3.5"/>, text: "Flows" },
      { icon: <LayoutTemplate className="w-3.5 h-3.5"/>, text: "Wireframes" },
    ],
    illustration: (
      <div className="relative h-44 w-full bg-gradient-to-br from-lilac/40 to-lilac/10 rounded-2xl flex items-center justify-center overflow-hidden mt-6 border border-white/60">
        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-6 bottom-5 w-24 h-16 bg-white/90 backdrop-blur rounded-xl shadow-soft p-2 -rotate-3">
          <div className="w-full h-1 bg-[#9366ed]/40 rounded mb-1"/><div className="w-2/3 h-1 bg-[#9366ed]/20 rounded"/>
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#9366ed] text-white text-[11px] font-bold rounded-full shadow-lg z-10">User Flow</div>
        <svg className="absolute w-full h-full text-[#9366ed]/40" viewBox="0 0 200 100"><path d="M50,70 Q100,30 150,50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 5"/></svg>
      </div>
    )
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Translate structure into high-fidelity UI systems.",
    output: "EXPERIENCE",
    accent: "bg-[#16b99a]",
    textAccent: "text-[#16b99a]",
    bgAccent: "bg-[#16b99a]/10",
    items: [
      { icon: <Palette className="w-3.5 h-3.5"/>, text: "Figma UI" },
      { icon: <Layout className="w-3.5 h-3.5"/>, text: "Prototypes" },
    ],
    illustration: (
      <div className="relative h-44 w-full bg-gradient-to-br from-mint/40 to-mint/10 rounded-2xl flex items-center justify-center overflow-hidden mt-6 border border-white/60">
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-44 h-28 bg-white/90 backdrop-blur rounded-xl shadow-soft overflow-hidden -rotate-1">
          <div className="w-full h-3.5 bg-slate-100 flex items-center px-2 gap-1"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/></div>
          <div className="p-2"><div className="w-full h-10 bg-gradient-to-br from-sky/60 to-lilac/40 rounded mb-1.5"/><div className="w-3/4 h-1 bg-slate-200 rounded"/></div>
        </motion.div>
        <MousePointer2 className="absolute bottom-4 right-8 w-7 h-7 text-ink fill-white drop-shadow-md" />
      </div>
    )
  },
  {
    number: "04",
    title: "DELIVER",
    description: "Write clean code and launch production-ready builds.",
    output: "PRODUCT",
    accent: "bg-[#f25a9b]",
    textAccent: "text-[#f25a9b]",
    bgAccent: "bg-[#f25a9b]/10",
    items: [
      { icon: <Code2 className="w-3.5 h-3.5"/>, text: "Code" },
      { icon: <CheckCircle2 className="w-3.5 h-3.5"/>, text: "Test" },
      { icon: <Rocket className="w-3.5 h-3.5"/>, text: "Launch" },
    ],
    illustration: (
      <div className="relative h-44 w-full bg-gradient-to-br from-blush/40 to-blush/10 rounded-2xl flex items-center justify-center overflow-hidden mt-6 border border-white/60">
        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-6 w-32 h-24 bg-white/90 backdrop-blur rounded-xl shadow-soft overflow-hidden">
          <div className="w-full h-2.5 bg-slate-100"/><div className="p-2 flex gap-1.5"><div className="w-1/4 h-full bg-slate-50 rounded"/><div className="w-3/4 h-8 bg-gradient-to-br from-blush/40 to-lilac/30 rounded"/></div>
        </motion.div>
        <div className="absolute top-4 right-6 px-2.5 py-1 bg-[#f25a9b] text-white text-[11px] font-black rounded-md shadow-md">&lt;/&gt;</div>
      </div>
    )
  }
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 overflow-hidden bg-white/40">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #4F7DFF 1px, transparent 0)', backgroundSize: '36px 36px' }} />
      <motion.div animate={{ x: [0, 20, 0], y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-32 top-1/4 w-96 h-96 rounded-full bg-sky/30 blur-3xl pointer-events-none" />
      <motion.div animate={{ x: [0, -20, 0], y: [0, 20, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-32 bottom-1/4 w-96 h-96 rounded-full bg-lilac/25 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <Reveal>
            <span className="inline-flex items-center justify-center px-5 py-1.5 border border-primary/30 rounded-full text-primary font-hand text-lg -rotate-2 mb-4 bg-white shadow-soft">
              ✦ My Process
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl font-black text-ink md:text-7xl tracking-tight">
              MY <span className="text-primary">PROCESS</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-lg font-medium text-mist md:text-xl">Turning ideas into meaningful digital experiences.</p>
          </Reveal>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          <div className="absolute left-[34px] md:left-1/2 top-6 bottom-6 w-px border-l-2 border-dashed border-ink/15 md:-translate-x-1/2 z-0" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div key={step.number} className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center">
                  
                  {/* Center Node */}
                  <div className="absolute left-[34px] md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-card flex items-center justify-center font-black text-xs z-20 border-2 border-sky">
                    {step.number}
                  </div>

                  {/* Left Column */}
                  <div className={`pl-20 md:pl-0 ${isLeft ? 'order-2 md:order-1' : 'order-1 md:order-1 hidden md:flex flex-col items-end justify-center pr-6 opacity-40'}`}>
                    {isLeft ? (
                      <Reveal className="w-full">
                        <div className="bg-white/90 backdrop-blur-xl border border-white rounded-[2rem] p-6 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden group">
                          <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${step.accent}`} />
                          <h3 className="font-display text-2xl font-black text-ink">{step.title}</h3>
                          <p className="mt-1.5 text-sm text-mist">{step.description}</p>
                          <div className={`w-10 h-1 rounded-full mt-3 mb-4 ${step.accent}`} />
                          
                          <div className="flex flex-wrap gap-2">
                            {step.items.map((item, i) => (
                              <div key={i} className={`flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-md ${step.bgAccent} ${step.textAccent}`}>
                                {item.icon} {item.text}
                              </div>
                            ))}
                          </div>
                          {step.illustration}
                        </div>
                      </Reveal>
                    ) : (
                      <>
                        <span className="text-[10px] font-black tracking-widest uppercase text-mist">{step.output}</span>
                        <ArrowDown className="w-3.5 h-3.5 mt-1 text-ink/30" />
                      </>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className={`pl-20 md:pl-0 ${isLeft ? 'hidden md:flex flex-col items-start justify-center pl-6 opacity-40 order-1 md:order-2' : 'order-2 md:order-2'}`}>
                    {isLeft ? (
                      <>
                        <span className="text-[10px] font-black tracking-widest uppercase text-mist">{step.output}</span>
                        <ArrowDown className="w-3.5 h-3.5 mt-1 text-ink/30" />
                      </>
                    ) : (
                      <Reveal className="w-full">
                        <div className="bg-white/90 backdrop-blur-xl border border-white rounded-[2rem] p-6 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden group">
                          <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${step.accent}`} />
                          <h3 className="font-display text-2xl font-black text-ink">{step.title}</h3>
                          <p className="mt-1.5 text-sm text-mist">{step.description}</p>
                          <div className={`w-10 h-1 rounded-full mt-3 mb-4 ${step.accent}`} />
                          
                          <div className="flex flex-wrap gap-2">
                            {step.items.map((item, i) => (
                              <div key={i} className={`flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-md ${step.bgAccent} ${step.textAccent}`}>
                                {item.icon} {item.text}
                              </div>
                            ))}
                          </div>
                          {step.illustration}
                        </div>
                      </Reveal>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <Reveal delay={0.2} className="mt-32 text-center relative z-20">
          <Sparkle className="mx-auto w-6 text-primary mb-4" color="currentColor" />
          <h3 className="font-display text-2xl md:text-3xl font-black text-ink">
            The process is only the <span className="text-primary">beginning.</span>
          </h3>
          <p className="mt-2 text-sm text-mist">Explore what I&apos;ve built.</p>
          <a href="#projects" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-primary/90">
            View My Personal Projects <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

      </div>
    </section>
  )
}