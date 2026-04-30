'use client';

import { motion } from 'framer-motion';
import { FaCode, FaBriefcase, FaGraduationCap, FaHeart } from 'react-icons/fa';

const stats = [
  { icon: FaCode, label: 'Projects Completed', value: '50+' },
  { icon: FaBriefcase, label: 'Years Experience', value: '5+' },
  { icon: FaGraduationCap, label: 'Happy Clients', value: '30+' },
  { icon: FaHeart, label: 'Coffee Cups', value: '∞' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent dark:from-sky-400 dark:to-sky-600">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience
              in building modern web applications. My journey in tech started with a
              curiosity for how things work, which evolved into a career dedicated
              to creating meaningful digital solutions.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and delivering exceptional
              user experiences. When I'm not coding, you can find me contributing to
              open-source projects, mentoring junior developers, or exploring new
              technologies.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-sky-500 rounded-full" />
                <span className="text-sm">Clean Code</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-sky-500 rounded-full" />
                <span className="text-sm">Best Practices</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-sky-500 rounded-full" />
                <span className="text-sm">Continuous Learning</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: 'easeInOut', delay: index * 0.1 }}
                    className="text-center p-6 rounded-xl bg-card border border-border hover:border-sky-500/50 transition-all duration-300"
                  >
                    <Icon className="h-8 w-8 text-sky-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}