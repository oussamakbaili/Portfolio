import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorksSection } from "@/components/works-section"
import { SkillsSection } from "@/components/skills-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { GSAPProvider } from "@/components/gsap-provider"

export default function Home() {
  return (
    <GSAPProvider>
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </GSAPProvider>
  )
}
