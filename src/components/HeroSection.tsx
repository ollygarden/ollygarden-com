
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-noise overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-olly-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-olly-green/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
            <span className="block text-foreground">There's a lot of</span>
            <span className="block text-gradient">bad telemetry</span>
            <span className="block text-foreground">out there.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            OllyGarden helps you cut through the noise. We provide actionable insights to identify and eliminate ineffective OpenTelemetry data, so you can finally get the clarity you need to optimize your systems and reduce waste.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg"
              className="bg-olly-green text-olly-dark hover:bg-olly-green/90 font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105 glow-box group"
            >
              Discover Your Telemetry Health
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-olly-green/30 text-olly-green hover:bg-olly-green/10 px-8 py-4 text-lg transition-all duration-200 hover:scale-105"
            >
              Learn More
            </Button>
          </div>

          {/* Supporting text */}
          <p className="text-sm text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            Early access available now • Understand your trace data in minutes
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-olly-green/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-olly-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
