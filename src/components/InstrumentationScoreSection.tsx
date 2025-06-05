
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Code, BarChart3, ArrowRight } from 'lucide-react';

const InstrumentationScoreSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quantify Your Quality: The 
              <span className="text-olly-green"> Instrumentation Score</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              OllyGarden Telemetry Insights leverages the <span className="text-olly-green font-semibold">Instrumentation Score specification</span> – an open, rule-based system designed to objectively assess your OTLP trace data. We provide a numerical score from 10 (Poor) to 100 (Excellent), giving you unprecedented understanding of your telemetry effectiveness.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center bg-olly-green/10 rounded-full px-4 py-2 mb-4">
                  <Award className="h-4 w-4 text-olly-green mr-2" />
                  <span className="text-sm text-olly-green font-medium">Pioneering a Standard</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  The Future of Telemetry Assessment
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  OllyGarden is initiating this Instrumentation Score as an open-source effort, aiming for eventual adoption within the OpenTelemetry community. By using our Insights service, you're an early adopter of this next-generation approach to telemetry quality.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our service analyzes your data, calculates your score based on rules derived from OTel Semantic Conventions and best practices, and provides detailed reports on <em>why</em> you received that score and <em>how</em> to improve it.
                </p>
              </div>

              <Button 
                size="lg"
                className="bg-olly-green text-olly-dark hover:bg-olly-green/90 font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105 glow-box group"
              >
                Learn About the Score Specification
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Right Content - Score Categories */}
            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-green-500/20 to-green-400/10 border-green-400/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-green-400">Excellent</h4>
                      <p className="text-sm text-muted-foreground">Best-in-class instrumentation</p>
                    </div>
                    <div className="text-2xl font-bold text-green-400">85-100</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-olly-green/20 to-olly-green/10 border-olly-green/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-olly-green">Good</h4>
                      <p className="text-sm text-muted-foreground">Solid foundation, room for optimization</p>
                    </div>
                    <div className="text-2xl font-bold text-olly-green">65-84</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-500/20 to-yellow-400/10 border-yellow-400/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-yellow-400">Needs Improvement</h4>
                      <p className="text-sm text-muted-foreground">Significant gaps to address</p>
                    </div>
                    <div className="text-2xl font-bold text-yellow-400">40-64</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-red-500/20 to-red-400/10 border-red-400/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-red-400">Poor</h4>
                      <p className="text-sm text-muted-foreground">Critical issues require immediate attention</p>
                    </div>
                    <div className="text-2xl font-bold text-red-400">10-39</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Data Handling */}
          <div className="bg-gradient-to-r from-card/50 to-card/30 rounded-2xl p-8 border border-border/50">
            <div className="flex items-start space-x-4">
              <div className="bg-olly-green/10 p-3 rounded-lg">
                <Code className="h-6 w-6 text-olly-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Secure & Focused Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our service securely streams and analyzes your OTLP trace data (MVP focus on traces initially). Your data is processed, scored, and then discarded after analysis – we never store your telemetry long-term. Currently supporting trace data with plans to expand to metrics and logs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstrumentationScoreSection;
