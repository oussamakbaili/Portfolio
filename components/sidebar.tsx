"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"
import Link from "next/link"
import { 
  ChevronRight
} from "lucide-react"
import { 
  HomeIcon, 
  CodeIcon, 
  UserIcon, 
  BriefcaseIcon, 
  MessageSquareIcon, 
  GithubIcon,
  LinkedinIcon,
  MailIcon
} from "@/components/icons"

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const textElementsRef = useRef<(HTMLElement | null)[]>([])
  const linksRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  const headerTextRef = useRef<HTMLDivElement>(null)
  const socialHeaderRef = useRef<HTMLDivElement>(null)

  const menuItems = [
    { 
      id: "home", 
      name: "Accueil", 
      icon: HomeIcon, 
      href: "/",
      description: "Page d'accueil"
    },
    { 
      id: "about", 
      name: "À Propos", 
      icon: UserIcon, 
      href: "/about",
      description: "Mon parcours"
    },
    { 
      id: "works", 
      name: "Projets", 
      icon: BriefcaseIcon, 
      href: "/works",
      description: "Mes réalisations"
    },
    { 
      id: "skills", 
      name: "Compétences", 
      icon: CodeIcon, 
      href: "/skills",
      description: "Technologies"
    },
    { 
      id: "contact", 
      name: "Contact", 
      icon: MessageSquareIcon, 
      href: "/contact",
      description: "Me contacter"
    }
  ]

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/oussamakbaili", 
      icon: GithubIcon, 
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-900/20"
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/oussama-kbaili-2b674a275/", 
      icon: LinkedinIcon, 
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20"
    },
    { 
      name: "Email", 
      href: "mailto:Ussama9baili@gmail.com", 
      icon: MailIcon, 
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-500/20"
    }
  ]

  useEffect(() => {
    if (!sidebarRef.current) return

    // Initial setup - sidebar starts collapsed on the left
    gsap.set(sidebarRef.current, {
      width: "80px",
      opacity: 1
    })

    // Set initial state for text elements - hidden
    if (headerTextRef.current) {
      gsap.set(headerTextRef.current, { opacity: 0, x: -20 })
    }
    if (socialHeaderRef.current) {
      gsap.set(socialHeaderRef.current, { opacity: 0, x: -20 })
    }
    
    textElementsRef.current.forEach(el => {
      if (el) {
        gsap.set(el, { opacity: 0, x: -20 })
      }
    })

    // Entrance animation
    gsap.fromTo(sidebarRef.current, 
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    )

  }, [])

  const handleMouseEnter = () => {
    if (!sidebarRef.current) return
    
    setIsExpanded(true)

    // Animate sidebar expansion
    gsap.to(sidebarRef.current, {
      width: "280px",
      duration: 0.5,
      ease: "power3.out"
    })

    // Animate text appearance with stagger
    if (headerTextRef.current) {
      gsap.to(headerTextRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        delay: 0.2,
        ease: "power2.out"
      })
    }

    if (socialHeaderRef.current) {
      gsap.to(socialHeaderRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        delay: 0.3,
        ease: "power2.out"
      })
    }

    textElementsRef.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          delay: 0.1 + (index * 0.05),
          ease: "power2.out"
        })
      }
    })
  }

  const handleMouseLeave = () => {
    if (!sidebarRef.current) return
    
    setIsExpanded(false)

    // Animate text disappearance
    const textElements = [headerTextRef.current, socialHeaderRef.current, ...textElementsRef.current].filter(Boolean)
    
    gsap.to(textElements, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      ease: "power2.in"
    })

    // Animate sidebar collapse
    gsap.to(sidebarRef.current, {
      width: "80px",
      duration: 0.5,
      delay: 0.1,
      ease: "power3.out"
    })
  }

  const getActivePage = () => {
    if (pathname === '/') return 'home'
    if (pathname === '/about') return 'about'
    if (pathname === '/works') return 'works'
    if (pathname === '/skills') return 'skills'
    if (pathname === '/contact') return 'contact'
    return 'home'
  }

  return (
    <aside
      ref={sidebarRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed top-0 left-0 h-screen bg-card/95 backdrop-blur-xl border-r border-primary/20 z-50 shadow-2xl overflow-hidden"
      style={{
        backdropFilter: 'blur(20px)',
        background: 'hsl(var(--card) / 0.95)',
        width: '80px' // Initial collapsed width
      }}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-primary/10 flex items-center">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden">
            <img 
              src="/logo_ussama.png" 
              alt="Oussama Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>
          
          <div ref={headerTextRef} className="ml-4 overflow-hidden">
            <h1 className="text-lg font-bold text-foreground whitespace-nowrap">Oussama.dev</h1>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="whitespace-nowrap">Disponible</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav ref={linksRef} className="flex-1 p-4 space-y-2">
          <div className="mb-4 overflow-hidden">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap opacity-0">Navigation</h2>
          </div>
          
          {menuItems.map((item, index) => {
            const Icon = item.icon
            const isActive = getActivePage() === item.id
            
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`group flex items-center p-3 rounded-xl transition-all duration-300 hover:shadow-lg ${
                  isActive && isExpanded
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : isActive
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                  isActive && isExpanded
                    ? 'bg-primary-foreground/20' 
                    : isActive
                    ? 'bg-primary/20'
                    : 'bg-primary/10 group-hover:bg-primary/20'
                }`}>
                  <Icon className={`w-4 h-4 transition-all duration-300 ${
                    isActive
                      ? 'text-primary' 
                      : 'text-primary group-hover:scale-110'
                  }`} />
                </div>
                
                <div 
                  ref={el => { textElementsRef.current[index] = el }}
                  className="ml-3 overflow-hidden"
                >
                  <div className={`font-medium text-sm transition-all duration-300 group-hover:translate-x-1 whitespace-nowrap ${
                    isActive ? 'text-primary-foreground' : ''
                  }`}>
                    {item.name}
                  </div>
                  <div className={`text-xs transition-all duration-300 group-hover:translate-x-1 whitespace-nowrap ${
                    isActive 
                      ? 'text-primary-foreground/70' 
                      : 'text-muted-foreground'
                  }`}>
                    {item.description}
                  </div>
                </div>

                {isActive && isExpanded && (
                  <ChevronRight className="w-3 h-3 text-primary-foreground animate-pulse ml-auto flex-shrink-0" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Social Links */}
        <div ref={socialRef} className="p-4 border-t border-primary/10">
          <div ref={socialHeaderRef} className="mb-3 overflow-hidden">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap">Social</h2>
          </div>
          
          <div className="space-y-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              const socialIndex = menuItems.length + index + 1
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center p-2 rounded-lg transition-all duration-300 hover:shadow-md ${social.color} ${social.bgColor}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span 
                    ref={el => { textElementsRef.current[socialIndex] = el }}
                    className="text-xs font-medium transition-all duration-300 group-hover:translate-x-1 ml-3 overflow-hidden whitespace-nowrap"
                  >
                    {social.name}
                  </span>
                </a>
              )
            })}
          </div>

          {/* Footer */}
          <div className="mt-4 pt-3 border-t border-primary/10 overflow-hidden">
            <div 
              ref={el => { textElementsRef.current[menuItems.length + socialLinks.length + 1] = el }}
              className="text-center"
            >
              <p className="text-xs text-muted-foreground whitespace-nowrap">
                © 2025 Oussama Kbaili
              </p>
              <p className="text-xs text-muted-foreground whitespace-nowrap mt-1">
                <span className="text-primary font-medium">Casablanca</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}