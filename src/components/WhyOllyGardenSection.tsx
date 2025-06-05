
import { Card, CardContent } from '@/components/ui/card';
import { Code, Brain, Handshake, Github } from 'lucide-react';

const WhyOllyGardenSection = () => {
  const advantages = [
    {
      icon: Code,
      title: "OpenTelemetry Native & Expertise",
      description: "Built by active OpenTelemetry contributors and maintainers. We understand OTel deeply, providing tailored insights for OTel users."
    },
    {
      icon: Brain,
      title: "Actionable Insights, Not Just Data", 
      description: "Go beyond raw data. We provide benchmarks, identify 'bad telemetry,' and offer concrete steps to improve your instrumentation quality and efficiency."
    },
    {
      icon: Handshake,
      title: "Vendor-Neutral Approach",
      description: "Our goal is to optimize YOUR telemetry, regardless of your chosen backend vendor. We help you send better data everywhere."
    },
    {
      icon: Github,
      title: "Commitment to Open Source",
      description: "We believe in the power of open source. Our core analysis tools will be open, and we contribute back to the OpenTelemetry project."
    }
  ];

  return (
    <section className="py-20 bg-card/30" id="about">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-olly-green">OllyGarden</span> Advantage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're not just another observability vendor. We're OpenTelemetry natives, committed to your success and the open source ecosystem that powers modern observability.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box group h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-olly-green/10 p-3 rounded-lg group-hover:bg-olly-green/20 transition-colors duration-300 flex-shrink-0">
                      <advantage.icon className="h-6 w-6 text-olly-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOllyGardenSection;
