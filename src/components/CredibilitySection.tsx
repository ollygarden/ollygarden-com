
import { Card, CardContent } from '@/components/ui/card';

const CredibilitySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Experts, 
              <span className="text-olly-green"> Built for You</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              OllyGarden is backed by expertise and recognized within the observability community. Deep roots in OpenTelemetry and distributed tracing.
            </p>
          </div>

          {/* Founders & Expertise */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Meet the Founders
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Led by Juraci and Yuri, recognized leaders and active contributors in the OpenTelemetry project. Our deep understanding of OTel comes from building it.
                </p>
                <div className="text-sm text-olly-green font-medium">
                  CNCF Ambassadors • OTel Governance Committee
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Community Leadership
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Active leaders and contributors in the CNCF and OpenTelemetry communities. We don't just use OpenTelemetry – we help shape its future.
                </p>
                <div className="text-sm text-olly-green font-medium">
                  OpenTelemetry Contributors • Industry Pioneers
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Strategic Backing */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Proudly backed by industry leaders
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              <div className="text-lg font-semibold text-muted-foreground">Dash0</div>
              <div className="text-lg font-semibold text-muted-foreground">Datadog</div>
              <div className="text-lg font-semibold text-muted-foreground">Grafana Labs</div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Guided by pioneers in distributed tracing and observability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
