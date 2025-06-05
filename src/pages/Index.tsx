
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyOllyGardenSection from '@/components/WhyOllyGardenSection';
import CredibilitySection from '@/components/CredibilitySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SolutionSection />
      <HowItWorksSection />
      <WhyOllyGardenSection />
      <CredibilitySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
