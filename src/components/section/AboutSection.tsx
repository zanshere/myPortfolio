'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaBriefcase, FaGraduationCap, FaHeart } from 'react-icons/fa';

const stats = [
  { icon: FaCode, label: 'Proyek Selesai', value: '5+' },
  { icon: FaBriefcase, label: 'Pengalaman', value: '1 Tahun' },
  { icon: FaGraduationCap, label: 'Sertifikat', value: '5+' },
  { icon: FaHeart, label: 'Kopi', value: '∞' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tentang{' '}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent dark:from-sky-400 dark:to-sky-600">
              Saya
            </span>
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-sky-500 shadow-xl">
              <Image
                src="/avatar.jpg"
                alt="Muhammad Fauzan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl font-semibold mb-4">Muhammad Fauzan</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Saya Muhammad Fauzan, lulusan SMK Bina Mandiri Multimedia dengan jurusan Rekayasa Perangkat Lunak. Di usia 18 tahun, saya memiliki ketertarikan yang besar dalam dunia pengembangan perangkat lunak, khususnya dalam pembuatan website. Saya terbiasa menulis kode yang bersih, terstruktur, dan mudah dipelihara, serta selalu berusaha menghadirkan pengalaman pengguna yang optimal dalam setiap proyek yang saya kerjakan.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sebagai seorang junior programmer, saya memiliki semangat tinggi untuk terus belajar dan berkembang. Saya terbuka terhadap teknologi baru dan selalu berusaha meningkatkan kemampuan, terutama dalam bidang pemrograman dan pengembangan website. Saya percaya bahwa proses belajar yang konsisten adalah kunci untuk menjadi developer yang handal dan profesional.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-sky-500 rounded-full" />
                <span className="text-sm">Clean Code</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-sky-500 rounded-full" />
                <span className="text-sm">Best Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-sky-500 rounded-full" />
                <span className="text-sm">Terus Belajar</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
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
    </section>
  );
}