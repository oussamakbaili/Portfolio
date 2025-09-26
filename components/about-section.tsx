"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Users, Award, Coffee, Download, ExternalLink } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !statsRef.current || !timelineRef.current) return

    // Left section (My Story) animation
    const leftElements = sectionRef.current.querySelectorAll('.gsap-slide-left')
    gsap.fromTo(leftElements, 
      { 
        opacity: 0, 
        x: -50,
        scale: 0.95
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Stats animation
    const statsElements = sectionRef.current.querySelectorAll('.gsap-fade-in')
    gsap.fromTo(statsElements, 
      { 
        opacity: 0, 
        y: 30,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Stats counter animation
    const stats = statsRef.current.querySelectorAll('.stat-number')
    stats.forEach((stat) => {
      const endValue = parseInt(stat.getAttribute('data-end') || '0')
      gsap.fromTo(stat, 
        { textContent: 0 },
        {
          textContent: endValue,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Timeline animation
    const timelineItems = timelineRef.current.querySelectorAll('.timeline-item')
    gsap.fromTo(timelineItems, 
      { 
        opacity: 0, 
        x: -50,
        scale: 0.9
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Right section (Career Timeline) animation
    const rightSection = sectionRef.current.querySelector('.space-y-8')
    if (rightSection) {
      gsap.fromTo(rightSection, 
        { 
          opacity: 0, 
          x: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightSection,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

  }, [])

  const stats = [
    { number: 15, suffix: "+", label: "Projets Réalisés" },
    { number: 3, suffix: "+", label: "Années d'Expérience" },
    { number: 5, suffix: "+", label: "Clients Satisfaits" },
    { number: 100, suffix: "%", label: "Satisfaction Client" }
  ]

  const timeline = [
    {
      year: "2025",
      company: "CarAgency",
      title: "Web Developer (Freelance)",
      description: "Développement d'une plateforme e-commerce complète pour la vente de véhicules d'occasion avec système de recherche avancée, galerie photos interactive, calculatrice de financement, et interface d'administration pour la gestion des stocks et des ventes.",
      technologies: ["Laravel", "React", "MySQL", "Stripe API"],
      achievements: ["+40% de conversion", "Interface responsive", "Système de paiement sécurisé"]
    },
    {
      year: "2025",
      company: "Association Initiative Al Amal",
      title: "Web Developer (Stage)",
      description: "Développement d'une plateforme web unifiée pour l'administration, enseignants et étudiants avec automatisation de présence via QR Code et gestion complète des cours, notes et emplois du temps.",
      technologies: ["Laravel", "HTML5", "CSS3", "JavaScript", "QR Code API"],
      achievements: ["Automatisation 100%", "Interface intuitive", "Gestion temps réel"]
    },
    {
      year: "2025",
      company: "Moroccan Chess and Gaming Club",
      title: "Testeur & Quality Consultant (Freelance)",
      description: "Assurance qualité des versions bêta, collaboration avec l'équipe de développement pour identifier et corriger les anomalies techniques, adoption des meilleures pratiques de développement.",
      technologies: ["Testing Tools", "JIRA", "Git", "CI/CD"],
      achievements: ["-60% de bugs", "Processus optimisé", "Qualité améliorée"]
    },
    {
      year: "2024",
      company: "Société Telepac Technologie",
      title: "Web Developer (Stage)",
      description: "Conception et développement d'une plateforme web de gestion médicale avec interfaces intuitives pour la gestion des dossiers patients, planification des rendez-vous et tableau de bord dynamique.",
      technologies: ["Laravel", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
      achievements: ["Solution complète", "Interface ergonomique", "Prêt production"]
    },
    {
      year: "2023",
      company: "Société SCZ Le Chameau",
      title: "Web Developer (Stage)",
      description: "Développement de SuperStock, une plateforme de gestion de stock avec calcul automatique en temps réel, génération de factures et bons de commande PDF, et suivi des mouvements de stock.",
      technologies: ["Django", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
      achievements: ["Temps réel", "PDF automatique", "Traçabilité complète"]
    },
    {
      year: "2021",
      company: "Arcane Studios",
      title: "Développeur Backend (Freelance)",
      description: "Développement d'APIs robustes et solutions backend sur mesure incluant systèmes de gestion de données, authentification utilisateurs et logique métier pour projets clients.",
      technologies: ["Django", "Laravel", "MySQL", "PostgreSQL", "REST APIs"],
      achievements: ["APIs performantes", "Livraison rapide", "Solutions sur mesure"]
    }
  ]


  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-32 bg-background relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - MY STORY */}
          <div className="space-y-8 sm:space-y-12">
            <div className="gsap-slide-left opacity-100">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 sm:mb-8">MY STORY</h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Ingénieur d'État en Informatique spécialisé en développement full-stack, je consacre mon expertise 
                  à concevoir des solutions technologiques innovantes. Avec plus de 3 ans d'expérience pratique, 
                  j'ai eu le privilège de travailler avec des startups et des entreprises établies pour construire 
                  des applications web évolutives et performantes.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Mon parcours a commencé par une fascination pour la façon dont les choses fonctionnent sur le web, 
                  et cela a évolué vers une passion pour créer des solutions numériques qui ont un impact réel. 
                  Je me spécialise dans Laravel, Django, React, et les technologies web modernes, avec un focus 
                  sur l'optimisation des performances, l'expérience utilisateur et l'architecture de code propre.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="gsap-fade-in opacity-100 text-center p-4 sm:p-6 bg-card/50 rounded-xl sm:rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-black text-primary mb-2">
                    <span className="stat-number" data-end={stat.number}>0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CV Section */}
            <div className="mt-8 sm:mt-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">Mon CV</h2>
              <div className="bg-card/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                  {/* CV Info */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Download className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-foreground">CV - Oussama Kbaili</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">Software Engineer</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Expérience Full-Stack</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Technologies Modernes</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Projets Innovants</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Download Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
                    <a
                      href="/cv/cv-oussama-kbaili.pdf"
                      download="CV-Oussama-Kbaili.pdf"
                      className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors duration-200 text-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Télécharger PDF</span>
                    </a>
                    
                    <a
                      href="/cv/cv-oussama-kbaili.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Voir en ligne</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right - CAREER TIMELINE */}
          <div ref={timelineRef} className="space-y-8 opacity-100">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">CAREER TIMELINE</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item opacity-100 relative pl-20 pb-8">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="bg-card/50 rounded-2xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-bold text-primary-foreground bg-primary px-3 py-1 rounded-full shadow-sm">
                        {item.year}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {item.company}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="mb-4">
                        <h5 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                          Technologies
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {item.achievements && (
                      <div>
                        <h5 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                          Réalisations
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <span
                              key={achIndex}
                              className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-md border border-green-200 hover:bg-green-100 transition-colors duration-300"
                            >
                              ✓ {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
