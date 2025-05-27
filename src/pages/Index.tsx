
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
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <WertsHero />
      <div id="sobre">
        <Features />
        <AboutSection />
      </div>
      <div id="produtos">
        <ProductTabs />
      </div>
      <div id="normas">
        <NormasSection />
      </div>
      <Testimonials />
      <div id="contato">
        <CTA />
        <MapSection />
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
