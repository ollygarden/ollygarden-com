
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Users, Heart } from 'lucide-react';

const OpenSourceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-card/50 to-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rooted in
              <span className="text-olly-green"> Open Source</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Open source is core to our DNA. We actively contribute to OpenTelemetry and believe in open, collaborative innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-olly-green/10 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-olly-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">OpenTelemetry Leadership</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  OllyGarden isn't just using OpenTelemetry; we're helping to build it. Our founders are among its top contributors and hold leadership roles. We believe in being good upstream citizens, contributing our expertise to strengthen the project for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-olly-green/10 rounded-lg flex items-center justify-center mr-4">
                    <Github className="h-6 w-6 text-olly-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Open by Default</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our commitment extends to our own software, which will be open by default. We see open source as vital for transparency, community building, and allowing users to understand and even run our solutions themselves if they choose.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-olly-green/10 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-olly-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Environmental Responsibility</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We're mindful of the environmental impact of IT. By improving telemetry efficiency, we aim to contribute to reducing the resource footprint of observability, including the OpenTelemetry project itself.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">The Instrumentation Score Initiative</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
                  A prime example of our commitment is the <strong className="text-olly-green">Instrumentation Score specification.</strong> We are spearheading this as an open, community-driven effort to standardize telemetry quality assessment, aiming for its eventual adoption within a neutral foundation like the CNCF or an OpenTelemetry SIG.
                </p>
                <Button 
                  variant="outline" 
                  className="border-olly-green/30 text-olly-green hover:bg-olly-green/10"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
