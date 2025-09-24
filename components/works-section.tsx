"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { X, ExternalLink, Github } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function WorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Modal state
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle project interactions
  const handleProjectClick = (project: any) => {
    console.log('Projet cliqué:', project.title)
    // Ouvrir la modal avec les détails
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCodeClick = (project: any, e: React.MouseEvent) => {
    e.stopPropagation() // Empêche le clic sur la carte
    console.log('Code cliqué pour:', project.title)
    // Ouvrir le code GitHub
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank')
    }
  }

  const handleDetailsClick = (project: any, e: React.MouseEvent) => {
    e.stopPropagation() // Empêche le clic sur la carte
    console.log('Détails cliqués pour:', project.title)
    // Ouvrir la modal avec les détails
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const projects = [
    {
      title: "CARAGENCY",
      category: "E-COMMERCE",
      year: "2025",
      company: "Freelance",
      description: "Plateforme e-commerce complète pour la vente de véhicules d'occasion avec système de recherche avancée, galerie photos interactive, calculatrice de financement, et interface d'administration pour la gestion des stocks et des ventes.",
      image: "/modern-ecommerce-dashboard.png",
      tech: ["Laravel", "React", "MySQL", "Stripe API"],
      achievements: ["+40% de conversion", "Interface responsive", "Paiement sécurisé"],
      features: ["Recherche avancée", "Galerie photos", "Calculatrice financement", "Admin panel"],
      githubUrl: "https://github.com/oussamakbaili/CarAgency",
      liveUrl: "https://caragency.oussama.dev",
      codeActive: true
    },
    {
      title: "PLATEFORME ÉDUCATIVE",
      category: "FULL-STACK",
      year: "2025",
      company: "Association Initiative Al Amal",
      description: "Plateforme web unifiée pour l'administration, enseignants et étudiants avec automatisation de présence via QR Code et gestion complète des cours, notes et emplois du temps.",
      image: "/api-documentation-interface.jpg",
      tech: ["Laravel", "HTML5", "CSS3", "JavaScript", "QR Code API"],
      achievements: ["Automatisation 100%", "Interface intuitive", "Gestion temps réel"],
      features: ["QR Code présence", "Gestion cours", "Notes étudiants", "Emplois du temps"],
      githubUrl: "https://github.com/oussamakbaili/Centre_Al_Amal.git",
      liveUrl: "https://education.oussama.dev",
      codeActive: true
    },
    {
      title: "SUPERSTOCK",
      category: "GESTION",
      year: "2023",
      company: "Société SCZ Le Chameau",
      description: "A comprehensive stock management application for supermarkets. SuperStock is a robust web-based stock management application tailored for supermarket operations. Developed by Imad Guidouh as a freelance project, this application leverages modern web technologies to provide an efficient and user-friendly solution for inventory control. Key Features: User management with role-based access control, Product catalog management, Purchase and sales order processing, Supplier and customer relationship management, Real-time stock tracking and updates, Automated invoice generation. The application is built with a focus on scalability and ease of use, making it suitable for supermarkets of various sizes. It demonstrates the effective use of UML diagrams, including use case and class diagrams, in the design process, ensuring a well-structured and maintainable codebase.",
      image: "/financial-dashboard-charts.png",
      tech: ["Django", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
      achievements: ["Role-based Access", "Real-time Updates", "UML Design", "Scalable Architecture"],
      features: ["User Management", "Product Catalog", "Order Processing", "Supplier Management", "Real-time Tracking", "Invoice Generation"],
      githubUrl: "https://github.com/oussamakbaili/Gestion-de-stock.git",
      liveUrl: "https://superstock.oussama.dev",
      codeActive: true
    },
    {
      title: "GESTION MÉDICALE",
      category: "HEALTHCARE",
      year: "2024",
      company: "Société Telepac Technologie",
      description: "Plateforme web de gestion médicale avec interfaces intuitives pour la gestion des dossiers patients, planification des rendez-vous et tableau de bord dynamique.",
      image: "/placeholder.svg",
      tech: ["Laravel", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
      achievements: ["Solution complète", "Interface ergonomique", "Prêt production"],
      features: ["Dossiers patients", "Planification RDV", "Tableau de bord", "Historique médical"],
      githubUrl: "https://github.com/oussama-kbaili/gestion-medicale",
      liveUrl: "https://medical.oussama.dev",
      codeActive: true
    },
    {
      title: "APIS BACKEND",
      category: "BACKEND",
      year: "2021",
      company: "Arcane Studios",
      description: "APIs robustes et solutions backend sur mesure incluant systèmes de gestion de données, authentification utilisateurs et logique métier pour projets clients.",
      image: "/api-documentation-interface.jpg",
      tech: ["Django", "Laravel", "MySQL", "PostgreSQL", "REST APIs"],
      achievements: ["APIs performantes", "Livraison rapide", "Solutions sur mesure"],
      features: ["REST APIs", "Authentification", "Gestion données", "Microservices"],
      githubUrl: "https://github.com/oussama-kbaili/backend-apis",
      liveUrl: "https://api.oussama.dev",
      codeActive: false
    }
  ]

  useEffect(() => {
    if (!containerRef.current || !cardsRef.current || !wrapperRef.current) return

    const mm = gsap.matchMedia()

    mm.add("(min-width: 1024px)", () => {
      // Desktop stacked cards flip animation
      const cards = gsap.utils.toArray(".work-card") as HTMLElement[]
      const totalCards = cards.length
      
      // Set initial positions - stack all cards on top of each other
      gsap.set(cards, {
        zIndex: (i) => totalCards - i,
        scale: (i) => 1 - (i * 0.05), // Slightly scale down cards behind
        y: (i) => i * -10, // Slight vertical offset for stacking effect
        rotationY: 0,
        transformOrigin: "center center",
      })

      // Create main timeline for the scroll animation
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${window.innerHeight * (totalCards - 1)}`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      })

      // Animate each card flip and exit
      cards.forEach((card, index) => {
        if (index < totalCards - 1) {
          // Flip and slide out animation for each card (except the last one)
          mainTl.to(card, {
            x: -window.innerWidth,
            rotationY: -90,
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          }, index * 0.8)
          
          // Reveal the next card
          if (index < totalCards - 1) {
            mainTl.to(cards[index + 1], {
              scale: 1,
              y: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
            }, index * 0.8 + 0.4)
          }
        }
      })

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    })

    mm.add("(max-width: 1023px)", () => {
      // Mobile vertical scroll with fade animations
      const cards = gsap.utils.toArray(".work-card") as HTMLElement[]
      
      // Reset any desktop transforms
      gsap.set(cards, { clearProps: "all" })
      
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    })

    return () => {
      mm.revert()
    }
  }, [])

  return (
    <section id="works" className="py-32 bg-gradient-to-br from-background via-background to-secondary/10" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="gsap-fade-in mb-16 text-center">
          <h2 className="text-6xl md:text-8xl font-black text-foreground mb-6 tracking-tight">PROJETS</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Quelques réalisations tech qui me passionnent :
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="work-card group cursor-pointer will-change-transform"
              onClick={() => handleProjectClick(project)}
            >
              <div className="w-full bg-card/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 relative">
                {/* Click indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                {/* Project Screenshot */}
                <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                  <img
                    src={
                      project.image ||
                      `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(project.title)}`
                    }
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-primary font-bold tracking-widest uppercase px-2 py-1 bg-primary/20 rounded-md">
                        {project.category}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.company}
                    </p>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6 space-y-4">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-xs text-muted-foreground px-2 py-1">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Achievement */}
                  {project.achievements && project.achievements[0] && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600 font-medium">
                        {project.achievements[0]}
                      </span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.codeActive ? (
                      <button 
                        onClick={(e) => handleCodeClick(project, e)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-all duration-300 group/btn"
                      >
                        <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <span className="text-sm">Code</span>
                      </button>
                    ) : (
                      <button 
                        disabled
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 rounded-lg font-medium cursor-not-allowed opacity-60"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <span className="text-sm">Code (Inactif)</span>
                      </button>
                    )}
                    <button 
                      onClick={(e) => handleDetailsClick(project, e)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-primary/30 text-foreground rounded-lg font-medium hover:bg-primary/10 transition-all duration-300 group/btn"
                    >
                      <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm">Détails</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:scale-105 hover:shadow-lg transition-all duration-300">
            <span>Voir tous les projets</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div 
            ref={modalRef}
            className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl border border-primary/20 shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {selectedProject.title.charAt(0)}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{selectedProject.title}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded-md">
                      {selectedProject.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {selectedProject.year} • {selectedProject.company}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-xl flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Project Image */}
              <div className="aspect-video overflow-hidden rounded-xl bg-muted">
                <img
                  src={selectedProject.image || `/placeholder.svg?height=400&width=800&query=${encodeURIComponent(selectedProject.title)}`}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {selectedProject.features && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Fonctionnalités</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {selectedProject.achievements && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Réalisations</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.achievements.map((achievement: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200"
                      >
                        ✓ {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-primary/10 bg-muted/30">
              <div className="flex gap-3">
                {selectedProject.codeActive ? (
                  <button
                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code Source</span>
                  </button>
                ) : (
                  <button
                    disabled
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 rounded-lg font-medium cursor-not-allowed opacity-60"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code Source (Inactif)</span>
                  </button>
                )}
                <button
                  onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Voir le Projet</span>
                </button>
              </div>
              <button
                onClick={closeModal}
                className="px-6 py-2 border border-primary/30 text-foreground rounded-lg font-medium hover:bg-primary/10 transition-colors duration-200"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
