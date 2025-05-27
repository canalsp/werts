
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/cbeed684-529d-4a25-a2fa-2dd9400ee2ad.png" 
                alt="Werts Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Especialistas em painéis elétricos de baixa tensão, comandos e automação industrial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Produtos */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Produtos</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-white transition-colors">Quadros de Distribuição</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Banco de Capacitores</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automação Industrial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Padrões PTTA e TTA</a></li>
            </ul>
          </div>
          
          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Empresa</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Equipe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Contato</h4>
            <div className="space-y-3 text-gray-400 text-sm sm:text-base">
              <div className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">📍</span>
                <div>
                  <p>Av. Tore Albert Munck, 116</p>
                  <p>Cotia - SP</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">📞</span>
                <p>+55 11 97830-4267</p>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">✉️</span>
                <p>contato@werts.com.br</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">🕒</span>
                <div>
                  <p>Segunda a Sexta-feira</p>
                  <p>7:00 às 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Werts. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
