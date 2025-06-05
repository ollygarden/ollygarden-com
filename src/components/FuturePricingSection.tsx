
import { ArrowRight, Layers, Zap } from 'lucide-react';

const FuturePricingSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Looking Ahead: 
              <span className="text-olly-green"> Evolving with Your Needs</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The Telemetry Insights plan is our focused offering to help you get immediate value by understanding your current data.
            </p>
          </div>

          {/* Future Offerings Preview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 border border-border/50 rounded-xl p-6">
              <div className="bg-olly-green/10 p-3 rounded-lg w-fit mx-auto mb-4">
                <Layers className="h-8 w-8 text-olly-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Tiered Plans Coming</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Multiple pricing tiers designed for startups to large enterprises, with varying processing capacities and feature sets.
              </p>
            </div>

            <div className="bg-card/50 border border-border/50 rounded-xl p-6">
              <div className="bg-olly-green/10 p-3 rounded-lg w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-olly-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">OTel Collector as a Service</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fully managed OpenTelemetry collection and processing infrastructure with advanced capabilities.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-olly-green/5 to-olly-green/10 rounded-2xl p-8 border border-olly-green/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              As OllyGarden grows, we will introduce new capabilities and pricing options. Join our early access program to be the first to know about new features and special pricing.
            </p>
            <div className="flex items-center justify-center space-x-2 text-olly-green font-medium">
              <span>Follow our roadmap</span>
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePricingSection;
