
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-noise overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-olly-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-olly-green/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            <span className="block text-foreground">Cultivating</span>
            <span className="block text-gradient">Clarity</span>
            <span className="block text-foreground">in Observability</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            At OllyGarden, we believe that high-quality telemetry is the bedrock of reliable and performant systems. Founded by dedicated OpenTelemetry contributors, we're on a mission to help organizations worldwide eliminate 'bad telemetry,' gain actionable insights, and unlock the true potential of their observability data.
          </p>

          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-olly-green/30 text-olly-green hover:bg-olly-green/10 px-8 py-4 text-lg transition-all duration-200 hover:scale-105 group"
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
