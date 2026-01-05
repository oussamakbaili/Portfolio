"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Code, 
  Database, 
  Cloud, 
  Palette, 
  Smartphone, 
  Brain,
  Monitor,
  Server,
  GitBranch,
  Zap,
  Shield,
  Layers,
  Award,
  TrendingUp,
  Target,
  CheckCircle
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const toolsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !skillsRef.current || !toolsRef.current) return

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
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Technology Stack section animation
    const slideUpElements = sectionRef.current.querySelectorAll('.gsap-slide-up')
    gsap.fromTo(slideUpElements, 
      { 
        opacity: 0, 
        y: 30,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: slideUpElements[0],
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Tools cards animation
    const toolCards = toolsRef.current.querySelectorAll('.tool-card')
    gsap.fromTo(toolCards, 
      { 
        opacity: 0, 
        y: 30,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: toolsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Skills progress bars animation
    const progressBars = skillsRef.current.querySelectorAll('.progress-bar')
    progressBars.forEach((bar) => {
      const width = bar.getAttribute('data-width')
      gsap.fromTo(bar, 
        { width: 0 },
        {
          width: `${width}%`,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

  }, [])

  const skills = [
    { 
      name: "Frontend Development", 
      level: 95, 
      icon: Monitor, 
      color: "text-blue-500",
      description: "Next.js, TypeScript, Tailwind CSS",
      category: "Development"
    },
    { 
      name: "Backend Architecture", 
      level: 90, 
      icon: Server, 
      color: "text-emerald-500",
      description: "Node.js, Express, Laravel, Django, .NET, Spring, RESTful APIs, Microservices",
      category: "Development"
    },
    { 
      name: "Database Management", 
      level: 88, 
      icon: Database, 
      color: "text-orange-500",
      description: "PostgreSQL, MongoDB, Redis, SQL",
      category: "Data"
    },
    { 
      name: "Cloud & DevOps", 
      level: 85, 
      icon: Cloud, 
      color: "text-cyan-500",
      description: "AWS, Docker, CI/CD, Infrastructure as Code",
      category: "Operations"
    },
    { 
      name: "UI/UX Design", 
      level: 82, 
      icon: Palette, 
      color: "text-purple-500",
      description: "Figma, Adobe Creative Suite, Canva",
      category: "Design"
    },
    { 
      name: "Project Management", 
      level: 80, 
      icon: Target, 
      color: "text-indigo-500",
      description: "Agile, Scrum, Team Leadership, Planning",
      category: "Management"
    },
  ]

  const toolCategories = [
    {
      title: "Frontend Technologies",
      icon: Monitor,
      color: "text-blue-500",
      description: "Modern web technologies for user interfaces",
      tools: [
        { name: "React", level: 95, years: "4+" },
        { name: "Next.js", level: 90, years: "3+" },
        { name: "TypeScript", level: 88, years: "3+" },
        { name: "Tailwind CSS", level: 85, years: "2+" },
        { name: "Framer Motion", level: 80, years: "2+" },
        { name: "GSAP", level: 75, years: "1+" }
      ]
    },
    {
      title: "Backend & APIs",
      icon: Server,
      color: "text-emerald-500",
      description: "Server-side development and API design",
      tools: [
        { name: "Node.js", level: 88, years: "4+" },
        { name: "Express", level: 85, years: "3+" },
        { name: "PostgreSQL", level: 82, years: "3+" },
        { name: "MongoDB", level: 80, years: "2+" },
        { name: "Redis", level: 75, years: "2+" },
        { name: "GraphQL", level: 70, years: "1+" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: GitBranch,
      color: "text-purple-500",
      description: "Development tools and deployment pipelines",
      tools: [
        { name: "VS Code", level: 95, years: "5+" },
        { name: "Git & GitHub", level: 90, years: "4+" },
        { name: "Docker", level: 85, years: "3+" },
        { name: "Figma", level: 80, years: "2+" },
        { name: "Vercel", level: 88, years: "2+" },
        { name: "AWS", level: 75, years: "2+" }
      ]
    },
    {
      title: "Other Technologies",
      icon: Layers,
      color: "text-amber-500",
      description: "Additional programming languages and mobile development",
      tools: [
        { name: "C++", level: 75, years: "3+" },
        { name: "C#", level: 80, years: "2+" },
        { name: "JEE", level: 70, years: "2+" },
        { name: "Python", level: 85, years: "4+" },
        { name: "Mobile Development", level: 78, years: "2+" }
      ]
    }
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-16 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Professional Header */}
        <div className="text-center py-12 sm:py-16 lg:py-24">
          <div className="gsap-fade-in" style={{ opacity: 1 }}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              Professional Expertise
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-4 sm:mb-6 relative z-10">
              Skills & 
              <span className="block" style={{ color: '#00745a' }}>
                Expertise
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
              A comprehensive overview of my technical capabilities, professional experience, 
              and the cutting-edge technologies I leverage to deliver exceptional solutions.
            </p>
          </div>
        </div>


        {/* Technology Stack Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <div className="gsap-slide-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 relative z-10">
                Technology Stack
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
                A comprehensive collection of tools and technologies I use to build modern, 
                scalable, and performant applications across the full development stack.
              </p>
            </div>
          </div>

          <div ref={toolsRef} className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {toolCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon
              return (
                <div key={categoryIndex} className="tool-card opacity-100 bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${category.color.replace('text-', 'bg-').replace('-500', '-100')} dark:${category.color.replace('text-', 'bg-').replace('-500', '-900')} rounded-xl flex items-center justify-center`}>
                      <CategoryIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-300">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-slate-900 dark:text-white">{tool.name}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                            {tool.years}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${tool.level}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-600 dark:text-slate-300 font-medium w-8 text-right">
                            {tool.level}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Development Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="gsap-slide-up opacity-100">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Mobile Development
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Cross-platform and native mobile development expertise for iOS and Android platforms.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Native Development */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Native Development</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700 dark:text-slate-300">Kotlin/Java</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">2+</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">80%</span>
                </div>
              </div>

              {/* Cross-Platform */}
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Cross-Platform</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700 dark:text-slate-300">Flutter</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">2+</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">75%</span>
                </div>
              </div>

              {/* React Native */}
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">React Native</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700 dark:text-slate-300">React Native</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">2+</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">78%</span>
                </div>
              </div>

              {/* Backend Services */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Backend Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700 dark:text-slate-300">Firebase</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">2+</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">82%</span>
                </div>
              </div>
            </div>

            {/* Mobile Development Description */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">2+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">Years Mobile Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">15+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">Mobile Apps Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">3</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">Platforms Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Stats */}
        <div className="mb-16 sm:mb-20">
          <div className="gsap-fade-in opacity-100">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-emerald-200 dark:border-emerald-800">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                  Professional Impact
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 px-4">
                  Measurable results and achievements throughout my career
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div className="group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    3+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">Years Experience</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Full-stack development</div>
                </div>
                <div className="group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">Projects Delivered</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">From concept to production</div>
                </div>
                <div className="group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    95%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">Client Satisfaction</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Consistent quality delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pb-8 sm:pb-12">
          <div className="gsap-fade-in opacity-100">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how my skills and expertise can help bring your next project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <a 
                href="/works"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center text-sm sm:text-base"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                View My Work
              </a>
              <a 
                href="/contact"
                className="px-6 sm:px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
              >
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
