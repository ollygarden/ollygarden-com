
import { ArrowDown } from 'lucide-react';

const PricingHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-noise overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-olly-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-olly-green/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
            <span className="block text-foreground">Clear Pricing for</span>
            <span className="block text-gradient">Real-Time Telemetry</span>
            <span className="block text-foreground">Insights</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Our 'Telemetry Insights' service, featuring your comprehensive Instrumentation Score, offers a straightforward plan for early adopters. Pricing is based on a generous per-second telemetry point processing capacity, ensuring you get the insights you need without worrying about unpredictable monthly data caps.
          </p>

          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <ArrowDown className="mx-auto h-8 w-8 text-olly-green animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
