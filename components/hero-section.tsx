export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="gsap-fade-in">
              <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4">
                {"HI THERE, I'M OUSSAMA"}
              </p>
            </div>

            <div className="hero-title space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                <span className="block text-primary">FULL</span>
                <span className="block text-primary">STACK</span>
                <span className="block text-outline">DEVELOPER</span>
              </h1>
            </div>

            <div className="gsap-slide-left max-w-md">
              <p className="text-sm text-muted-foreground leading-relaxed">
                I AM A CREATIVE FULL-STACK DEVELOPER WITH EXPERTISE IN MODERN WEB TECHNOLOGIES, PASSIONATE ABOUT MOTION
                AND INTERACTION.
              </p>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="gsap-scale flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <img
                  src="/professional-developer-portrait.png"
                  alt="Oussama Kbaili"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full floating-element flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">{"</>"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="gsap-fade-in mt-16 text-center lg:text-left">
          <p className="text-sm text-muted-foreground">
            BASED IN <span className="text-primary font-medium">CASABLANCA, MOROCCO</span>
          </p>
        </div>
      </div>
    </section>
  )
}
