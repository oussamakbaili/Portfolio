"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Twitter, Mail, Code, Home } from "lucide-react"
import { gsap } from "gsap"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ["hero", "works", "about", "skills", "contact"]
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      // Animate menu opening
      if (menuRef.current) {
        gsap.fromTo(menuRef.current, 
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
        )
      }
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Logo animation on scroll
  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        scale: scrolled ? 0.9 : 1,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }, [scrolled])

  const navItems = [
    { name: "HOME", href: "#hero", id: "hero" },
    { name: "WORKS", href: "#works", id: "works" },
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "SKILLS", href: "#skills", id: "skills" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ]

  const socialLinks = [
    { name: "GITHUB", href: "https://github.com/oussama-kbaili", icon: Github, color: "hover:text-gray-400" },
    { name: "LINKEDIN", href: "https://linkedin.com/in/oussama-kbaili", icon: Linkedin, color: "hover:text-blue-400" },
    { name: "TWITTER", href: "https://twitter.com/oussama_kbaili", icon: Twitter, color: "hover:text-blue-300" },
    { name: "EMAIL", href: "mailto:oussama@kbaili.dev", icon: Mail, color: "hover:text-red-400" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with animation */}
            <div ref={logoRef} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary tracking-tight">
                Oussama.dev
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-sm font-medium tracking-wider transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
            >
              <span className="text-sm font-medium tracking-wider">MENU</span>
              <div className="relative w-6 h-6">
                <Menu 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
                <X 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile/Desktop Fullscreen Menu */}
      {isOpen && (
        <div 
          ref={menuRef}
          className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-xl"
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-xl font-bold text-primary">Oussama.dev</div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wider">CLOSE</span>
                <X size={20} />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Navigation Links */}
                <div className="space-y-4 mb-20">
                  {navItems.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="group block text-5xl md:text-7xl lg:text-8xl font-black text-primary hover:text-primary/80 transition-all duration-500 hover:scale-105"
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        textShadow: "0 0 30px rgba(0,0,0,0.1)"
                      }}
                    >
                      <span className="relative inline-block">
                        {item.name}
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </span>
                    </button>
                  ))}
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center gap-4 p-8 rounded-2xl border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 group hover:scale-105 hover:shadow-lg`}
                        style={{ animationDelay: `${(index + 5) * 0.1}s` }}
                      >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon
                            size={32}
                            className={`text-primary group-hover:scale-110 transition-transform duration-300 ${social.color}`}
                          />
                        </div>
                        <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300 tracking-wider">
                          {social.name}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-primary/20 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>BASED IN <span className="text-primary font-bold">CASABLANCA, MOROCCO</span></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
