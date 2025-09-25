"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !imageRef.current || !floatingRef.current) return

    // Hero entrance animation
    const tl = gsap.timeline()
    
    // Animate title words with stagger
    const titleWords = titleRef.current.querySelectorAll('.title-word')
    tl.from(titleWords, {
      y: 100,
      opacity: 0,
      rotationX: 90,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2
    })

    // Animate image with scale and rotation
    tl.from(imageRef.current, {
      scale: 0.8,
      rotation: 10,
      opacity: 0,
      duration: 1.5,
      ease: "back.out(1.7)"
    }, "-=0.8")

    // Floating element animation
    tl.from(floatingRef.current, {
      scale: 0,
      rotation: 180,
      duration: 0.8,
      ease: "back.out(2)"
    }, "-=0.5")

    // Continuous floating animation
    gsap.to(floatingRef.current, {
      y: -10,
      rotation: 5,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    })

    // Cursor blinking animation
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      })
    }

    // Parallax effect on scroll
    gsap.to(imageRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    })

  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/8 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        {/* Profile Card */}
        <div className="bg-card/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-primary/20 shadow-2xl">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
            {/* Profile Image */}
            <div ref={imageRef} className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
              
              {/* Main image container */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-4 border-primary/30 group-hover:border-primary/50 transition-all duration-500">
                <img
                  src="/ussama.jpg"
                  alt="Oussama Kbaili"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
                Oussama Kbaili
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground underline">
                @oussama_kbaili
              </p>
            </div>

            {/* Bio */}
            <div className="max-w-2xl">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">
                Ingénieur en informatique passionné par le développement full-stack et l'intelligence artificielle, 
                je consacre mon expertise à concevoir des solutions technologiques innovantes. Mon approche allie 
                maîtrise technique approfondie et vision stratégique pour transformer les idées complexes en 
                applications performantes et évolutives.
              </p>
            </div>

            {/* Welcome Message */}
            <div className="text-primary font-medium text-base sm:text-lg">
              &gt; Bienvenue sur mon portfolio !
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
              <a 
                href="/works"
                className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Voir mes projets</span>
              </a>
              <a 
                href="/contact"
                className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-xl font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Me contacter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="gsap-fade-in mt-12 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm">
              Basé à <span className="text-primary font-medium">Casablanca, Maroc</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
