import {
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Globe,
  LayoutTemplate,
  Server,
  Wrench,
} from 'lucide-react'

export const personalInfo = {
  name: 'Aryan Gupta',
  role: 'Full-Stack Developer',
  tagline: 'I build polished web products with scalable backends, clean UX, and an engineer’s eye for reliability.',
  shortIntro:
    'Computer Science undergraduate focused on React, Node.js, MongoDB, TypeScript, and practical product engineering. I enjoy taking ideas from concept to usable, recruiter-ready experiences.',
  email: 'myteam034221@gmail.com',
  phone: '+91 9555886922',
  linkedin: 'https://linkedin.com/in/aryan-gupta-ag01',
  github: 'https://github.com/aryanishan',
  location: 'Kanpur, Uttar Pradesh, India',
  resumePath: '/Aryan-Gupta-Resume.pdf',
}

export const heroStats = [
  { label: 'Coding Problems Solved', value: '700+' },
  { label: 'Hackathons', value: '24hr Code-A-Haunt' },
  { label: 'Current Degree', value: 'B.Tech CSE' },
]

export const aboutSections = [
  {
    title: 'Who I Am',
    content:
      'I am a full-stack developer who likes blending strong CS fundamentals with product thinking. My work usually sits at the intersection of responsive frontend experiences, secure backend APIs, and data-driven features that feel useful in the real world.',
  },
  {
    title: 'Journey',
    content:
      'At Lovely Professional University, I have been building projects across collaboration platforms, travel matching systems, and NLP-powered ML apps. Along the way, I strengthened my problem-solving through 700+ coding problems and hands-on coursework in data science, system design, networking, and databases.',
  },
]

export const education = [
  {
    title: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Lovely Professional University, Phagwara, Punjab',
    duration: 'Aug 2023 - Present',
    detail: 'CGPA: 6.45',
  },
  {
    title: 'Intermediate (PCM)',
    institution: 'New Stepping Stones International School, Kanpur, Uttar Pradesh',
    duration: 'Mar 2022 - May 2023',
    detail: 'Percentage: 60.2',
  },
  {
    title: 'Matriculation',
    institution: 'New Stepping Stones International School, Kanpur, Uttar Pradesh',
    duration: 'Mar 2020 - May 2021',
    detail: 'Percentage: 84.8',
  },
]

export const certifications = [
  'Build Generative AI Apps and Solution - Infosys (Aug 2025)',
  'Master Generative AI and Generative AI Tools - Infosys (Aug 2025)',
  'Fundamentals of Network Communication - Coursera (Oct 2024)',
]

export const training = [
  {
    title: 'Data Science Course',
    organization: 'Lovely Professional University Skill Development',
    duration: 'Jun 2025 - Jul 2025',
    points: [
      'Designed interactive Power BI dashboards using DAX, data modeling, and business datasets.',
      'Built end-to-end machine learning pipelines in Python with scikit-learn.',
      'Applied MySQL and Excel for structured reporting, joins, pivots, and automation.',
    ],
  },
]

export const achievements = [
  'Solved 700+ coding problems across LeetCode.',
  'Participated in Code-A-Haunt 24hrs Hackathon.',
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: LayoutTemplate,
    skills: [
      { name: 'React', level: 88 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'Tailwind CSS', level: 86 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 87 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'WebSockets', level: 72 },
      { name: 'FastAPI / Flask', level: 78 },
    ],
  },
  {
    title: 'Databases & Tools',
    icon: Wrench,
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 82 },
      { name: 'PostgreSQL', level: 74 },
      { name: 'Docker', level: 68 },
      { name: 'Git / GitHub', level: 90 },
    ],
  },
]

export const capabilityCards = [
  {
    title: 'Product-Focused Delivery',
    description: 'I turn raw requirements into polished flows with strong visual hierarchy and responsive behavior.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Problem Solving',
    description: 'Strong DSA practice helps me reason clearly about edge cases, tradeoffs, and performance.',
    icon: BrainCircuit,
  },
  {
    title: 'Full-Stack Execution',
    description: 'From frontend interaction design to APIs, validation, data storage, and deployment-ready structure.',
    icon: Code2,
  },
]

export const projects = [
  {
    id: 'creator-connect-app',
    title: 'Creator Connect App',
    period: 'Feb 2026',
    description:
      'A creator collaboration platform designed to help small content creators connect, match, and grow through a scalable microservices-inspired architecture.',
    highlights: [
      'Built independent profile, matching, and interaction flows to keep the platform modular and scalable.',
      'Designed secure backend services for authentication, creator matching, and data management.',
      'Integrated monetization-ready payment support with backend validation and reliable transaction handling.',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs', 'Payment Gateway'],
    github: 'https://github.com/aryanishan',
    demo: 'https://github.com/aryanishan',
    gradient: 'from-primary via-highlight to-accent',
  },
  {
    id: 'travel-companion-app',
    title: 'Travel Companion App',
    period: 'Feb 2026',
    description:
      'A travel-matching platform that connects travelers by destination, schedule, and preferences to create safer, more social experiences.',
    highlights: [
      'Built intelligent matching and group formation flows for compatible travel planning.',
      'Structured the app with scalable modules to support bookings, payments, and recommendations later.',
      'Focused on collaborative trip planning with a clean, approachable UX.',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST APIs'],
    github: 'https://github.com/aryanishan',
    demo: 'https://github.com/aryanishan',
    gradient: 'from-highlight via-primary to-accent',
  },
  {
    id: 'spam-sms-detector',
    title: 'Spam SMS Detector',
    period: 'Jun 2025',
    description:
      'An NLP-powered machine learning application that classifies SMS messages as spam or ham using classical ML techniques and a lightweight prediction API.',
    highlights: [
      'Trained a TF-IDF + Naive Bayes pipeline to classify SMS messages with strong accuracy.',
      'Exposed model predictions through a Flask or FastAPI backend for real-time inference.',
      'Built a simple interface for users to test messages and get instant feedback.',
    ],
    techStack: ['Python', 'Scikit-learn', 'Flask', 'FastAPI', 'NLP', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/aryanishan',
    demo: 'https://github.com/aryanishan',
    gradient: 'from-accent via-primary to-highlight',
  },
]

export const quickFacts = [
  {
    label: 'Languages',
    text: 'Python, C++, JavaScript, TypeScript, C, Kotlin, Java',
    icon: Globe,
  },
  {
    label: 'Core CS',
    text: 'DSA, OOP, System Design, Computer Networks, Operating Systems, DBMS',
    icon: BadgeCheck,
  },
  {
    label: 'Databases',
    text: 'MongoDB, MySQL, PostgreSQL',
    icon: Database,
  },
]
