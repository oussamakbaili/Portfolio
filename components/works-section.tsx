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
    if (!containerRef.current) return

    const cards = gsap.utils.toArray(".project-card") as HTMLElement[]
    const timelines: gsap.core.Timeline[] = []
    const eventListeners: Array<{ element: HTMLElement; type: string; handler: () => void }> = []
    
    // Set initial state for all cards
      gsap.set(cards, {
      opacity: 0,
      y: 60,
      scale: 0.95,
    })

    // Animate cards on scroll with stagger
    const cardTl = gsap.timeline({
        scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      }
    })

    cardTl.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: {
        amount: 0.6,
        from: "start",
      }
    })

    // Individual card hover animations with delay to ensure DOM is ready
    setTimeout(() => {
      cards.forEach((card) => {
        if (!card) return
        
        const cardContent = card.querySelector('.card-content') as HTMLElement
        const cardImage = card.querySelector('.card-image') as HTMLElement
        const cardOverlay = card.querySelector('.card-overlay') as HTMLElement
        const cardTitle = card.querySelector('.card-title') as HTMLElement
        const cardMeta = card.querySelector('.card-meta') as HTMLElement
        const cardTech = card.querySelector('.card-tech') as HTMLElement
        const cardButton = card.querySelector('.card-button') as HTMLElement

        // Only proceed if essential elements exist (reduced requirements)
        if (cardImage && cardOverlay) {
        try {
          // Create hover timeline
          const hoverTl = gsap.timeline({ paused: true })
          timelines.push(hoverTl)
          
          // Animate core elements
          hoverTl
            .to(cardImage, { 
              scale: 1.05, 
              duration: 0.4, 
              ease: "power2.out" 
            }, 0)
            .to(cardOverlay, { 
              opacity: 1, 
              duration: 0.3, 
              ease: "power2.out" 
            }, 0)

          // Animate optional elements if they exist
          if (cardTitle) {
            hoverTl.to(cardTitle, { 
              y: -4, 
              duration: 0.3, 
              ease: "power2.out" 
            }, 0.1)
          }
          
          if (cardMeta) {
            hoverTl.to(cardMeta, { 
              opacity: 0.8, 
              y: -2,
              duration: 0.3, 
              ease: "power2.out" 
            }, 0.1)
          }
          
          if (cardTech) {
            hoverTl.to(cardTech, { 
              y: -3,
              duration: 0.3, 
              ease: "power2.out" 
            }, 0.1)
          }
          
          if (cardButton) {
            hoverTl.to(cardButton, { 
              y: -2,
              scale: 1.02,
              duration: 0.3, 
              ease: "power2.out" 
            }, 0.2)
          }

          // Mouse event handlers
          const handleMouseEnter = () => {
            if (hoverTl && typeof hoverTl.play === 'function') {
              hoverTl.play()
            }
          }

          const handleMouseLeave = () => {
            if (hoverTl && typeof hoverTl.reverse === 'function') {
              hoverTl.reverse()
            }
          }

          // Add event listeners and track them for cleanup
          card.addEventListener('mouseenter', handleMouseEnter)
          card.addEventListener('mouseleave', handleMouseLeave)
          
          eventListeners.push(
            { element: card, type: 'mouseenter', handler: handleMouseEnter },
            { element: card, type: 'mouseleave', handler: handleMouseLeave }
          )
        } catch (error) {
          console.warn('Failed to create hover animation for card:', error)
        }
      }
      })
    }, 100) // Small delay to ensure DOM is fully ready

    // Animate section title
    const title = containerRef.current.querySelector('.section-title')
    const subtitle = containerRef.current.querySelector('.section-subtitle')
    
    if (title && subtitle) {
      gsap.fromTo([title, subtitle], 
          {
            opacity: 0,
          y: 30 
          },
          {
            opacity: 1,
            y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
            scrollTrigger: {
            trigger: title,
              start: "top 80%",
              toggleActions: "play none none reverse",
          }
        }
      )
    }

    // Cleanup function
    return () => {
      // Kill all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      
      // Kill all timelines
      timelines.forEach(timeline => {
        if (timeline && typeof timeline.kill === 'function') {
          timeline.kill()
        }
      })
      
      // Remove all event listeners
      eventListeners.forEach(({ element, type, handler }) => {
        if (element && element.removeEventListener) {
          element.removeEventListener(type, handler)
        }
      })
    }
  }, [])

  return (
    <section id="works" className="py-16 sm:py-32 bg-background" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-20 text-center">
          <h2 className="section-title opacity-100 text-3xl sm:text-5xl md:text-7xl font-bold text-primary mb-3 sm:mb-4 tracking-tight">
            Projets Sélectionnés
          </h2>
          <p className="section-subtitle opacity-100 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Une collection de mes meilleures réalisations techniques
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects && projects.length > 0 ? projects.map((project, index) => (
            <article 
              key={index} 
              className="project-card opacity-100 group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-gray-200 dark:hover:border-gray-700">
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-800">
                  <div className="aspect-[4/3]">
                  <img
                    src={
                      project.image ||
                        `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(project.title)}`
                    }
                    alt={project.title}
                      className="card-image w-full h-full object-cover"
                    />
                    <div className="card-overlay absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="inline-block px-2 sm:px-3 py-1 text-xs font-medium text-white bg-black/70 backdrop-blur-sm rounded-full">
                        {project.category}
                      </span>
                  </div>

                  {/* View Project Indicator */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content p-4 sm:p-6 space-y-3 sm:space-y-4">
                  {/* Project Title & Meta */}
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="card-title text-lg sm:text-xl font-semibold text-gray-900 dark:text-white leading-tight transition-colors duration-300 group-hover:text-primary">
                      {project.title}
                    </h3>
                    <div className="card-meta flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      <span>{project.company}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                </div>
                
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="card-tech">
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {project.tech && project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-2 sm:px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech && project.tech.length > 3 && (
                        <span className="inline-block px-2 sm:px-2.5 py-1 text-xs text-gray-500 dark:text-gray-400">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="card-button pt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                  {project.achievements && project.achievements[0] && (
                          <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                        {project.achievements[0]}
                      </span>
                    </div>
                  )}
                      </div>
                      <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200">
                        Voir plus →
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Aucun projet à afficher pour le moment.</p>
            </div>
          )}
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
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden"
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
                  {selectedProject.tech && selectedProject.tech.map((tech: string, index: number) => (
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
              {selectedProject.features && selectedProject.features.length > 0 && (
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
              {selectedProject.achievements && selectedProject.achievements.length > 0 && (
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
