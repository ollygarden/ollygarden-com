
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Sparkles } from 'lucide-react';

const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-card/50 to-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Community Roots to
              <span className="text-olly-green"> Company Vision</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              OllyGarden was born from real-world experience and a passion for solving complex telemetry challenges within the OpenTelemetry ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-olly-green/10 rounded-lg flex items-center justify-center mr-4">
                    <Lightbulb className="h-6 w-6 text-olly-green" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">The "Aha!" Moment</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  OllyGarden began with a simple observation: while the intricacies of OpenTelemetry Collectors and advanced concepts like tail-sampling felt obvious to some deeply embedded in the project, they posed significant hurdles for many others. This gap in understanding and accessible tooling sparked the idea for a company dedicated to demystifying and optimizing these critical components.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-olly-green/10 rounded-lg flex items-center justify-center mr-4">
                    <Sparkles className="h-6 w-6 text-olly-green" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">The Name "OllyGarden"</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The name 'OllyGarden' reflects our deep connection to the observability ('o11y') community and our philosophy of carefully cultivating high-quality telemetry – like tending a thriving garden – to yield valuable insights. We believe in nurturing data quality the same way a gardener tends to their plants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
