"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"
import Link from "next/link"
import { 
  Menu, 
  X,
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
  MailIcon,
  CodeLogoIcon
} from "@/components/icons"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true) // Start collapsed
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!sidebarRef.current) return

    // Sidebar entrance animation - start collapsed
    gsap.fromTo(sidebarRef.current, 
      { x: -320, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )

  }, [])

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

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
    { name: "GitHub", href: "https://github.com/oussamakbaili", icon: GithubIcon, color: "hover:text-gray-400" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/oussama-kbaili-2b674a275/", icon: LinkedinIcon, color: "hover:text-blue-400" },
    { name: "Email", href: "mailto:Ussama9baili@gmail.com", icon: MailIcon, color: "hover:text-red-400" }
  ]

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      if (!isMobile) {
        setIsHovered(true)
        setIsCollapsed(false)
      }
    }, 200) // 200ms delay for subtle animation
  }

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false)
      setIsCollapsed(true)
    }, 100) // 100ms delay for smooth exit
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
    <>
      {/* Mobile Menu Button */}
      <button
        ref={menuButtonRef}
        onClick={handleMenuToggle}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 sm:w-12 sm:h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
      >
        {isOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
      </button>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 left-0 h-full bg-card/95 backdrop-blur-xl border-r border-primary/20 z-40 transform transition-all duration-700 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
          isCollapsed || isMobile ? 'w-16 sm:w-20' : 'w-80'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className={`border-b border-primary/10 transition-all duration-700 ease-out ${!isCollapsed && !isMobile ? 'p-6 lg:p-8' : 'p-3 sm:p-4'}`}>
            <div className={`flex items-center gap-4 mb-4 lg:mb-6 transition-all duration-700 ease-out ${!isCollapsed && !isMobile ? 'gap-4' : 'justify-center'}`}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-xl flex items-center justify-center group hover:scale-105 transition-transform duration-300 ease-out">
                <CodeLogoIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <div className={`transition-all duration-700 ease-out overflow-hidden ${!isCollapsed && !isMobile ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
                <h1 className="text-lg lg:text-xl font-bold text-foreground whitespace-nowrap">Oussama.dev</h1>
                <p className="text-xs lg:text-sm text-muted-foreground whitespace-nowrap">Full Stack Developer</p>
              </div>
            </div>
            
            <div className={`flex items-center gap-2 text-xs lg:text-sm text-muted-foreground transition-all duration-700 ease-out ${!isCollapsed && !isMobile ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="whitespace-nowrap">Disponible pour de nouveaux projets</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`flex-1 transition-all duration-700 ease-out ${!isCollapsed && !isMobile ? 'p-4 lg:p-6' : 'p-2 sm:p-4'}`}>
            <div className="space-y-1 sm:space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = getActivePage() === item.id
                
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`w-full flex items-center rounded-xl transition-all duration-500 ease-out group hover:scale-105 hover:shadow-lg ${
                      !isCollapsed && !isMobile ? 'gap-3 lg:gap-4 p-3 lg:p-4' : 'justify-center p-3 sm:p-4'
                    } ${
                      isActive 
                        ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                    }`}
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ease-out ${isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary group-hover:scale-110'}`} />
                    <div className={`flex-1 text-left transition-all duration-700 ease-out overflow-hidden ${!isCollapsed && !isMobile ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
                      <div className="text-sm lg:text-base font-medium transition-all duration-500 ease-out group-hover:translate-x-1 whitespace-nowrap">{item.name}</div>
                      <div className={`text-xs lg:text-sm transition-all duration-500 ease-out group-hover:translate-x-1 whitespace-nowrap ${isActive ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {item.description}
                      </div>
                    </div>
                    {isActive && !isCollapsed && !isMobile && <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 text-primary-foreground animate-pulse" />}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Social Links */}
          <div className={`border-t border-primary/10 transition-all duration-700 ease-out ${!isCollapsed && !isMobile ? 'p-4 lg:p-6' : 'p-2 sm:p-4'}`}>
            <h3 className={`text-xs lg:text-sm font-medium text-foreground mb-3 lg:mb-4 transition-all duration-700 ease-out ${!isCollapsed && !isMobile ? 'opacity-100' : 'opacity-0'}`}>Suivez-moi</h3>
            <div className={`grid gap-2 sm:gap-3 transition-all duration-700 ease-out ${!isCollapsed && !isMobile ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-500 ease-out group hover:scale-105 hover:shadow-lg ${social.color} ${
                      !isCollapsed && !isMobile ? 'gap-2 lg:gap-3 p-2 lg:p-3' : 'justify-center p-3 sm:p-4'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-out group-hover:scale-110" />
                    <span className={`text-xs lg:text-sm font-medium transition-all duration-700 ease-out group-hover:translate-x-1 overflow-hidden whitespace-nowrap ${!isCollapsed && !isMobile ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer */}
          <div className={`border-t border-primary/10 transition-all duration-700 ease-out ${!isCollapsed && !isMobile ? 'p-4 lg:p-6' : 'p-2 sm:p-4'}`}>
            <div className={`text-center transition-all duration-700 ease-out ${!isCollapsed && !isMobile ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-xs lg:text-sm text-muted-foreground mb-1 lg:mb-2 whitespace-nowrap">
                © 2024 Oussama Kbaili
              </p>
              <p className="text-xs lg:text-sm text-muted-foreground whitespace-nowrap">
                Basé à <span className="text-primary font-medium">Casablanca, Maroc</span>
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300 ease-out"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}