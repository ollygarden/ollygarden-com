
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Target, TrendingUp, Zap } from 'lucide-react';

const SolutionSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Identify the Noise",
      description: "Instantly see where your telemetry is excessive, redundant, or lacks value. Pinpoint over-instrumented services and noisy traces."
    },
    {
      icon: CheckCircle,
      title: "Fix Incompleteness", 
      description: "Discover missing critical attributes (like service.name), broken traces, and deviations from semantic conventions."
    },
    {
      icon: TrendingUp,
      title: "Optimize for Efficiency",
      description: "Get recommendations to reduce data volume, convert logs to metrics where appropriate, and lower overall processing costs."
    },
    {
      icon: Zap,
      title: "Benchmark & Improve",
      description: "Understand how your services stack up and follow clear guidance to elevate your instrumentation to best-practice standards."
    }
  ];

  return (
    <section className="py-20 bg-card/30" id="product">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              It's Time to Fix It. 
              <span className="text-olly-green"> Meet OllyGarden.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              OllyGarden's Telemetry Insights service analyzes your existing OTLP data, pinpointing the 'bad telemetry' – the noise, the inefficiencies, the missing context – and provides a clear view of your instrumentation quality with actionable recommendations.
            </p>
            <p className="text-lg text-olly-green mt-4 font-medium">
              All without needing to change your backend.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-olly-green/10 p-3 rounded-lg group-hover:bg-olly-green/20 transition-colors duration-300">
                      <benefit.icon className="h-6 w-6 text-olly-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Visual Mockup Placeholder */}
          <div className="bg-gradient-to-r from-card/50 to-card/30 rounded-2xl p-12 border border-border/50 text-center">
            <div className="max-w-md mx-auto">
              <div className="bg-olly-green/10 rounded-xl p-8 mb-6">
                <div className="font-mono text-olly-green text-sm mb-4">// OllyGarden Insights Dashboard</div>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Telemetry Health Score:</span>
                    <span className="text-olly-green font-semibold">78/100</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Missing Attributes:</span>
                    <span className="text-red-400">23</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Optimization Potential:</span>
                    <span className="text-olly-green">34% reduction</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Comprehensive insights dashboard coming soon
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-olly-green text-olly-dark hover:bg-olly-green/90 font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105"
            >
              Get Early Access to Insights
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
