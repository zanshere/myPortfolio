'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { navItems } from '@/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, href: 'https://instagram.com/fauzan.dev', label: 'Instagram' },
    { icon: FaGithub, href: 'https://github.com/fauzan', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:fauzan@example.com', label: 'Email' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent dark:from-sky-400 dark:to-sky-600">
              Portfolio
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              Menciptakan pengalaman digital elegan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300 text-sm"
              >
                {item.name}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
            className="flex justify-center md:justify-end gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="p-2 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 hover:bg-sky-200 dark:hover:bg-sky-900 transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
          className="text-center mt-12 pt-6 border-t border-border"
        >
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Muhammad Fauzan. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            Dibangun dengan Next.js, Tailwind CSS, dan Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}