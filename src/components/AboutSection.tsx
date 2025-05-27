
const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#2563eb"/>
              <circle cx="80" cy="20" r="2" fill="#2563eb"/>
              <circle cx="50" cy="50" r="2" fill="#2563eb"/>
              <circle cx="20" cy="80" r="2" fill="#2563eb"/>
              <circle cx="80" cy="80" r="2" fill="#2563eb"/>
              <line x1="20" y1="20" x2="80" y2="20" stroke="#2563eb" strokeWidth="1"/>
              <line x1="20" y1="20" x2="50" y2="50" stroke="#2563eb" strokeWidth="1"/>
              <line x1="80" y1="20" x2="50" y2="50" stroke="#2563eb" strokeWidth="1"/>
              <line x1="50" y1="50" x2="20" y2="80" stroke="#2563eb" strokeWidth="1"/>
              <line x1="50" y1="50" x2="80" y2="80" stroke="#2563eb" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Sobre a Werts
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              A equipe WERTS é especializada em painéis elétricos de baixa tensão, oferecendo 
              soluções de qualidade para projetos industriais, comerciais e residenciais.
            </p>
            
            <p>
              Seriedade, respeito e parceria formam o tripé no qual se apoiam os trabalhos da WERTS, 
              garantindo a satisfação de nossos clientes.
            </p>
            
            <p>
              Nossa missão é atender as necessidades de nossos clientes, levando um serviço rápido 
              de qualidade, com segurança e competitividade no segmento de projetos elétricos.
            </p>
          </div>
          
          <div className="mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium text-lg transition-colors">
              Conheça Nossa História
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
