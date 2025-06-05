
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactMethods = () => {
  return (
    <div className="space-y-8">
      {/* Direct Email */}
      <div className="bg-card/30 rounded-2xl p-6 border border-border/50">
        <div className="flex items-start space-x-4">
          <div className="bg-olly-green/10 p-3 rounded-lg">
            <Mail className="h-6 w-6 text-olly-green" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Direct Email</h3>
            <p className="text-muted-foreground text-sm mb-4">
              For the fastest response to specific inquiries, please use our contact form. For general correspondence:
            </p>
            <div className="space-y-2">
              <div>
                <span className="text-sm font-medium text-foreground">General Inquiries:</span>
                <a 
                  href="mailto:hello@olly.garden" 
                  className="block text-olly-green hover:text-olly-green/80 transition-colors"
                >
                  hello@olly.garden
                </a>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground">Sales & Product:</span>
                <a 
                  href="mailto:sales@olly.garden" 
                  className="block text-olly-green hover:text-olly-green/80 transition-colors"
                >
                  sales@olly.garden
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-card/30 rounded-2xl p-6 border border-border/50">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Connect with us</h3>
        <p className="text-muted-foreground text-sm mb-6">
          Follow our work and connect with us on social media:
        </p>
        <div className="space-y-4">
          <a 
            href="#" 
            className="flex items-center space-x-3 text-muted-foreground hover:text-olly-green transition-colors duration-200 group"
          >
            <div className="bg-olly-green/10 p-2 rounded-lg group-hover:bg-olly-green/20 transition-colors">
              <Linkedin className="h-5 w-5" />
            </div>
            <span>LinkedIn Company Page</span>
          </a>
          <a 
            href="#" 
            className="flex items-center space-x-3 text-muted-foreground hover:text-olly-green transition-colors duration-200 group"
          >
            <div className="bg-olly-green/10 p-2 rounded-lg group-hover:bg-olly-green/20 transition-colors">
              <Github className="h-5 w-5" />
            </div>
            <span>GitHub Organization</span>
          </a>
        </div>
      </div>

      {/* Response Time */}
      <div className="bg-olly-green/5 rounded-2xl p-6 border border-olly-green/20">
        <h3 className="text-lg font-semibold mb-2 text-foreground">Response Time</h3>
        <p className="text-muted-foreground text-sm">
          We typically respond to inquiries within 24 hours during business days. For urgent matters, please indicate this in your message subject line.
        </p>
      </div>
    </div>
  );
};

export default ContactMethods;
