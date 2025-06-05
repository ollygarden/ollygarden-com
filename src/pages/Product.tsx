
import Header from '@/components/Header';
import ProductHero from '@/components/ProductHero';
import ChallengeSection from '@/components/ChallengeSection';
import InstrumentationScoreSection from '@/components/InstrumentationScoreSection';
import HowScoreWorksSection from '@/components/HowScoreWorksSection';
import TechnicalProcessSection from '@/components/TechnicalProcessSection';
import BenefitsSection from '@/components/BenefitsSection';
import OpenStandardSection from '@/components/OpenStandardSection';
import ProductCTASection from '@/components/ProductCTASection';
import Footer from '@/components/Footer';

const Product = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProductHero />
      <ChallengeSection />
      <InstrumentationScoreSection />
      <HowScoreWorksSection />
      <TechnicalProcessSection />
      <BenefitsSection />
      <OpenStandardSection />
      <ProductCTASection />
      <Footer />
    </div>
  );
};

export default Product;
