
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertCircle, TrendingUp, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowScoreWorksSection = () => {
  const insights = [
    {
      icon: CheckCircle,
      title: "Instrumentation Quality Breakdown",
      description: "See exactly which rules impacted your score – positive or negative. Understand missing attributes, semantic convention adherence, and trace completeness.",
      example: "RES-001: Missing service.name - Critical Impact (-12 points)"
    },
    {
      icon: AlertCircle,
      title: "Efficiency & Optimization Opportunities", 
      description: "Identify score-impacting inefficiencies that also drive up costs. Detect overly verbose traces and high-cardinality span names.",
      example: "SPA-003: High-cardinality span names detected - Moderate Impact (-5 points)"
    },
    {
      icon: TrendingUp,
      title: "Service & Pipeline Benchmarking",
      description: "Compare Instrumentation Scores across your services to prioritize efforts. Focus improvements where they'll have the biggest impact.",
      example: "Service A: 78/100, Service B: 92/100, Service C: 45/100"
    },
    {
      icon: Target,
      title: "Actionable Recommendations",
      description: "Get clear, prioritized guidance to improve your score and overall telemetry health with specific implementation steps.",
      example: "Add service.name to all traces from Service X. Potential improvement: +12 points"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Score to Action: 
              <span className="text-olly-green"> Detailed Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your Instrumentation Score is a composite reflection of adherence to best practices, revealing specific areas for targeted improvement.
            </p>
          </div>

          {/* Score Explanation */}
          <div className="mb-16">
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-center text-foreground">Understanding Your Score</h3>
              <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
                Your score is calculated by analyzing your OTLP trace data against a comprehensive set of rules. These rules check for missing attributes, adherence to semantic conventions, trace completeness, and common anti-patterns.
              </p>
            </div>

            {/* Visual Score Display */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-card/50 to-card/30 rounded-xl p-8 border border-border/50 glow-box">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-400 mb-1">10-39</div>
                    <div className="text-sm text-red-400">Poor</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-1">40-64</div>
                    <div className="text-sm text-yellow-400">Needs Work</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-olly-green mb-1">65-84</div>
                    <div className="text-sm text-olly-green">Good</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-1">85-100</div>
                    <div className="text-sm text-green-400">Excellent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insights Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {insights.map((insight, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box group h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-olly-green/10 p-3 rounded-lg group-hover:bg-olly-green/20 transition-colors duration-300 flex-shrink-0">
                      <insight.icon className="h-6 w-6 text-olly-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground">
                        {insight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {insight.description}
                      </p>
                      <div className="bg-olly-green/5 border border-olly-green/20 rounded-lg p-3">
                        <div className="text-xs text-olly-green font-medium mb-1">Example:</div>
                        <div className="text-sm text-muted-foreground font-mono">
                          {insight.example}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mockup Report */}
          <div className="bg-gradient-to-r from-card/50 to-card/30 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-semibold mb-6 text-center text-foreground">Sample Instrumentation Score Report</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-olly-green/10 rounded-xl p-6 mb-4">
                  <div className="font-mono text-olly-green text-sm mb-4">// Service Alpha - Instrumentation Score Report</div>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between text-lg">
                      <span className="text-muted-foreground">Overall Score:</span>
                      <span className="text-olly-green font-bold">78/100 (Good)</span>
                    </div>
                    <div className="border-t border-olly-green/20 pt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Missing Critical Attributes:</span>
                        <span className="text-red-400">12 issues</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Semantic Convention Adherence:</span>
                        <span className="text-olly-green">85%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Trace Completeness:</span>
                        <span className="text-olly-green">92%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Optimization Potential:</span>
                        <span className="text-yellow-400">22% volume reduction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Top Recommendations</h4>
                <div className="space-y-3">
                  <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                    <div className="text-sm font-medium text-red-400 mb-1">Critical Issue</div>
                    <div className="text-sm text-muted-foreground">Add service.name attribute to all spans. Impact: +12 points</div>
                  </div>
                  <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-3">
                    <div className="text-sm font-medium text-yellow-400 mb-1">Optimization</div>
                    <div className="text-sm text-muted-foreground">Reduce span name cardinality in user-service. Impact: +5 points</div>
                  </div>
                  <div className="bg-olly-green/10 border border-olly-green/20 rounded-lg p-3">
                    <div className="text-sm font-medium text-olly-green mb-1">Enhancement</div>
                    <div className="text-sm text-muted-foreground">Add http.request.method attribute. Impact: +3 points</div>
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

export default HowScoreWorksSection;
