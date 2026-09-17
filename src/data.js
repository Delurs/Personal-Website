import {
  Search, PenTool, Frame, Code2,
  HeartHandshake, MessagesSquare, Users,
  Lightbulb, RefreshCcw, ScanEye,
} from 'lucide-react'

export const processSteps = [
  { n: '01', title: 'Research', desc: 'User needs & pain points.', icon: Search, tint: 'bg-sky text-primary' },
  { n: '02', title: 'Storytelling', desc: 'Flows & wireframes.', icon: PenTool, tint: 'bg-lilac text-[#8B5CF6]' },
  { n: '03', title: 'Design', desc: 'Figma UI & prototypes.', icon: Frame, tint: 'bg-mint text-[#10B981]' },
  { n: '04', title: 'Deliver', desc: 'Code & implementation.', icon: Code2, tint: 'bg-blush text-[#F472B6]' },
]

export const designTools = [
  { name: 'Figma', desc: 'UI/UX Design & Prototyping', badge: 'bg-gradient-to-br from-[#FF7237] to-[#F24E1E] text-white', mark: 'figma', pill: 'bg-white/80' },
  { name: 'Canva', desc: 'Visual Design & Presentations', badge: 'bg-gradient-to-br from-[#00C4CC] to-[#6420B8] text-white', mark: 'canva', pill: 'bg-sky/60' },
  { name: 'Google Stitch', desc: 'AI-Powered Design to Code', badge: 'bg-gradient-to-br from-[#4285F4] via-[#9B72F2] to-[#FABB05] text-white', mark: 'sparkle', pill: 'bg-lilac/50' },
  { name: 'Affinity', desc: 'Photo Editing & Graphic Design', badge: 'bg-gradient-to-br from-[#4B6BFB] to-[#1D39C4] text-white', mark: 'triangle', pill: 'bg-mint/60' },
  { name: 'Capcut', desc: 'Video Editing & Motion Graphics', badge: 'bg-black text-white', mark: 'capcut', pill: 'bg-blush/60' },
  { name: 'Claude', desc: 'AI Assistant & Ideation', badge: 'bg-[#D97757] text-white', mark: 'asterisk', pill: 'bg-butter/70' },
]

export const techStack = [
  { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', tint: 'bg-[#FFE8DC]' },
  { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', tint: 'bg-sky' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', tint: 'bg-butter/80' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', tint: 'bg-lilac/60' },
  { name: 'FastAPI', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', tint: 'bg-mint/70' },
  { name: 'Supabase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', tint: 'bg-mint/50' },
]

export const softSkills = [
  { title: 'Empathy', desc: 'I start with people, not pixels — listening to users and teammates before jumping to solutions.', icon: HeartHandshake, tint: 'bg-blush/60' },
  { title: 'Communication', desc: 'Translating between design, code, and plain English so everyone stays on the same page.', icon: MessagesSquare, tint: 'bg-sky/70' },
  { title: 'Collaboration', desc: 'Great products are team sports. I give feedback generously and take it gracefully.', icon: Users, tint: 'bg-lilac/50' },
  { title: 'Problem Solving', desc: 'Breaking messy, ambiguous challenges into small, testable, solvable pieces.', icon: Lightbulb, tint: 'bg-butter/70' },
  { title: 'Adaptability', desc: 'Tools change, briefs change, deadlines change — I stay curious and keep shipping.', icon: RefreshCcw, tint: 'bg-mint/60' },
  { title: 'Attention to Detail', desc: 'The last 5% — spacing, micro-copy, edge cases — is where good becomes memorable.', icon: ScanEye, tint: 'bg-white/80' },
]

export const project = {
  title: 'Campus Eats',
  tagline: 'A food-discovery app that helps students find affordable meals near campus — researched, designed, and built end-to-end.',
  role: 'Product Designer & Developer',
  timeline: '8 weeks · 2026',
  tags: ['UX Research', 'UI Design', 'FastAPI', 'Supabase'],
  metrics: [
    { value: '40+', label: 'Students interviewed' },
    { value: '3', label: 'Major design iterations' },
    { value: '90%', label: 'Prototype task success' },
  ],
  overview:
    'Students waste money and time deciding where to eat. Campus Eats aggregates budget-friendly stalls, tracks crowd levels, and personalizes recommendations based on taste and budget.',
  challenge:
    'Existing food apps optimize for restaurants and delivery fees — the opposite of what a broke student needs. I had to design for small screens, spotty campus Wi-Fi, and decision fatigue.',
  contributions: [
    'Conducted 40+ user interviews and affinity-mapped pain points',
    'Designed flows & wireframes, then high-fidelity Figma prototypes',
    'Built the full stack: FastAPI backend with Supabase auth & database',
    'Ran usability tests and iterated until tasks felt effortless',
  ],
  outcome:
    'The final prototype hit a 90% task-success rate in testing, and the live MVP now serves a pilot group of students with <2s page loads.',
  learnings:
    'Simplicity is a feature. Cutting half my "clever" ideas after user testing taught me that the best interface is the one nobody has to think about.',
}