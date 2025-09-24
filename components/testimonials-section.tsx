"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      company: "TechCorp",
      content: "Oussama is one of the most talented developers I've worked with. His attention to detail and technical expertise are exceptional. He delivered our project ahead of schedule and exceeded all our expectations.",
      avatar: "/professional-woman-portrait.png",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      name: "Ahmed Benali",
      role: "CTO at Startup Morocco",
      company: "Startup Morocco",
      content: "Working with Oussama was a game-changer for our startup. He built a scalable web application that handles thousands of users daily. His code is clean, well-documented, and maintainable.",
      avatar: "/professional-man-portrait.png",
      rating: 5,
      project: "SaaS Dashboard"
    },
    {
      name: "Marie Dubois",
      role: "Design Director at Creative Agency",
      company: "Creative Agency",
      content: "Oussama's ability to translate complex designs into pixel-perfect code is remarkable. He understands both the technical and creative aspects of web development, making him a valuable team member.",
      avatar: "/professional-woman-portrait.png",
      rating: 5,
      project: "Portfolio Website"
    },
    {
      name: "Youssef Alami",
      role: "Founder at FinTech Startup",
      company: "FinTech Startup",
      content: "We needed a secure, high-performance financial application, and Oussama delivered exactly that. His expertise in modern web technologies and security best practices is outstanding.",
      avatar: "/professional-man-portrait.png",
      rating: 5,
      project: "Financial Dashboard"
    },
    {
      name: "Lisa Chen",
      role: "Marketing Director at E-commerce Company",
      company: "E-commerce Company",
      content: "Oussama helped us optimize our website performance, resulting in a 40% increase in conversion rates. His technical skills and business understanding make him an ideal development partner.",
      avatar: "/professional-woman-portrait.png",
      rating: 5,
      project: "Performance Optimization"
    }
  ]

  useEffect(() => {
    if (!sectionRef.current || !carouselRef.current) return

    // Testimonials animation
    const testimonialCards = carouselRef.current.querySelectorAll('.testimonial-card')
    gsap.fromTo(testimonialCards, 
      { 
        opacity: 0, 
        y: 50,
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
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    )

  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section ref={sectionRef} id="testimonials" className="py-32 bg-gradient-to-br from-secondary/20 via-background to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="gsap-fade-in">
            <h2 className="text-6xl md:text-8xl font-black text-primary leading-tight mb-6">
              CLIENT
              <span className="block text-gradient">TESTIMONIALS</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              What clients and colleagues say about working with me
            </p>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-primary/20">
              <Quote className="w-24 h-24" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{currentTestimonial.content}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Quote className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{currentTestimonial.name}</h4>
                    <p className="text-primary font-medium">{currentTestimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{currentTestimonial.project}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6 text-primary" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div ref={carouselRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div key={index} className="testimonial-card group">
              <div className="bg-card/50 rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  "{testimonial.content.length > 120 ? testimonial.content.substring(0, 120) + '...' : testimonial.content}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 gsap-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-card/30 rounded-2xl p-8 border border-primary/10">
              <div className="text-4xl font-black text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
            </div>
            <div className="bg-card/30 rounded-2xl p-8 border border-primary/10">
              <div className="text-4xl font-black text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
            </div>
            <div className="bg-card/30 rounded-2xl p-8 border border-primary/10">
              <div className="text-4xl font-black text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
            <div className="bg-card/30 rounded-2xl p-8 border border-primary/10">
              <div className="text-4xl font-black text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
