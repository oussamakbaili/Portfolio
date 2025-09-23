"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function WorksSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "E-COMMERCE PLATFORM",
      category: "FULL-STACK",
      description: "Modern e-commerce solution with React, Next.js, and Stripe integration",
      image: "/modern-ecommerce-dashboard.png",
      tech: ["React", "Next.js", "Node.js", "MongoDB"],
    },
    {
      title: "FINTECH DASHBOARD",
      category: "FRONTEND",
      description: "Real-time financial dashboard with advanced data visualization",
      image: "/financial-dashboard-charts.png",
      tech: ["React", "TypeScript", "D3.js", "WebSocket"],
    },
    {
      title: "MOBILE APP API",
      category: "BACKEND",
      description: "Scalable REST API for mobile application with microservices architecture",
      image: "/api-documentation-interface.jpg",
      tech: ["Node.js", "Express", "PostgreSQL", "Docker"],
    },
    {
      title: "REAL-TIME CHAT APP",
      category: "FULL-STACK",
      description: "WebSocket-based chat application with real-time messaging and file sharing",
      image: "/chat-application-interface.png",
      tech: ["React", "Socket.io", "Node.js", "Redis"],
    },
    {
      title: "AI CONTENT GENERATOR",
      category: "FULL-STACK",
      description: "AI-powered content generation platform with OpenAI integration",
      image: "/ai-content-generator.png",
      tech: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
    },
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
    <section id="works" className="py-32 bg-background" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="gsap-fade-in mb-20">
          <h2 className="text-7xl md:text-9xl font-black text-primary mb-6 tracking-tight">WORKS</h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            Selected projects showcasing expertise in full-stack development, from concept to deployment.
          </p>
        </div>

        {/* Stacked cards wrapper */}
        <div ref={wrapperRef} className="relative h-screen flex items-center justify-center">
          <div 
            ref={cardsRef} 
            className="relative w-96 h-[600px] perspective-1000"
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="work-card absolute inset-0 w-full h-full group cursor-pointer will-change-transform"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-full h-full bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-2xl backdrop-blur-sm">
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <img
                      src={
                        project.image ||
                        `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(project.title)}`
                      }
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-8 space-y-6 text-center">
                    <div>
                      <span className="text-xs text-primary font-bold tracking-widest uppercase mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-black text-foreground leading-tight tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center pt-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-bold tracking-wider uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <div className="w-8 h-px bg-primary/30"></div>
            <p className="text-xs tracking-widest uppercase font-medium">Scroll to explore</p>
            <div className="w-8 h-px bg-primary/30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
