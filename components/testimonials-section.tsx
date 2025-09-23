export function TestimonialsSection() {
  const testimonials = [
    {
      name: "SARAH JOHNSON",
      role: "PRODUCT MANAGER AT TECHCORP",
      content:
        "OUSSAMA IS ONE OF THE MOST TALENTED DEVELOPERS I'VE WORKED WITH. HIS ATTENTION TO DETAIL AND TECHNICAL EXPERTISE ARE EXCEPTIONAL.",
      avatar: "/professional-woman-portrait.png",
    },
    {
      name: "AHMED BENALI",
      role: "CTO AT STARTUP MOROCCO",
      content:
        "WORKING WITH OUSSAMA WAS A GAME-CHANGER FOR OUR PROJECT. HE DELIVERED HIGH-QUALITY CODE AND EXCEEDED ALL EXPECTATIONS.",
      avatar: "/professional-man-portrait.png",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="gsap-fade-in mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-8">WHAT PEOPLE SAY ABOUT ME</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="gsap-scale">
              <div className="bg-card rounded-lg p-8 border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{testimonial.content}</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
