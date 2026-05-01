// SkillsSection.tsx
'use client';

import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiMysql,
  SiGit,
  SiLinux,
  SiLaravel,
  SiGithub,
  SiNpm,
} from 'react-icons/si';
import { useState } from 'react';

const skills = [
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'GitHub', icon: SiGithub, color: '' },
  { name: 'NPM', icon: SiNpm, color: '#CB3837' },
];

export function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Keahlian{' '}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent dark:from-sky-400 dark:to-sky-600">
              Saya
            </span>
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Teknologi dan alat yang saya gunakan dalam pengembangan website
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{ duration: 0.4, ease: 'easeInOut', delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group text-center p-6 rounded-xl bg-card border border-border hover:border-sky-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Icon
                  className="h-12 w-12 mx-auto mb-3 transition-colors duration-100"
                  style={{ 
                    color: isHovered ? skill.color : 'currentColor'
                  }}
                />
                <h3 className="font-medium text-sm">{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}