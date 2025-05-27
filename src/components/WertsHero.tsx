
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WertsHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')"}}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Excelência em Montagem
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Técnicos especializados na montagem de painéis elétricos de alta qualidade
          </p>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded font-medium text-base sm:text-lg transition-colors"
          >
            Conheça Nossa Equipe
          </button>
        </div>
      </div>

      {/* Navigation arrows - Hidden on mobile */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors hidden sm:block">
        <ChevronLeft size={48} />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors hidden sm:block">
        <ChevronRight size={48} />
      </button>
    </section>
  );
};

export default WertsHero;
