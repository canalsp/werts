import Header from '@/components/Header';
import WertsHero from '@/components/WertsHero';
import Features from '@/components/Features';
import ProductTabs from '@/components/ProductTabs';
import ProductGallery from '@/components/ProductGallery';
import AboutSection from '@/components/AboutSection';
import NormasSection from '@/components/NormasSection';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ServicesAndProducts from '@/components/ServicesAndProducts';
import ParticlesBackground from '@/components/ParticlesBackground';

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <ParticlesBackground />
      <Header />
      <WertsHero />
      <div id="sobre">
        <Features />
        <AboutSection />
      </div>
      <div id="produtos">
        <ProductTabs />
        <ProductGallery />
        <ServicesAndProducts />
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
    </main>
  );
};

export default Index;
