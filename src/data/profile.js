// ─────────────────────────────────────────────────────────────
// Shrouk Muhammed — Single-Page Portfolio Data
// Verified details from CV, project documentation, and source code.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Shrouk Muhammed',
  title: 'Software Engineer',
  tagline: 'I build software that connects ideas, intelligence, and systems.',
  intro:
    'Computer Science graduate focused on backend engineering, software architecture, and AI-powered applications. Interested in building reliable systems and connecting technology with practical solutions.',
  about:
    'With a foundation in Computer Science and competitive programming, my journey has been driven by understanding what happens behind the interface. I focus on backend engineering, system architecture, and intelligent automation — building software that communicates securely, handles errors cleanly, and holds up under real conditions.',
  location: 'Cairo, Egypt',
  email: 'Shrouk26529@gmail.com',
  phone: '+20 120 442 6692',
  phoneHref: '+201204426692',
  linkedin: 'https://www.linkedin.com/in/shrouk-muhammed-51b67b227',
  github: 'https://github.com/Shrouk-Saleh',
  cv: './Shrouk-Muhammed-CV.pdf',
  photo: './shrouk-portrait.webp',
  photoMd: './shrouk-portrait-md.webp',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    name: 'HireHub',
    badge: 'AI Hiring Intelligence Platform',
    role: 'Backend Engineering & Integration',
    liveUrl: 'https://mapeftogrfe-secret-vault.hf.space/',
    desc:
      'An AI-powered recruitment platform designed to bring structure to hiring pipelines. Features semantic CV matching, automated candidate screening, intelligent profile autofill, and candidate evaluation workflows.',
    capabilities: [
      'Multi-stage recruitment pipeline management',
      'Semantic ATS resume-to-job matching & scoring',
      'Automated candidate profile extraction',
      'Direct assessment hand-off to RavenACE',
    ],
    myFocus:
      'Engineered server-side candidate workflows in Node.js/Express, MongoDB schema design, and the authenticated REST integration connecting HireHub to RavenACE.',
  },
  {
    name: 'RavenACE',
    badge: 'Secure Assessment & Trust Engine',
    role: 'API Seam, AI Grading & Security Lifecycle',
    liveUrl: 'https://ravenace.onrender.com',
    desc:
      'A secure examination and assessment platform integrated with HireHub. Delivers an Electron-based desktop client for exam integrity, automated Gemini-powered grading for written and coding responses, and a manual regrading mechanism with full audit history.',
    capabilities: [
      'Desktop Electron kiosk client with focus & process monitoring',
      'Gemini-powered evaluation for written and coding submissions',
      'Weighted proportional scoring across algorithmic test cases',
      'Independent assessment authority with audit logs',
    ],
    myFocus:
      'Built the API-key authenticated REST seam, hashed invitation token flow with OTP registration, Gemini evaluation pipeline with prompt-injection delimiters, and manual regrade audit logging.',
  },
]

export const techStackCategories = [
  {
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'C++', 'SQL'],
  },
  {
    category: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
  },
  {
    category: 'Architecture & Security',
    items: ['Software Architecture', 'SOLID Principles', 'API Security & Token Hashing'],
  },
  {
    category: 'Cloud & AI',
    items: ['AWS', 'Git & GitHub', 'AI Integration (Gemini API)'],
  },
]

export const background = [
  {
    degree: 'BSc Computer Science',
    institution: 'Thebes Academy',
    detail: 'Graduated 2025 · Focus on algorithms, data structures & systems.',
  },
  {
    degree: 'Diploma in AI-Based Software Development',
    institution: 'Digilians (MCIT & Military Academy)',
    detail: 'July 2025 – September 2026 · Nine-month specialized diploma covering modern backend architecture, cloud engineering & AI APIs.',
  },
  {
    degree: 'Software Engineering Trainee',
    institution: 'Wavz',
    detail: 'September 13 – October 25, 2026 · Six weeks of Software Engineering training (Digital Transformation track), contributing across agile production teams.',
  },
  {
    degree: 'AWS Certified Developer – Associate',
    institution: 'Amazon Web Services (AWS)',
    detail: 'Cloud application development, security, serverless, and deployment workflows.',
  },
]
