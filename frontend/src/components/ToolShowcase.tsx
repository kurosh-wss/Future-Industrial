import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Smartphone, Shield, ArrowRight } from "lucide-react";
import toolPower from "@/assets/tool-power.jpg";
import toolSmart from "@/assets/tool-smart.jpg";
import toolSafety from "@/assets/tool-safety.jpg";

const tools = [
  {
    icon: Wrench,
    title: "Power Tools",
    subtitle: "Industrial Strength",
    description: "Experience precision engineering with AI-assisted controls that adapt to your working style.",
    image: toolPower,
    color: "primary",
    features: ["Smart Torque Control", "Real-time Diagnostics", "Ergonomic Design"]
  },
  {
    icon: Smartphone,
    title: "Smart Tools",
    subtitle: "Intelligent Systems",
    description: "Connected tools that learn from your projects and provide real-time guidance and optimization.",
    image: toolSmart,
    color: "accent",
    features: ["AI Measurement", "Project Memory", "Cloud Sync"]
  },
  {
    icon: Shield,
    title: "Safety Gear",
    subtitle: "Protected Innovation",
    description: "Advanced protection that doesn't compromise on comfort. Safety equipment that cares about you.",
    image: toolSafety,
    color: "destructive",
    features: ["Smart Sensors", "Comfort Tech", "24/7 Monitoring"]
  }
];

export const ToolShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-sm font-rajdhani font-semibold text-primary">
              Product Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Tools That Understand{" "}
            <span className="text-primary glow-cyan">Your Craft</span>
          </h2>
          <p className="text-xl text-muted-foreground font-poppins max-w-2xl mx-auto">
            Discover industrial equipment that combines cutting-edge technology with emotional intelligence
          </p>
        </div>

        {/* Tool Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card 
                key={tool.title}
                className="group hover-glow-cyan overflow-hidden bg-card border-border cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tool.image} 
                    alt={tool.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 p-3 rounded-lg bg-${tool.color}/20 border border-${tool.color}/30`}>
                    <Icon className={`w-6 h-6 text-${tool.color}`} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className={`text-sm font-rajdhani font-semibold text-${tool.color} mb-2`}>
                      {tool.subtitle}
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold mb-3">
                      {tool.title}
                    </h3>
                    <p className="text-muted-foreground font-poppins text-sm leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${tool.color}`} />
                        <span className="text-muted-foreground font-rajdhani">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="w-full group/btn justify-between">
                    <span className="font-rajdhani">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button size="lg" variant="hero">
            View Full Catalog
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
