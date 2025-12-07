import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      
      {/* Animated Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-glow-pulse">
            <span className="text-sm font-rajdhani font-semibold text-primary">
              Join the Industrial Revolution
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 leading-tight">
            Build Tomorrow with Tools{" "}
            <span className="text-accent glow-orange">That Care</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground font-poppins mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect fusion of industrial precision and emotional intelligence. 
            Start your journey with tools that understand your craft.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="xl" variant="hero" className="group">
              Request Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="industrial">
              Schedule Consultation
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-6 rounded-lg industrial-border hover-glow-cyan cursor-pointer group">
              <Mail className="w-8 h-8 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-rajdhani font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">
                sales@futureindustrial.tech
              </p>
            </div>
            
            <div className="p-6 rounded-lg industrial-border hover-glow-orange cursor-pointer group">
              <Phone className="w-8 h-8 text-accent mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-rajdhani font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground">
                +1 (555) 123-4567
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground font-rajdhani mb-4">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              {['Fortune 500', 'ISO Certified', 'Award Winner', 'Industry Leader'].map((badge) => (
                <span key={badge} className="font-rajdhani font-semibold text-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
