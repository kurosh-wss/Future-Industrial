import { Hero } from "@/components/Hero";
import { ToolShowcase } from "@/components/ToolShowcase";
import { Features } from "@/components/Features";
import { TechSpecs } from "@/components/TechSpecs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ToolShowcase />
      <Features />
      <TechSpecs />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
