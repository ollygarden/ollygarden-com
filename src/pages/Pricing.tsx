
import Header from '@/components/Header';
import PricingHero from '@/components/PricingHero';
import PricingPlan from '@/components/PricingPlan';
import ProcessingCapacitySection from '@/components/ProcessingCapacitySection';
import PricingValueSection from '@/components/PricingValueSection';
import PricingFAQ from '@/components/PricingFAQ';
import FuturePricingSection from '@/components/FuturePricingSection';
import PricingCTASection from '@/components/PricingCTASection';
import Footer from '@/components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PricingHero />
      <PricingPlan />
      <ProcessingCapacitySection />
      <PricingValueSection />
      <PricingFAQ />
      <FuturePricingSection />
      <PricingCTASection />
      <Footer />
    </div>
  );
};

export default Pricing;
