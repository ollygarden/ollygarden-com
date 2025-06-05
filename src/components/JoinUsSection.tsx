
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Coffee } from 'lucide-react';

const JoinUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Garden:
            <span className="text-olly-green"> Cultivate Your Career</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            At OllyGarden, we're nurturing a remote-first culture where talented individuals can thrive while solving complex challenges in the observability space. We empower our team with cutting-edge technology, foster a collaborative environment, and believe in a healthy work-life balance.
          </p>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            If you're passionate about OpenTelemetry, resource efficiency, and making a real impact with a growing team, we'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button 
              size="lg"
              className="bg-olly-green text-olly-dark hover:bg-olly-green/90 font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105 glow-box group"
            >
              Explore Open Positions
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-olly-green/30 text-olly-green hover:bg-olly-green/10 px-8 py-4 text-lg transition-all duration-200 hover:scale-105"
            >
              <Coffee className="mr-2 h-5 w-5" />
              Read Our Blog
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-olly-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-olly-green" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community Engagement</h3>
              <p className="text-muted-foreground">
                Not looking for a role right now? Engage with us! Follow our contributions to OpenTelemetry, participate in the Instrumentation Score discussions, or connect with us at industry events.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-olly-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-6 w-6 text-olly-green" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Thought Leadership</h3>
              <p className="text-muted-foreground">
                Read our latest thoughts and insights about OpenTelemetry, observability best practices, and the future of telemetry efficiency on our blog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
