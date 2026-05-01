'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaGithub } from 'react-icons/fa';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  // ACCESS_KEY dari web3forms.com
  const WEB3FORMS_ACCESS_KEY = '11741425-275e-4fbd-b824-fd57a5dee962';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Pesan dari ${formData.name} - Portfolio Website`,
          from_name: formData.name,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Terima kasih! Pesan Anda telah terkirim. Saya akan segera merespons.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Gagal mengirim pesan');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }
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
          viewport={{ once: false, margin: '-100px' }} // ubah ke false
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hubungi{' '}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent dark:from-sky-400 dark:to-sky-600">
              Saya
            </span>
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Punya proyek? Mari bekerja sama dan ciptakan sesuatu yang luar biasa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl font-semibold mb-6">Mari Terhubung</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-950 group-hover:bg-sky-200 dark:group-hover:bg-sky-900 transition-colors duration-300">
                  <FaEnvelope className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:fauzan224321@gmail.com"
                    className="text-muted-foreground hover:text-sky-500 transition-colors"
                  >
                    fauzan224321@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-950 group-hover:bg-sky-200 dark:group-hover:bg-sky-900 transition-colors duration-300">
                  <FaPhone className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="font-medium">Telepon</p>
                  <a
                    href="tel:+6285123658885"
                    className="text-muted-foreground hover:text-sky-500 transition-colors"
                  >
                    +62 851-2365-8885
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-950 group-hover:bg-sky-200 dark:group-hover:bg-sky-900 transition-colors duration-300">
                  <FaMapMarkerAlt className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="font-medium">Alamat</p>
                  <p className="text-muted-foreground">Cileungsi, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-950 group-hover:bg-sky-200 dark:group-hover:bg-sky-900 transition-colors duration-300">
                  <FaInstagram className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <a
                    href="https://instagram.com/zanshere_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-sky-500 transition-colors"
                  >
                    @zanshere_
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-sky-100 dark:bg-sky-950 group-hover:bg-sky-200 dark:group-hover:bg-sky-900 transition-colors duration-300">
                  <FaGithub className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <a
                    href="https://github.com/zanshere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-sky-500 transition-colors"
                  >
                    github.com/zanshere
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nama
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 disabled:opacity-50"
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
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300 resize-none disabled:opacity-50"
              />
            </div>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <Button type="submit" className="w-full group" disabled={isSubmitting}>
              <FaPaperPlane className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}