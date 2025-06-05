
import { Zap, Eye, Users, Wrench, BookOpen } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: Zap,
      title: "Efficiency",
      description: "We are obsessed with optimizing telemetry pipelines, reducing waste, and ensuring every signal provides maximum value."
    },
    {
      icon: Eye,
      title: "Clarity & Transparency",
      description: "We believe in straightforward communication, open processes, and providing clear, understandable insights."
    },
    {
      icon: Users,
      title: "Community & Collaboration",
      description: "We thrive on collaboration, both within our team and with the broader open-source and observability communities."
    },
    {
      icon: Wrench,
      title: "Pragmatism & Actionability",
      description: "We focus on real-world problems and deliver practical, actionable solutions that make a tangible difference."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "The observability landscape is always evolving. We are committed to learning, innovating, and adapting to meet new challenges."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We
              <span className="text-olly-green"> Stand For</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These are the principles that shape our products, our team, and our interactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-olly-green/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-olly-green/20">
                  <value.icon className="h-8 w-8 text-olly-green" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
