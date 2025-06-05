
import { MessageSquare, BarChart3, Handshake, Newspaper, Users } from 'lucide-react';

const ContactReasons = () => {
  const reasons = [
    {
      icon: BarChart3,
      title: "Product Insights & Demos",
      description: "Learn more about OllyGarden Telemetry Insights and how our Instrumentation Score can benefit your team."
    },
    {
      icon: MessageSquare,
      title: "Instrumentation Score Initiative",
      description: "Questions, feedback, or interest in collaborating on the open Instrumentation Score specification."
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities",
      description: "Explore how we can work together to improve the observability ecosystem."
    },
    {
      icon: Newspaper,
      title: "Press & Media",
      description: "For media inquiries, interviews, or press-related questions, please reach out here."
    },
    {
      icon: Users,
      title: "Careers",
      description: "Interested in joining our team? Visit our Careers page for open positions."
    }
  ];

  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How Can We 
              <span className="text-olly-green"> Help?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you about any of these topics and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.slice(0, -1).map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index}
                  className="bg-card/50 rounded-xl p-6 border border-border/50 hover:border-olly-green/30 transition-all duration-300"
                >
                  <div className="bg-olly-green/10 p-3 rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-olly-green" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
            
            {/* Careers card with special styling */}
            <div className="bg-gradient-to-br from-olly-green/10 to-olly-green/5 rounded-xl p-6 border border-olly-green/30">
              <div className="bg-olly-green/20 p-3 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-olly-green" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{reasons[4].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {reasons[4].description}
              </p>
              <a 
                href="/careers" 
                className="inline-flex items-center text-olly-green hover:text-olly-green/80 transition-colors text-sm font-medium"
              >
                View Open Positions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactReasons;
