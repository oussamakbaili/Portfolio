import { SkillsSection } from "@/components/skills-section"
import { Sidebar } from "@/components/sidebar"
import { GSAPProvider } from "@/components/gsap-provider"
import { GeometricElements } from "@/components/geometric-elements"

export default function Skills() {
  return (
    <GSAPProvider>
      <div className="min-h-screen relative">
        <GeometricElements />
        <Sidebar />
        <main className="ml-0 lg:ml-20 transition-all duration-500">
          <SkillsSection />
        </main>
      </div>
    </GSAPProvider>
  )
}
