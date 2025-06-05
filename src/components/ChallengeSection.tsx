
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, HelpCircle, Target } from 'lucide-react';

const ChallengeSection = () => {
  const challenges = [
    {
      icon: HelpCircle,
      title: "Subjective Assessment",
      description: "How do you really know if your OpenTelemetry instrumentation is effective? Different teams, different opinions, no common benchmark."
    },
    {
      icon: AlertTriangle,
      title: "Hidden Issues",
      description: "Missing critical attributes, inefficient signal use, or incomplete traces often go unnoticed until it's too late, leading to higher costs and slower incident response."
    },
    {
      icon: Target,
      title: "No Standard Measure",
      description: "The OpenTelemetry ecosystem has lacked a standardized way to objectively measure instrumentation quality. This makes true improvement and benchmarking a guessing game."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Is Judging Telemetry Quality 
              <span className="text-olly-green"> So Hard?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Without a standard measure, assessing and improving telemetry quality is difficult, inconsistent, and often neglected until problems become critical.
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border/50 hover:border-red-400/30 transition-all duration-300 group h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-red-400/10 p-3 rounded-lg group-hover:bg-red-400/20 transition-colors duration-300 flex-shrink-0">
                      <challenge.icon className="h-6 w-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {challenge.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call out the problem */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-red-400/10 to-red-400/5 border border-red-400/20 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground">
                The result? Teams struggle with <span className="text-red-400 font-semibold">"good enough"</span> instrumentation that costs more, reveals less, and makes troubleshooting harder than it should be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
