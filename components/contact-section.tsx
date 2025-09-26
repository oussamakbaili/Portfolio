"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Mail, 
  MapPin, 
  Clock, 
  Phone, 
  Send, 
  Github, 
  Linkedin, 
  CheckCircle,
  AlertCircle
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !formRef.current || !contactInfoRef.current) return

    // Header animation
    const headerElements = sectionRef.current.querySelectorAll('.gsap-fade-in')
    gsap.fromTo(headerElements, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
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

    // Contact info animation
    const contactItems = contactInfoRef.current.querySelectorAll('.contact-item')
    gsap.fromTo(contactItems, 
      { 
        opacity: 0, 
        x: -30,
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
          trigger: contactInfoRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Form animation
    const formElement = sectionRef.current.querySelector('.gsap-slide-right')
    if (formElement) {
      gsap.fromTo(formElement, 
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
            trigger: formElement,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Left section animation
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
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    )

  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        })
      } else {
        const errorData = await response.json()
        console.error('Erreur:', errorData.error)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Ussama9baili@gmail.com",
      description: "Send me an email anytime",
      color: "text-blue-400"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Casablanca, Morocco",
      description: "Available for remote work",
      color: "text-green-400"
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Open for projects",
      description: "Currently accepting new work",
      color: "text-purple-400"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+212 668 261 803",
      description: "Call me for urgent matters",
      color: "text-orange-400"
    }
  ]

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/oussamakbaili", icon: Github, color: "hover:text-gray-400" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/oussama-kbaili-2b674a275/", icon: Linkedin, color: "hover:text-blue-400" },
    { name: "Email", href: "mailto:Ussama9baili@gmail.com", icon: Mail, color: "hover:text-red-400" }
  ]

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-32 left-32 w-4 h-4 bg-primary/20 rotate-45 animate-pulse delay-700"></div>
        <div className="absolute bottom-32 right-32 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/25 rotate-12 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="gsap-fade-in opacity-100">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Let's Connect
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 sm:mb-8">
              <span className="text-primary">LET'S WORK</span>
              <span className="block text-slate-900 dark:text-white">TOGETHER</span>
            </h2>
            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* Left - Contact Info */}
          <div ref={contactInfoRef} className="space-y-12 sm:space-y-16">
            <div className="gsap-slide-left opacity-100">
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Get In Touch</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="contact-item group">
                    <div className="flex items-start gap-4 sm:gap-6 p-6 sm:p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500 group-hover:scale-110`}>
                        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2">{info.title}</h4>
                        <p className="text-primary font-semibold text-base sm:text-lg mb-1 sm:mb-2">{info.value}</p>
                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">{info.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="gsap-fade-in opacity-100">
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Follow Me</h4>
              <div className="flex gap-4 sm:gap-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center hover:from-primary/10 hover:to-primary/5 dark:hover:from-primary/20 dark:hover:to-primary/10 transition-all duration-500 hover:scale-110 hover:shadow-lg ${social.color}`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="gsap-slide-right opacity-100">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl shadow-primary/5">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">Send a Message</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name *</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name" 
                      required
                      className="h-12 bg-white/80 dark:bg-slate-700/80 border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name *</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name" 
                      required
                      className="h-12 bg-white/80 dark:bg-slate-700/80 border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email *</label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com" 
                    required
                    className="h-12 bg-white/80 dark:bg-slate-700/80 border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Company</label>
                  <Input 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name" 
                    className="h-12 bg-white/80 dark:bg-slate-700/80 border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject *</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?" 
                    required
                    className="h-12 bg-white/80 dark:bg-slate-700/80 border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, goals, and how I can help..." 
                    className="min-h-36 bg-white/80 dark:bg-slate-700/80 border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-primary/20 rounded-xl transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="gsap-fade-in opacity-100 mt-24 pt-12 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <p className="text-slate-600 dark:text-slate-400">
                © 2024 <span className="text-primary font-bold">Oussama Kbaili</span>. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
