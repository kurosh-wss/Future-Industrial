import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Brain } from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Futuristic Industrial Workshop" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-glow-pulse">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-rajdhani font-semibold text-primary">
              Next-Gen Industrial Technology
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 leading-tight">
            Where Industrial{" "}
            <span className="text-primary glow-cyan">Precision</span>
            <br />
            Meets Emotional{" "}
            <span className="text-accent glow-orange">Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground font-poppins mb-8 max-w-2xl leading-relaxed">
            Experience tools that work with you, not just for you. The future of industrial technology understands your craft and cares about your success.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-sm font-rajdhani">AI-Assisted Tools</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-rajdhani">Safety First Design</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Zap className="w-5 h-5 text-destructive" />
              <span className="text-sm font-rajdhani">Maximum Efficiency</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="xl" variant="hero" className="group">
              Explore Future Tools
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="xl" variant="industrial">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-border/30">
            <div>
              <div className="text-3xl font-orbitron font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground font-rajdhani">Precision Rate</div>
            </div>
            <div>
              <div className="text-3xl font-orbitron font-bold text-accent mb-1">50K+</div>
              <div className="text-sm text-muted-foreground font-rajdhani">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-orbitron font-bold text-destructive mb-1">24/7</div>
              <div className="text-sm text-muted-foreground font-rajdhani">Smart Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};
