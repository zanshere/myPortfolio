import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si'

export const skills = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python', icon: SiPython },
  { name: 'Git', icon: SiGit },
  { name: 'Docker', icon: SiDocker },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
]

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Platform belanja online modern dengan fitur keranjang, pembayaran, dan dashboard admin.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    image: '/projects/ecommerce.jpg',
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'AI Image Generator',
    description:
      'Aplikasi yang menghasilkan gambar dari teks menggunakan API OpenAI dengan antarmuka real-time.',
    tech: ['React', 'Python', 'FastAPI', 'TensorFlow', 'Redis'],
    image: '/projects/ai-image.jpg',
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Task Management App',
    description:
      'Aplikasi manajemen tugas kolaboratif dengan drag-and-drop, notifikasi, dan integrasi kalender.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Zustand'],
    image: '/projects/taskapp.jpg',
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Portfolio Dashboard',
    description:
      'Dashboard analitik untuk monitoring portofolio investasi dengan grafik interaktif.',
    tech: ['React', 'D3.js', 'Express', 'MongoDB', 'JWT'],
    image: '/projects/dashboard.jpg',
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com',
  },
]

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]