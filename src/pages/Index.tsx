
import Header from '@/components/Header';
import WertsHero from '@/components/WertsHero';
import Features from '@/components/Features';
import ProductTabs from '@/components/ProductTabs';
import AboutSection from '@/components/AboutSection';
import NormasSection from '@/components/NormasSection';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <WertsHero />
      <Features />
      <ProductTabs />
      <AboutSection />
      <NormasSection />
      <Testimonials />
      <CTA />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
