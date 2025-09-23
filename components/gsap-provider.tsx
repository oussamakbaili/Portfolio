"use client"

import type React from "react"

import { useEffect } from "react"

declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initGSAP = () => {
      if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
        const { gsap } = window
        const { ScrollTrigger } = window

        gsap.registerPlugin(ScrollTrigger)

        // Fade in animations
        gsap.utils.toArray(".gsap-fade-in").forEach((element: any) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })

        // Slide left animations
        gsap.utils.toArray(".gsap-slide-left").forEach((element: any) => {
          gsap.fromTo(
            element,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })

        // Slide right animations
        gsap.utils.toArray(".gsap-slide-right").forEach((element: any) => {
          gsap.fromTo(
            element,
            { opacity: 0, x: 50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })

        // Scale animations
        gsap.utils.toArray(".gsap-scale").forEach((element: any) => {
          gsap.fromTo(
            element,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })

        // Hero text animation
        const heroTitle = document.querySelector(".hero-title")
        if (heroTitle) {
          gsap.fromTo(
            heroTitle,
            { opacity: 0, scale: 0.9, rotationX: -15 },
            {
              opacity: 1,
              scale: 1,
              rotationX: 0,
              duration: 1.2,
              ease: "power3.out",
              delay: 0.3,
            },
          )
        }

        // Floating animation for geometric elements
        gsap.utils.toArray(".floating-element").forEach((element: any) => {
          gsap.to(element, {
            y: -20,
            duration: 2,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
          })
        })
      }
    }

    // Check if GSAP is loaded
    const checkGSAP = () => {
      if (window.gsap && window.ScrollTrigger) {
        initGSAP()
      } else {
        setTimeout(checkGSAP, 100)
      }
    }

    checkGSAP()
  }, [])

  return <>{children}</>
}
