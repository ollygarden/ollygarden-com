
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Search, BarChart3 } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Send Your Data",
      description: "Securely stream a sample of your OTLP trace data to OllyGarden. No agents to install for analysis."
    },
    {
      number: "02", 
      icon: Search,
      title: "We Analyze",
      description: "Our platform processes your telemetry, identifying patterns, anomalies, and areas for improvement based on OpenTelemetry best practices."
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Receive Actionable Insights",
      description: "Get a comprehensive report and dashboard showcasing your telemetry health, benchmarks, and specific recommendations to enhance your instrumentation at the source."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Insights in 
              <span className="text-olly-green"> 3 Simple Steps</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Getting started with OllyGarden Insights is straightforward. Transform your telemetry understanding in minutes, not months.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-500 glow-box group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-olly-green/10 group-hover:text-olly-green/20 transition-colors duration-300">
                  {step.number}
                </div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6">
                    <div className="bg-olly-green/10 p-4 rounded-xl w-fit group-hover:bg-olly-green/20 transition-colors duration-300">
                      <step.icon className="h-8 w-8 text-olly-green" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>

                {/* Connection Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-olly-green/50 to-transparent transform -translate-y-1/2 z-20"></div>
                )}
              </Card>
            ))}
          </div>

          {/* Timeline visualization for mobile */}
          <div className="md:hidden mt-8 flex justify-center">
            <div className="flex flex-col items-center space-y-4">
              {steps.map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-olly-green rounded-full"></div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-gradient-to-b from-olly-green/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
