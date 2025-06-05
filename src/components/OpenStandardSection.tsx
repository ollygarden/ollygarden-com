
import { Button } from '@/components/ui/button';
import { Github, Users, Heart, ArrowRight } from 'lucide-react';

const OpenStandardSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pioneering an Open Standard for 
              <span className="text-olly-green"> Telemetry Quality</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're not just building a product; we're fostering a movement towards better, more standardized instrumentation. The Instrumentation Score should be an open, community-driven standard that benefits the entire ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-olly-green/10 p-3 rounded-lg">
                    <Github className="h-6 w-6 text-olly-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Open Source First</h3>
                    <p className="text-muted-foreground">
                      The Instrumentation Score specification is being developed as an open-source initiative. Our core analysis rules and scoring methodology will be freely available for the community to use, contribute to, and improve.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-olly-green/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-olly-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Community Collaboration</h3>
                    <p className="text-muted-foreground">
                      We're actively working with OpenTelemetry maintainers, observability experts, and end-users to refine the scoring criteria. Your feedback and adoption help shape this emerging standard.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-olly-green/10 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-olly-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Giving Back</h3>
                    <p className="text-muted-foreground">
                      OllyGarden's founders are active OpenTelemetry contributors. We believe in strengthening the entire observability ecosystem, not just our own products. Our success comes from the community's success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Button 
                  size="lg"
                  className="bg-olly-green text-olly-dark hover:bg-olly-green/90 font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105 glow-box group w-full sm:w-auto"
                >
                  View the Score Specification
                  <Github className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-olly-green/30 text-olly-green hover:bg-olly-green/10 px-8 py-4 text-lg transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                >
                  Join the Discussion
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 glow-box max-w-md">
                  <div className="text-center mb-6">
                    <div className="font-mono text-olly-green text-sm mb-4">// Instrumentation Score Specification</div>
                    <div className="space-y-3 text-left">
                      <div className="bg-olly-green/5 rounded p-3">
                        <div className="text-sm font-medium text-foreground mb-1">Rule Categories</div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <div>→ Resource Attributes (RES-*)</div>
                          <div>→ Span Attributes (SPA-*)</div>
                          <div>→ Trace Structure (TRC-*)</div>
                          <div>→ Semantic Conventions (SEM-*)</div>
                        </div>
                      </div>
                      
                      <div className="bg-olly-green/5 rounded p-3">
                        <div className="text-sm font-medium text-foreground mb-1">Scoring Weight</div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <div>Critical: -15 to +15 points</div>
                          <div>Major: -10 to +10 points</div>
                          <div>Minor: -5 to +5 points</div>
                        </div>
                      </div>
                      
                      <div className="bg-olly-green/5 rounded p-3">
                        <div className="text-sm font-medium text-foreground mb-1">Community Driven</div>
                        <div className="text-xs text-muted-foreground">
                          Open for contributions, feedback, and adoption by any observability tool
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating community badges */}
                <div className="absolute -right-4 top-1/4 transform translate-x-full hidden xl:block">
                  <div className="bg-olly-green/10 border border-olly-green/20 rounded-lg p-3">
                    <div className="text-xs text-olly-green font-medium mb-1">Coming Soon</div>
                    <div className="text-xs text-muted-foreground">CNCF Sandbox Proposal</div>
                  </div>
                </div>

                <div className="absolute -left-4 bottom-1/4 transform -translate-x-full hidden xl:block">
                  <div className="bg-olly-green/10 border border-olly-green/20 rounded-lg p-3">
                    <div className="text-xs text-olly-green font-medium mb-1">Open Source</div>
                    <div className="text-xs text-muted-foreground">Apache 2.0 License</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenStandardSection;
