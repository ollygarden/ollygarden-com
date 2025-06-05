
import { Globe } from 'lucide-react';

const CompanyInfo = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/30 rounded-2xl p-8 border border-border/50">
            <div className="flex items-start space-x-6">
              <div className="bg-olly-green/10 p-4 rounded-lg">
                <Globe className="h-8 w-8 text-olly-green" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">About Our Company</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    OllyGarden is a fully remote, post-geographic company, allowing us to work with the best talent and serve clients globally. Our distributed team approach enables us to provide round-the-clock support and diverse perspectives on observability challenges.
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-foreground">Legal Entity:</span> OllyGarden Inc. is incorporated in Delaware, USA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
