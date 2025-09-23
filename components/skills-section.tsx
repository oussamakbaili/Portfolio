export function SkillsSection() {
  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js & Express", level: 88 },
    { name: "Database Design", level: 85 },
    { name: "Cloud & DevOps", level: 82 },
    { name: "UI/UX Design", level: 78 },
  ]

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Skills List */}
          <div className="space-y-8">
            <div className="gsap-slide-left">
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-8">WORKSTATION</h2>
              <p className="text-sm text-muted-foreground">
                MY TECHNICAL EXPERTISE AND FAVORITE TOOLS FOR BUILDING EXCEPTIONAL WEB EXPERIENCES.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="gsap-fade-in">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Tools & Setup */}
          <div className="gsap-slide-right">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">FAVORITE TOOLS</h3>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Frontend</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Backend</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Tools</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>VS Code</li>
                    <li>Git & GitHub</li>
                    <li>Docker</li>
                    <li>Figma</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Cloud</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Vercel</li>
                    <li>AWS</li>
                    <li>Supabase</li>
                    <li>Cloudflare</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
