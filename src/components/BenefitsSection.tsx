
import { Card, CardContent } from '@/components/ui/card';
import { Users, Code, TrendingUp, Globe } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Code,
      title: "For Observability Engineers / SREs",
      description: "Objectively demonstrate the quality of your instrumentation. Use your score to advocate for improvements, track progress, and reduce the noise that leads to alert fatigue.",
      features: [
        "Quantify instrumentation quality with hard numbers",
        "Identify specific technical debt in your telemetry",
        "Justify time spent on observability improvements",
        "Reduce false positives and alert noise"
      ]
    },
    {
      icon: Users,
      title: "For Software Development Teams", 
      description: "Get clear, quantifiable feedback on your service's instrumentation health. Understand how to improve your score and contribute to a more efficient system.",
      features: [
        "Service-specific instrumentation scorecards",
        "Clear action items for developers",
        "Integration with existing development workflows",
        "Track improvements over time"
      ]
    },
    {
      icon: TrendingUp,
      title: "For CTOs / Engineering Managers",
      description: "Gain a standardized metric to benchmark observability maturity across teams. Tie instrumentation quality directly to efficiency gains and reduced operational risk.",
      features: [
        "Executive dashboards with organization-wide scores",
        "ROI tracking for observability investments",
        "Team performance benchmarking",
        "Risk assessment and mitigation planning"
      ]
    },
    {
      icon: Globe,
      title: "For the OpenTelemetry Community",
      description: "By adopting OllyGarden Insights, you support the development and refinement of a much-needed open standard for instrumentation quality.",
      features: [
        "Contribute to open source scoring standards",
        "Help establish community best practices",
        "Advance the state of observability tooling",
        "Participate in the future of telemetry quality"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A Clearer View for Everyone: 
              <span className="text-olly-green"> The Value of Scoring</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Instrumentation Score provides a common language and clear metrics for everyone involved in observability, from engineers to executives.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box group h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-olly-green/10 p-3 rounded-lg group-hover:bg-olly-green/20 transition-colors duration-300 flex-shrink-0">
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
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-olly-green mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-olly-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call-out box */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-olly-green/10 to-olly-green/5 border border-olly-green/20 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                One Score, Universal Understanding
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're debugging a production issue, planning infrastructure costs, or reporting to stakeholders, the <span className="text-olly-green font-semibold">Instrumentation Score</span> provides a common reference point that everyone can understand and act upon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
