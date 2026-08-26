import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { ProjectsSection } from '@/components/projects-section'
import { SiteBackground } from '@/components/site-background'
import { SiteFooter } from '@/components/site-footer'
import { SkillsSection } from '@/components/skills-section'
import { StatsStrip } from '@/components/stats-strip'
import { TimelineSection } from '@/components/timeline-section'

export default function Page() {
  return (
    <>
      <SiteBackground />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
