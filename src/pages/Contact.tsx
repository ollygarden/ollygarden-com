
import Header from '@/components/Header';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import ContactMethods from '@/components/ContactMethods';
import ContactReasons from '@/components/ContactReasons';
import CompanyInfo from '@/components/CompanyInfo';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <div className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactMethods />
            </div>
          </div>
        </div>
      </div>
      <ContactReasons />
      <CompanyInfo />
      <Footer />
    </div>
  );
};

export default Contact;
