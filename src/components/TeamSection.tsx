
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Github } from 'lucide-react';

const TeamSection = () => {
  const founders = [
    {
      name: "Juraci Paixão Kröhling",
      title: "Co-founder",
      image: "/lovable-uploads/b169a905-547e-41a9-b2a6-ce011c4306a1.png", // Placeholder
      bio: "A Brazilian software engineer based in Germany since 2011, Juraci brings extensive experience from open-source leaders like Red Hat and Grafana Labs. He is a highly respected OpenTelemetry project leader, serving on the Governance Committee, a CNCF Ambassador, and the creator of key OTel tools like the OTel Collector Builder, Operator, and OTel Collector load-balancer. With six patents in telemetry and security, Juraci is passionate about solving complex observability challenges and fostering the OTel community."
    },
    {
      name: "Yuri Oliveira Sá",
      title: "Co-founder",
      image: "/lovable-uploads/b169a905-547e-41a9-b2a6-ce011c4306a1.png", // Placeholder
      bio: "Yuri is an experienced software engineer with a strong background in Site Reliability Engineering (SRE) and a keen understanding of the business dynamics of technology startups. His expertise in building and maintaining reliable, scalable infrastructure for high-demand applications is crucial to OllyGarden's mission. Yuri combines deep technical proficiency with a strategic mindset, ensuring our solutions are not only robust but also align perfectly with our customers' business goals."
    }
  ];

  const teamMembers = [
    {
      name: "Ester Silva",
      title: "Senior Software Engineer",
      image: "/lovable-uploads/b169a905-547e-41a9-b2a6-ce011c4306a1.png", // Placeholder
      bio: "Ester brings 8+ years of experience in distributed systems and observability. At OllyGarden, she focuses on building scalable analysis pipelines and ensuring our insights platform can handle telemetry data at any scale."
    },
    {
      name: "Leandro Costa",
      title: "DevOps Engineer",
      image: "/lovable-uploads/b169a905-547e-41a9-b2a6-ce011c4306a1.png", // Placeholder
      bio: "Leandro specializes in infrastructure automation and cloud-native technologies. He ensures OllyGarden's platform runs efficiently and securely, implementing best practices in CI/CD and infrastructure as code."
    },
    {
      name: "Catalina Rodriguez",
      title: "Product Manager",
      image: "/lovable-uploads/b169a905-547e-41a9-b2a6-ce011c4306a1.png", // Placeholder
      bio: "Catalina has a passion for translating complex technical concepts into user-friendly experiences. She works closely with our engineering team and customers to ensure our products solve real-world observability challenges."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The OllyGarden
              <span className="text-olly-green"> Cultivators</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              OllyGarden is powered by a dedicated team of engineers and strategists with deep roots in OpenTelemetry and a shared passion for efficient observability.
            </p>
          </div>

          {/* Founders */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">Founders</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <Card key={index} className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full bg-olly-green/10 mb-6 flex items-center justify-center">
                        <img 
                          src={founder.image} 
                          alt={founder.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{founder.name}</h4>
                      <div className="text-olly-green font-medium mb-4">{founder.title}</div>
                      <p className="text-muted-foreground leading-relaxed mb-6">{founder.bio}</p>
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm" className="border-olly-green/30">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-olly-green/30">
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">Our Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-card/50 border-border/50 hover:border-olly-green/30 transition-all duration-300 glow-box">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full bg-olly-green/10 mb-4 flex items-center justify-center">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{member.name}</h4>
                      <div className="text-olly-green font-medium mb-3">{member.title}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                      <Button variant="outline" size="sm" className="border-olly-green/30">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Our growing team combines decades of experience in software engineering, distributed systems, OpenTelemetry, and building B2B SaaS solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
