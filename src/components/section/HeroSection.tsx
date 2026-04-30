'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaArrowDown } from 'react-icons/fa';

export function HeroSection() {
  const scrollToContact = () => {
    const contact = document.querySelector('#contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/20 dark:bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-300/20 dark:bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 text-sm"
          >
            ✨ Welcome to my digital space
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent dark:from-sky-400 dark:to-sky-600">
              Creative Developer
            </span>
            <br />
            & Problem Solver
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
          >
            I craft elegant digital experiences with modern web technologies.
            Specialized in building exceptional websites that combine beautiful
            design with powerful functionality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button onClick={scrollToContact} size="lg">
              Get in touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const projects = document.querySelector('#projects');
                if (projects) projects.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View my work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            delay: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <FaArrowDown className="h-6 w-6 text-sky-500 dark:text-sky-400" />
        </motion.div>
      </div>
    </section>
  );
}