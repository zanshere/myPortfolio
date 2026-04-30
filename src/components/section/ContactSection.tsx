'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In{' '}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent dark:from-sky-400 dark:to-sky-600">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together and create something amazing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-950 group-hover:bg-sky-200 dark:group-hover:bg-sky-900 transition-colors duration-300">
                  <FaEnvelope className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:hello@example.com"
                    className="text-muted-foreground hover:text-sky-500 transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-950 group-hover:bg-sky-200 dark:group-hover:bg-sky-900 transition-colors duration-300">
                  <FaPhone className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-sky-500 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-950 group-hover:bg-sky-200 dark:group-hover:bg-sky-900 transition-colors duration-300">
                  <FaMapMarkerAlt className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 resize-none"
              />
            </div>
            <Button type="submit" className="w-full group">
              <FaPaperPlane className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}