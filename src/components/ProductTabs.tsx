
import { useState } from 'react';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('controle');

  const tabs = [
    { id: 'controle', label: 'Painel de Controle' },
    { id: 'distribuicao', label: 'Painel de Distribuição' },
    { id: 'disjuntores', label: 'Disjuntores' }
  ];

  const content = {
    controle: {
      title: 'Painel de Controle Industrial',
      description: 'Painel de controle industrial completo com sistema de ventilação, displays digitais e botões de comando. Projetado para ambientes industriais exigentes, oferecendo controle preciso e seguro de equipamentos e processos.',
      features: [
        'Sistema de ventilação integrado para controle térmico',
        'Displays digitais para monitoramento em tempo real',
        'Botões de comando e sinalizadores para operação segura',
        'Construção robusta seguindo normas ABNT-NBR'
      ],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    distribuicao: {
      title: 'Painel de Distribuição',
      description: 'Painel de distribuição com disjuntores, inversores de frequência e sistema de proteção. Projetado para distribuição segura de energia elétrica em ambientes industriais e comerciais.',
      features: [
        'Disjuntores de alta capacidade para proteção de circuitos',
        'Inversores de frequência para controle de motores',
        'Organização interna otimizada para manutenção',
        'Etiquetas de segurança e identificação conforme normas'
      ],
      image: 'https://images.unsplash.com/photo-1621905252189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    disjuntores: {
      title: 'Sistema de Disjuntores',
      description: 'Sistema de disjuntores com proteção contra choques elétricos e sinalização de segurança. Projetado para garantir a segurança das instalações elétricas e dos usuários.',
      features: [
        'Disjuntores com indicação visual de estado (ligado/desligado)',
        'Sinalização de segurança conforme normas regulamentadoras',
        'Proteção contra sobrecarga e curto-circuito',
        'Acesso restrito a pessoal autorizado para maior segurança'
      ],
      image: 'https://images.unsplash.com/photo-1621905253189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos Painéis Elétricos
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Conheça alguns exemplos dos painéis elétricos fabricados pela Werts, seguindo 
            os mais altos padrões de qualidade e segurança.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-lg shadow-sm border p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={content[activeTab].image} 
              alt={content[activeTab].title}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {content[activeTab].title}
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {content[activeTab].description}
            </p>
            <ul className="space-y-4">
              {content[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
