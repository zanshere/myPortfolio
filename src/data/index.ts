import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiHtml5,
  SiCss,
  SiPhp,
  SiLaravel,
  SiMysql,
} from 'react-icons/si'

export const skills = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'PHP', icon: SiPhp },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: SiGit },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
]

// Hanya 3 project
export const projects = [
  {
    id: 1,
    title: 'Ikan Bakar Jo',
    description:
      'Aplikasi manajemen keuangan, menu dan bahan baku berbasis web.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'Preline UI'],
    repoUrl: 'https://github.com/zanshere/ikan-bakar-jo',
    hasDemo: false,
    demoUrl: '',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'Website portfolio modern dengan animasi smooth, dark mode, dan responsif. Dibangun dengan teknologi terbaru.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn', 'Framer Motion', 'Lenis'],
    repoUrl: 'https://github.com/zanshere/myPortfolio',
    hasDemo: false,
    demoUrl: '',
  },
  {
    id: 3,
    title: 'Fajar World Fantasy',
    description:
      'Website wisata ragunan.',
    tech: ['PHP', 'Laravel', 'Tailwind CSS', 'MySQL', 'Preline UI', 'GSAP', 'Lenis'],
    repoUrl: 'https://github.com/zanshere/fwf-projects',
    hasDemo: false,
  },
]

export const navItems = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang', href: '#about' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Kontak', href: '#contact' },
]