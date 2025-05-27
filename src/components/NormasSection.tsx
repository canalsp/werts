
import { Shield, CheckCircle } from 'lucide-react';

const NormasSection = () => {
  const normas = [
    {
      code: "ABNT NBR IEC 60439-1",
      description: "Conjuntos de manobra e controle de baixa tensão - Parte 1: Conjuntos com ensaio de tipo totalmente testados (TTA) e conjuntos com ensaio de tipo parcialmente testados (PTTA)."
    },
    {
      code: "ABNT NBR IEC 60529",
      description: "Graus de proteção para invólucros de equipamentos elétricos (código IP)."
    },
    {
      code: "ABNT NBR 5410",
      description: "Instalações elétricas de baixa tensão."
    }
  ];

  const compromissos = [
    {
      title: "Segurança",
      description: "Todos os nossos produtos são desenvolvidos priorizando a segurança dos usuários e das instalações."
    },
    {
      title: "Responsabilidade Ambiental",
      description: "Utilizamos processos e materiais que minimizam o impacto ambiental, contribuindo para a sustentabilidade."
    },
    {
      title: "Qualidade",
      description: "Controle rigoroso de qualidade em todas as etapas de produção, garantindo produtos confiáveis e duráveis."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network2" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="3" fill="#2563eb"/>
              <circle cx="90" cy="30" r="3" fill="#2563eb"/>
              <circle cx="60" cy="60" r="3" fill="#2563eb"/>
              <circle cx="30" cy="90" r="3" fill="#2563eb"/>
              <circle cx="90" cy="90" r="3" fill="#2563eb"/>
              <line x1="30" y1="30" x2="90" y2="30" stroke="#2563eb" strokeWidth="1"/>
              <line x1="30" y1="30" x2="60" y2="60" stroke="#2563eb" strokeWidth="1"/>
              <line x1="90" y1="30" x2="60" y2="60" stroke="#2563eb" strokeWidth="1"/>
              <line x1="60" y1="60" x2="30" y2="90" stroke="#2563eb" strokeWidth="1"/>
              <line x1="60" y1="60" x2="90" y2="90" stroke="#2563eb" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network2)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Normas e Certificações
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Todos nossos projetos, produtos e montagens são fabricados seguindo as 
            normas vigentes ABNT - NBR, garantindo qualidade e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Normas Técnicas */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Normas Técnicas</h3>
            </div>
            
            <div className="space-y-6">
              {normas.map((norma, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{norma.code}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{norma.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compromissos */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Compromissos</h3>
            </div>
            
            <div className="space-y-6">
              {compromissos.map((compromisso, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{compromisso.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{compromisso.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NormasSection;
