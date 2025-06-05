
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Cpu, FileText, TrendingUp } from 'lucide-react';

const TechnicalProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Secure Data Ingestion",
      description: "Securely stream a sample of your OTLP trace data to OllyGarden. No agents to install - just point your existing telemetry pipeline to our analysis endpoint."
    },
    {
      number: "02", 
      icon: Cpu,
      title: "Rule-Based Analysis & Score Calculation",
      description: "Our platform ingests your OTLP data and applies the defined Instrumentation Score ruleset. Each rule contributes positively or negatively to the overall score based on its severity and findings."
    },
    {
      number: "03",
      icon: FileText,
      title: "Detailed Report & Scorecard",
      description: "Receive a comprehensive report featuring your service's Instrumentation Score, a breakdown of contributing factors, identified issues, and actionable recommendations for improvement."
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "Implement changes based on our recommendations and resubmit data to see your Instrumentation Score improve over time. Build a culture of telemetry excellence."
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The OllyGarden Insights & 
              <span className="text-olly-green"> Scoring Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Secure data ingestion leads to automated score calculation and insightful reporting. See how we transform your raw telemetry into actionable intelligence.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-500 glow-box group relative overflow-hidden h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-olly-green/10 group-hover:text-olly-green/20 transition-colors duration-300">
                  {step.number}
                </div>
                
                <CardContent className="p-6 relative z-10 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="bg-olly-green/10 p-3 rounded-xl w-fit group-hover:bg-olly-green/20 transition-colors duration-300">
                      <step.icon className="h-6 w-6 text-olly-green" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    {step.description}
                  </p>
                </CardContent>

                {/* Connection Line (except for last item on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-olly-green/50 to-transparent transform -translate-y-1/2 z-20"></div>
                )}
              </Card>
            ))}
          </div>

          {/* Process Visualization */}
          <div className="mt-16 bg-gradient-to-r from-card/50 to-card/30 rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Data Flow & Security</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="bg-olly-green/10 p-4 rounded-lg">
                  <div className="text-olly-green font-mono text-sm">OTLP Trace Data</div>
                </div>
                <div className="text-xs text-muted-foreground">Your telemetry data</div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-olly-green/10 p-4 rounded-lg">
                  <div className="text-olly-green font-mono text-sm">Analysis Engine</div>
                </div>
                <div className="text-xs text-muted-foreground">Rule-based scoring</div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-olly-green/10 p-4 rounded-lg">
                  <div className="text-olly-green font-mono text-sm">Insights Report</div>
                </div>
                <div className="text-xs text-muted-foreground">Your score & recommendations</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="text-olly-green font-medium">Privacy First:</span> Your data is processed and immediately discarded. We never store your telemetry long-term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProcessSection;
