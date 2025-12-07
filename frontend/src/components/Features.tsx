import { Brain, Shield, Zap, Heart, Cpu, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Assisted Intelligence",
    description: "Tools that learn your preferences and adapt to your working style for maximum efficiency.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Safety with Heart",
    description: "Advanced protection that feels like a trusted partner, not just equipment.",
    color: "accent"
  },
  {
    icon: Zap,
    title: "Maximum Efficiency",
    description: "Smart features that help you work smarter, faster, and with greater precision.",
    color: "destructive"
  },
  {
    icon: Heart,
    title: "Ergonomic Care",
    description: "Designed with your comfort in mind for long-term use without fatigue.",
    color: "primary"
  },
  {
    icon: Cpu,
    title: "Connected Ecosystem",
    description: "All your tools work together seamlessly in one intelligent network.",
    color: "accent"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a network of professionals sharing knowledge and best practices.",
    color: "destructive"
  }
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
            <span className="text-sm font-rajdhani font-semibold text-accent">
              Core Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Built for the{" "}
            <span className="text-accent glow-green">Future</span>
          </h2>
          <p className="text-xl text-muted-foreground font-poppins max-w-2xl mx-auto">
            Every feature designed with precision engineering and emotional intelligence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group p-8 rounded-lg industrial-border hover-glow-cyan cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-${feature.color}/20 border border-${feature.color}/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 text-${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-orbitron font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-poppins leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated Line */}
                <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 p-12 rounded-2xl industrial-border">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-primary mb-2 glow-cyan">
                10X
              </div>
              <div className="text-sm text-muted-foreground font-rajdhani">
                Faster Project Completion
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-accent mb-2 glow-green">
                Zero
              </div>
              <div className="text-sm text-muted-foreground font-rajdhani">
                Safety Compromises
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-destructive mb-2 glow-orange">
                95%
              </div>
              <div className="text-sm text-muted-foreground font-rajdhani">
                User Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-primary mb-2 glow-cyan">
                100+
              </div>
              <div className="text-sm text-muted-foreground font-rajdhani">
                Smart Features
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
