
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission:
              <span className="text-olly-green"> Efficient Telemetry for All</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We exist to improve the efficiency of telemetry pipelines, envisioning a world where all organizations can confidently use the telemetry they need, without excess.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-olly-green/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-olly-green" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
                </div>
                <div className="text-lg font-semibold text-olly-green mb-4">
                  To improve the efficiency of telemetry pipelines.
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to empower engineering teams by providing tools and insights that simplify the complexities of telemetry management, reduce waste, and make observability more accessible and cost-effective.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-olly-green/10 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-olly-green" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
                </div>
                <div className="text-lg font-semibold text-olly-green mb-4">
                  Companies confidently generating, collecting, and storing the telemetry they need, without excess.
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a future where 'bad telemetry' is a rarity, where instrumentation is purposeful, and where observability data consistently delivers profound value, driving better software and more resilient systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
