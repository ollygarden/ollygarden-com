
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Clock, Database } from 'lucide-react';

const ProcessingCapacitySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How Our 
              <span className="text-olly-green"> 'Telemetry Points Per Second'</span> Model Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our pricing is based on the rate at which we can analyze your data to provide timely insights, not on total volume stored over a month.
            </p>
          </div>

          {/* Explanation Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-olly-green/10 p-3 rounded-lg w-fit mb-4">
                  <Database className="h-6 w-6 text-olly-green" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">What is a Telemetry Point?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Initially, when calculating your <strong>Instrumentation Score</strong>, a 'telemetry point' refers to an entire <strong>trace</strong>. We analyze complete traces for scoring consistency.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-olly-green/10 p-3 rounded-lg w-fit mb-4">
                  <Activity className="h-6 w-6 text-olly-green" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">1,000 Points/Second Means</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your service can analyze up to 1,000 traces every second. Data exceeding this rate in any given second will be accepted but discarded from that period's analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-olly-green/10 p-3 rounded-lg w-fit mb-4">
                  <Clock className="h-6 w-6 text-olly-green" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Why This Model?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  It aligns cost with analytical work performed and provides clear capacity for generating insights from a representative sample of your data.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Explanation */}
          <div className="bg-gradient-to-r from-card/50 to-card/30 rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Processing Capacity Explained</h3>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                For our Telemetry Insights MVP, we've designed our pricing around processing capacity rather than total monthly data volume. This allows us to offer a predictable cost for a powerful real-time analysis service.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-olly-green font-medium mb-2">Real-Time Processing</h4>
                  <p className="text-sm leading-relaxed">
                    If the volume of data you send exceeds this rate in any given second, we will still accept the connection, but data points beyond the 1,000/sec limit for that specific second will be immediately discarded. Processing resumes normally for data received in the subsequent second.
                  </p>
                </div>

                <div>
                  <h4 className="text-olly-green font-medium mb-2">Future Expansion</h4>
                  <p className="text-sm leading-relaxed">
                    As we expand insights beyond scoring (e.g., to include metric and log analysis features), individual metrics and log lines may also be considered 'telemetry points' for those specific analyses.
                  </p>
                </div>
              </div>

              {/* Visual Flow */}
              <div className="mt-8 bg-olly-green/5 rounded-lg p-6">
                <div className="flex items-center justify-between text-center">
                  <div className="flex-1">
                    <div className="bg-olly-green/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="text-olly-green font-bold">1s</span>
                    </div>
                    <div className="text-xs text-muted-foreground">≤1,000 traces analyzed</div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-amber-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="text-amber-400 font-bold">1s</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{'>'}1,000 traces: excess discarded</div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-olly-green/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <span className="text-olly-green font-bold">2s</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Normal processing resumes</div>
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

export default ProcessingCapacitySection;
