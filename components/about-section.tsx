export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Large Text */}
          <div className="gsap-slide-left">
            <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
              PASSIONATE
              <br />
              <span className="text-gradient">ABOUT</span>
              <br />
              DEVELOPMENT
            </h2>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="gsap-fade-in">
              <p className="text-sm text-muted-foreground leading-relaxed">
                AS A FULL-STACK DEVELOPER FROM CASABLANCA, I SPECIALIZE IN CREATING EXCEPTIONAL DIGITAL EXPERIENCES
                USING CUTTING-EDGE TECHNOLOGIES. MY PASSION LIES IN CRAFTING PERFORMANT, ACCESSIBLE, AND VISUALLY
                STUNNING WEB APPLICATIONS.
              </p>
            </div>

            <div className="gsap-fade-in space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">WORK EXPERIENCE</h3>
                <p className="text-sm text-muted-foreground">
                  I HAVE 5+ YEARS OF EXPERIENCE IN FULL-STACK DEVELOPMENT, WORKING WITH STARTUPS AND ESTABLISHED
                  COMPANIES TO BUILD SCALABLE WEB APPLICATIONS AND DIGITAL PRODUCTS.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-2">EXPERTISE</h3>
                <p className="text-sm text-muted-foreground">
                  SPECIALIZED IN REACT, NEXT.JS, NODE.JS, TYPESCRIPT, AND MODERN WEB TECHNOLOGIES. I FOCUS ON
                  PERFORMANCE OPTIMIZATION, USER EXPERIENCE, AND CLEAN CODE ARCHITECTURE.
                </p>
              </div>
            </div>

            <div className="gsap-scale">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                VIEW MY CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
