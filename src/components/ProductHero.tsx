
import { Button } from '@/components/ui/button';
import { ArrowRight, Gauge } from 'lucide-react';

const ProductHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-noise overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-olly-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-olly-green/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
                <span className="block text-foreground">Finally, a</span>
                <span className="block text-olly-green">Score</span>
                <span className="block text-foreground">for Your OpenTelemetry</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Tired of subjective assessments? OllyGarden Telemetry Insights analyzes your OTLP data to generate a clear, actionable <span className="text-olly-green font-semibold">Instrumentation Score</span>. Understand exactly where your OpenTelemetry setup excels and where it needs improvement.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button 
                  size="lg"
                  className="bg-olly-green text-olly-dark hover:bg-olly-green/90 font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105 glow-box group"
                >
                  Get Your Instrumentation Score
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-olly-green/30 text-olly-green hover:bg-olly-green/10 px-8 py-4 text-lg transition-all duration-200 hover:scale-105"
                >
                  See How It Works
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                Based on emerging community best practices we're helping to define
              </p>
            </div>

            {/* Right Content - Score Visualization */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                {/* Main Score Display */}
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 glow-box">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-olly-green/20 bg-olly-green/5 relative">
                      <Gauge className="h-12 w-12 text-olly-green mb-2" />
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="text-3xl font-bold text-olly-green">78</div>
                        <div className="text-xs text-muted-foreground">Score</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-foreground mb-2">Service Alpha</div>
                      <div className="text-sm text-olly-green">Good - Room for improvement</div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Missing Attributes:</span>
                        <span className="text-red-400">12 issues</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Semantic Conventions:</span>
                        <span className="text-olly-green">85% compliant</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Trace Completeness:</span>
                        <span className="text-olly-green">92%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating improvement suggestion */}
                <div className="absolute -right-4 top-1/2 transform translate-x-full -translate-y-1/2 hidden xl:block">
                  <div className="bg-olly-green/10 border border-olly-green/20 rounded-lg p-3 max-w-xs">
                    <div className="text-xs text-olly-green font-medium mb-1">Quick Win</div>
                    <div className="text-xs text-muted-foreground">Add service.name to increase score by +8 points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
