"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function GeometricElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create floating animation for geometric shapes
    const shapes = containerRef.current.querySelectorAll('.floating-shape')
    
    shapes.forEach((shape, index) => {
      // Random floating animation
      gsap.to(shape, {
        y: `random(-20, 20)`,
        x: `random(-15, 15)`,
        rotation: `random(-10, 10)`,
        duration: `random(3, 6)`,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.5
      })

      // Parallax effect on scroll
      gsap.to(shape, {
        y: `random(-50, 50)`,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      })
    })

    // Pulsing animation for some shapes
    const pulsingShapes = containerRef.current.querySelectorAll('.pulsing-shape')
    pulsingShapes.forEach((shape) => {
      gsap.to(shape, {
        scale: 1.1,
        opacity: 0.7,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      })
    })

  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="floating-shape absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-lg transform rotate-12"></div>
      <div className="floating-shape pulsing-shape absolute top-40 right-20 w-12 h-12 bg-primary/20 rounded-full"></div>
      <div className="floating-shape absolute bottom-40 left-20 w-20 h-20 bg-primary/5 rounded-lg transform -rotate-12"></div>
      <div className="floating-shape pulsing-shape absolute bottom-20 right-10 w-14 h-14 bg-primary/15 rounded-full"></div>
      
      {/* Additional geometric elements */}
      <div className="floating-shape absolute top-1/3 left-1/4 w-8 h-8 bg-primary/20 rounded-full"></div>
      <div className="floating-shape absolute top-2/3 right-1/3 w-12 h-12 border-2 border-primary/15 rounded-lg rotate-45"></div>
      <div className="floating-shape pulsing-shape absolute top-1/2 left-1/2 w-6 h-6 bg-primary/30 rounded-full"></div>
      
      {/* Gradient orbs */}
      <div className="floating-shape absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full blur-xl"></div>
      <div className="floating-shape absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-tr from-primary/8 to-primary/5 rounded-full blur-2xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  )
}
