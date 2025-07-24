
import { Zap, Monitor, Settings, FileCheck, Heart, Wrench } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      iconBg: "bg-cyan-100",
      title: "Quadros de Distribuição",
      description: "Quadros de distribuição de energia elétrica para aplicações industriais, comerciais e residenciais."
    },
    {
      icon: Monitor,
      iconBg: "bg-cyan-100",
      title: "Banco de Capacitores",
      description: "Soluções para correção de fator de potência, reduzindo custos com energia elétrica."
    },
    {
      icon: Settings,
      iconBg: "bg-cyan-100",
      title: "Automação Industrial",
      description: "Sistemas de automação para processos industriais, aumentando eficiência e produtividade."
    },
    {
      icon: FileCheck,
      iconBg: "bg-cyan-100",
      title: "Padrões PTTA e TTA",
      description: "Painéis testados parcialmente (PTTA) e totalmente (TTA) conforme normas técnicas."
    },
    {
      icon: Heart,
      iconBg: "bg-cyan-100",
      title: "IT Médico",
      description: "Sistemas de fornecimento ininterrupto de energia para ambientes hospitalares."
    },
    {
      icon: Wrench,
      iconBg: "bg-cyan-100",
      title: "Projetos Especiais",
      description: "Desenvolvimento de soluções personalizadas para necessidades específicas do cliente."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Oferecemos soluções completas em painéis elétricos e automação industrial, 
            seguindo as normas ABNT-NBR.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 ${feature.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
