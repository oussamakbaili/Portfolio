import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="gsap-slide-left">
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-8">
                HAVE AN IDEA?
                <br />
                <span className="text-gradient">TELL ME ABOUT IT</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                READY TO BRING YOUR PROJECT TO LIFE? LET'S DISCUSS HOW WE CAN CREATE SOMETHING AMAZING TOGETHER.
              </p>
            </div>

            <div className="gsap-fade-in space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-2">EMAIL</h3>
                <p className="text-sm text-muted-foreground">oussama.kbaili@example.com</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-2">LOCATION</h3>
                <p className="text-sm text-muted-foreground">Casablanca, Morocco</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-2">AVAILABILITY</h3>
                <p className="text-sm text-muted-foreground">Open for new opportunities</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="gsap-slide-right">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-foreground mb-2 block">FIRST NAME</label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground mb-2 block">LAST NAME</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-foreground mb-2 block">EMAIL</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="text-xs font-medium text-foreground mb-2 block">MESSAGE</label>
                <Textarea placeholder="Tell me about your project..." className="min-h-32" />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">SEND MESSAGE</Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="gsap-fade-in mt-20 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-muted-foreground">© 2024 OUSSAMA KBAILI. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                GITHUB
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                LINKEDIN
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                TWITTER
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                DRIBBBLE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
