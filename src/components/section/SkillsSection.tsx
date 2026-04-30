'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data'

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent dark:from-sky-400 dark:to-sky-600">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, ease: 'easeInOut', delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group text-center p-6 rounded-xl bg-card border border-border hover:border-sky-500/50 hover:shadow-lg transition-all duration-300"
              >
                <Icon className="h-12 w-12 mx-auto mb-3 text-foreground group-hover:text-sky-500 transition-colors duration-300" />
                <h3 className="font-medium text-sm">{skill.name}</h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}