'use client'

import { HeroSection } from '@/components/section/HeroSection'
import { AboutSection } from '@/components/section/AboutSection'
import { SkillsSection } from '@/components/section/SkillsSection'
import { ProjectsSection } from '@/components/section/ProjectsSection'
import { ContactSection } from '@/components/section/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}