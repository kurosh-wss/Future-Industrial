import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download } from "lucide-react";

const specifications = [
  {
    category: "Power & Performance",
    specs: [
      { label: "Motor Power", value: "2000W Brushless" },
      { label: "Max Torque", value: "180 Nm" },
      { label: "Speed Range", value: "0-3000 RPM" },
      { label: "Battery Life", value: "8 Hours Continuous" }
    ]
  },
  {
    category: "Smart Features",
    specs: [
      { label: "AI Processing", value: "Neural Engine 4.0" },
      { label: "Connectivity", value: "WiFi 6, Bluetooth 5.2" },
      { label: "Sensors", value: "12-Point Multi-Sensor" },
      { label: "Display", value: "3.5\" OLED Touchscreen" }
    ]
  },
  {
    category: "Safety & Durability",
    specs: [
      { label: "Protection Rating", value: "IP68 Water/Dust" },
      { label: "Drop Test", value: "3m Military Spec" },
      { label: "Temperature Range", value: "-20°C to 60°C" },
      { label: "Warranty", value: "5 Years Extended" }
    ]
  },
  {
    category: "Ergonomics",
    specs: [
      { label: "Weight", value: "1.8 kg Balanced" },
      { label: "Grip Material", value: "Soft-Touch Composite" },
      { label: "Vibration Control", value: "Active Dampening" },
      { label: "Noise Level", value: "75 dB Low-Mode" }
    ]
  }
];

export const TechSpecs = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-industrial-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary rounded-full animate-rotate-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-accent rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30 mb-4">
            <span className="text-sm font-rajdhani font-semibold text-destructive">
              Technical Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Precision{" "}
            <span className="text-primary glow-cyan">Engineering</span>
          </h2>
          <p className="text-xl text-muted-foreground font-poppins max-w-2xl mx-auto">
            Every specification designed for professional-grade performance and reliability
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {specifications.map((category, index) => (
            <Card 
              key={category.category}
              className="p-8 bg-card border-border hover-glow-cyan animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.specs.map((spec, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-muted-foreground font-rajdhani text-sm">
                          {spec.label}
                        </span>
                        <span className="font-rajdhani font-semibold text-foreground">
                          {spec.value}
                        </span>
                      </div>
                      <div className="mt-1 h-px bg-border group-hover:bg-primary/30 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications & Downloads */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="p-8 bg-card border-border">
            <h3 className="text-xl font-orbitron font-bold mb-6">
              Certifications & Standards
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {['ISO 9001', 'CE Certified', 'UL Listed', 'OSHA Compliant', 'RoHS', 'Energy Star'].map((cert) => (
                <div 
                  key={cert}
                  className="px-4 py-3 rounded-lg bg-secondary border border-border text-center"
                >
                  <span className="font-rajdhani font-semibold text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Downloads */}
          <Card className="p-8 bg-card border-border">
            <h3 className="text-xl font-orbitron font-bold mb-6">
              Documentation
            </h3>
            <div className="space-y-3">
              {['Technical Manual', 'Safety Guidelines', 'Quick Start Guide', 'CAD Files'].map((doc) => (
                <Button 
                  key={doc}
                  variant="ghost" 
                  className="w-full justify-between group"
                >
                  <span className="font-rajdhani">{doc}</span>
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Material Science Callout */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-destructive/10 border border-primary/30">
          <div className="text-center">
            <h3 className="text-2xl font-orbitron font-bold mb-3">
              Advanced Material Science
            </h3>
            <p className="text-muted-foreground font-poppins mb-6 max-w-3xl mx-auto">
              Aerospace-grade aluminum, carbon fiber composites, and nano-ceramic coatings ensure maximum durability while maintaining optimal weight distribution for extended use.
            </p>
            <Button variant="hero">
              Explore Materials Technology
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
