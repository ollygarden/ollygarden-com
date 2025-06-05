
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Target, Users, Zap } from 'lucide-react';

const PricingValueSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Instrumentation Score Precision",
      description: "Get an objective, quantifiable assessment of your OpenTelemetry instrumentation quality based on emerging community best practices."
    },
    {
      icon: Zap,
      title: "Immediate Actionable Insights", 
      description: "Receive specific recommendations to improve your telemetry efficiency, reduce noise, and enhance observability value."
    },
    {
      icon: DollarSign,
      title: "Potential Cost Savings",
      description: "Identify over-instrumented services and inefficient telemetry patterns that may be driving up your observability costs."
    },
    {
      icon: Users,
      title: "OpenTelemetry Expertise",
      description: "Benefit from insights developed by active OpenTelemetry contributors and maintainers who understand the ecosystem deeply."
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why This Price? 
              <span className="text-olly-green"> The Value You Receive</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our pricing reflects the unique value of quantifiable telemetry insights and the expertise behind them.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-500 glow-box group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-olly-green/10 p-3 rounded-xl group-hover:bg-olly-green/20 transition-colors duration-300">
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

          {/* ROI Callout */}
          <div className="mt-16 bg-gradient-to-r from-olly-green/10 to-olly-green/5 rounded-2xl p-8 border border-olly-green/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Potential Return on Investment</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Many organizations discover telemetry inefficiencies that, when optimized, can save thousands per month in observability costs. 
                Our $2,500 investment often pays for itself through the insights and optimizations it enables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingValueSection;
