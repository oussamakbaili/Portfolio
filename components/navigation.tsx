"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { name: "WORKS", href: "#works" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" },
  ]

  const socialLinks = [
    { name: "GITHUB", href: "#", icon: Github },
    { name: "LINKEDIN", href: "#", icon: Linkedin },
    { name: "TWITTER", href: "#", icon: Twitter },
    { name: "EMAIL", href: "mailto:oussama@kbaili.dev", icon: Mail },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Kbaili.dev</div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-foreground hover:text-primary"
            >
              <span className="text-sm font-medium tracking-wider">MENU</span>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-background">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="text-2xl font-bold text-primary">Kbaili.dev</div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-foreground hover:text-primary"
              >
                <span className="text-sm font-medium tracking-wider">CLOSE</span>
                <X size={20} />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 flex items-start justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Navigation Links */}
                <div className="space-y-8 mb-16">
                  {navItems.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block text-4xl md:text-6xl lg:text-8xl font-black text-primary hover:text-primary/80 transition-colors duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                        style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                      >
                        <Icon
                          size={24}
                          className="text-primary group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                          {social.name}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                BASED IN <span className="text-primary font-medium">CASABLANCA, MOROCCO</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
