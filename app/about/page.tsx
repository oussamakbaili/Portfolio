import { AboutSection } from "@/components/about-section"
import { Sidebar } from "@/components/sidebar"
import { GSAPProvider } from "@/components/gsap-provider"

export default function About() {
  return (
    <GSAPProvider>
      <div className="min-h-screen relative">
        <Sidebar />
        <main className="ml-0 lg:ml-20 transition-all duration-500">
          <AboutSection />
        </main>
      </div>
    </GSAPProvider>
  )
}
