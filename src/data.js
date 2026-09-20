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

export const projects = [
  {
    id: 'elocia',
    title: 'Project ELOCIA',
    tagline: 'A computer vision platform evaluating Filipino Sign Language expression for Deaf and Hard-of-Hearing elementary students.',
    role: 'Lead Developer & Architect',
    timeline: '2026',
    tags: ['Computer Vision', 'Python', 'FastAPI', 'FSL'],
    metrics: [
      { value: 'Real-time', label: 'Vision Tracking' },
      { value: 'Local', label: 'Field Deployment' },
      { value: 'EdTech', label: 'Sector' },
    ],
    overview: 'Designed for Cabuyao Central School, ELOCIA bridges the gap in accessible tech education by using computer vision to evaluate and encourage Filipino Sign Language expression among young students.',
    challenge: 'Building a system that is highly accurate with localized gestures while ensuring the UI remains incredibly intuitive and encouraging for elementary-aged children.',
    contributions: [
      'Spearheaded the technical development and system architecture',
      'Integrated computer vision models with a fast, responsive FastAPI backend',
      'Coordinated data collection and local field research with educators'
    ],
    outcome: 'A robust, accessible platform that directly impacts early childhood education for the Deaf and Hard-of-Hearing community.',
    learnings: 'When designing for accessibility, empathy must be hardcoded into the architecture, not just the interface.',
    featured: true // Makes this span the full width in our grid
  },
  {
    id: 'aurora',
    title: 'Aurora',
    tagline: 'A smart refrigerator UI/UX concept designed to optimize food management and reduce household waste.',
    role: 'UI/UX Designer',
    timeline: '2026',
    tags: ['UI/UX', 'Figma', 'Prototyping'],
    metrics: [
      { value: 'High-Fi', label: 'Wireframes' },
      { value: 'IoT', label: 'Integration' },
      { value: 'Mobile', label: 'Responsive' },
    ],
    overview: 'Aurora tackles everyday food waste through a connected appliance interface that tracks inventory, suggests recipes based on expiring items, and automates grocery lists.',
    challenge: 'Condensing complex inventory data into a clean, glanceable mobile and tablet interface that users can interact with effortlessly in a busy kitchen environment.',
    contributions: [
      'Mapped out user flows for inventory input and recipe discovery',
      'Designed a comprehensive design system and high-fidelity prototypes in Figma',
      'Created micro-interactions that make logging food feel rewarding'
    ],
    outcome: 'A polished, highly visual prototype demonstrating how IoT interfaces can seamlessly blend into daily domestic life.',
    learnings: 'The best UI gets out of the way. If a smart home app takes more than three taps to do its job, it fails.',
    featured: false
  },
  {
    id: 'boxchamp',
    title: 'BOXCHAMP',
    tagline: 'A bold, high-energy web platform prototype for boxing training and athletic conditioning.',
    role: 'UI Designer',
    timeline: '2026',
    tags: ['Web Design', 'Figma', 'Visual Identity'],
    metrics: [
      { value: 'Web', label: 'Platform' },
      { value: 'Dark Mode', label: 'Aesthetic' },
      { value: 'Concept', label: 'Phase' },
    ],
    overview: 'BOXCHAMP is a conceptual training site designed to motivate athletes. It combines bold typography, high-contrast imagery, and seamless class scheduling.',
    challenge: 'Translating the physical intensity of boxing into a digital layout without making the interface feel cluttered or overwhelming.',
    contributions: [
      'Developed a striking visual identity and typography hierarchy',
      'Prototyped user journeys for class bookings and trainer profiles',
      'Designed a responsive web layout focusing on dark-mode aesthetics'
    ],
    outcome: 'An immersive digital environment that visually communicates energy and discipline.',
    learnings: 'Whitespace (or dark space) is a powerful tool for controlling user focus and energy on a page.',
    featured: false
  }
]