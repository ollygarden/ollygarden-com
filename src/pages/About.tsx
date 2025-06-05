
import Header from '@/components/Header';
import AboutHero from '@/components/AboutHero';
import MissionVisionSection from '@/components/MissionVisionSection';
import StorySection from '@/components/StorySection';
import TeamSection from '@/components/TeamSection';
import OpenSourceSection from '@/components/OpenSourceSection';
import ValuesSection from '@/components/ValuesSection';
import SupportersSection from '@/components/SupportersSection';
import JoinUsSection from '@/components/JoinUsSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <MissionVisionSection />
      <StorySection />
      <TeamSection />
      <OpenSourceSection />
      <ValuesSection />
      <SupportersSection />
      <JoinUsSection />
      <Footer />
    </div>
  );
};

export default About;
