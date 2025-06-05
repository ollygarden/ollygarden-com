
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, FileText } from 'lucide-react';

const ProductCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-card/50 to-card/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-olly-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-olly-green/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Know Your 
            <span className="text-olly-green"> Score?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Join the early access program and be among the first to receive your Instrumentation Score. Transform guesswork into measurable improvements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg"
              className="bg-olly-green text-olly-dark hover:bg-olly-green/90 font-semibold px-8 py-4 text-lg transition-all duration-200 hover:scale-105 glow-box group"
            >
              Get Your Instrumentation Score
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-olly-green/30 text-olly-green hover:bg-olly-green/10 px-8 py-4 text-lg transition-all duration-200 hover:scale-105 group"
            >
              <FileText className="mr-2 h-5 w-5" />
              Request Sample Report
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12 text-sm">
            <div className="text-center">
              <div className="text-olly-green font-semibold">No Long-Term Storage</div>
              <div className="text-muted-foreground">Your data is analyzed and discarded</div>
            </div>
            <div className="text-center">
              <div className="text-olly-green font-semibold">Quick Analysis</div>
              <div className="text-muted-foreground">Get your score within hours</div>
            </div>
            <div className="text-center">
              <div className="text-olly-green font-semibold">Actionable Results</div>
              <div className="text-muted-foreground">Clear steps to improve</div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-muted-foreground">
              Early access special pricing • No credit card required • Join the open standard movement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCTASection;
