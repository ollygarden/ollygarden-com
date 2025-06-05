
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Gauge, Shield, TrendingUp } from 'lucide-react';

const PricingPlan = () => {
  const features = [
    "Comprehensive Instrumentation Score (10-100) for your services",
    "Detailed breakdown of score contributors",
    "Actionable recommendations to improve your score and telemetry quality",
    "Telemetry Processing Capacity: Up to 1,000 telemetry points per second",
    "Identification of 'bad telemetry': missing attributes, semantic convention deviations",
    "Service and pipeline benchmarking insights",
    "Secure data handling (data processed for insights, not stored long-term)",
    "Access to detailed insight reports",
    "Standard email support"
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-olly-green">Telemetry Insights</span> MVP Plan
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get full access to "Telemetry Insights" and your "Instrumentation Score" with a clear per-second processing capacity for a flat, predictable monthly fee.
            </p>
          </div>

          {/* Pricing Card */}
          <Card className="bg-card/80 backdrop-blur-sm border-2 border-olly-green/30 glow-box max-w-2xl mx-auto relative overflow-hidden">
            {/* Premium Badge */}
            <div className="absolute top-0 right-0 bg-olly-green text-olly-dark px-6 py-2 text-sm font-semibold">
              Early Access
            </div>

            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">OllyGarden Telemetry Insights</h3>
                
                <div className="mb-6">
                  <div className="text-5xl font-bold text-olly-green mb-2">$2,500</div>
                  <div className="text-lg text-muted-foreground">per month</div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Everything you need to understand, score, and start optimizing your OpenTelemetry data, processed in real-time.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-olly-green mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Important Note */}
              <div className="bg-olly-green/5 border border-olly-green/20 rounded-lg p-4 mb-8">
                <h4 className="text-sm font-semibold text-olly-green mb-2">Important Notes:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Initially, a 'telemetry point' for scoring refers to a complete trace</li>
                  <li>• Data exceeding 1,000 points/second will be accepted but discarded from immediate analysis</li>
                  <li>• This introductory pricing is for our Telemetry Insights MVP</li>
                  <li>• Service analyzes your telemetry data; does not include data export to your backends</li>
                </ul>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg"
                className="w-full bg-olly-green text-olly-dark hover:bg-olly-green/90 font-semibold py-4 text-lg transition-all duration-200 hover:scale-105 glow-box"
              >
                Get Started with Insights
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Have substantially higher volumes? <a href="#contact" className="text-olly-green hover:underline">Contact us to discuss</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
