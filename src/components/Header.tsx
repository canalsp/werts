import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/cbeed684-529d-4a25-a2fa-2dd9400ee2ad.png" 
                alt="Werts Logo" 
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => {
                const aboutSection = document.querySelector('#sobre h2');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
                setIsMenuOpen(false);
              }}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('normas')}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Normas
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  const aboutSection = document.querySelector('#sobre h2');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('normas')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Normas
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Contato
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
