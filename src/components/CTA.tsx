
const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network3" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="white"/>
              <circle cx="80" cy="20" r="2" fill="white"/>
              <circle cx="50" cy="50" r="2" fill="white"/>
              <circle cx="20" cy="80" r="2" fill="white"/>
              <circle cx="80" cy="80" r="2" fill="white"/>
              <line x1="20" y1="20" x2="80" y2="20" stroke="white" strokeWidth="1"/>
              <line x1="20" y1="20" x2="50" y2="50" stroke="white" strokeWidth="1"/>
              <line x1="80" y1="20" x2="50" y2="50" stroke="white" strokeWidth="1"/>
              <line x1="50" y1="50" x2="20" y2="80" stroke="white" strokeWidth="1"/>
              <line x1="50" y1="50" x2="80" y2="80" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network3)"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Pronto para modernizar seus sistemas elétricos?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Entre em contato conosco hoje mesmo e solicite um orçamento sem compromisso para o seu projeto.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded font-semibold transition-all">
            Solicitar Orçamento
          </button>
          
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded font-semibold transition-all">
            Fale com um Especialista
          </button>
        </div>
      </div>

      {/* Seção "Entre em Contato" */}
      <div className="mt-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network4" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
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
            <rect width="100%" height="100%" fill="url(#network4)"/>
          </svg>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Entre em Contato
              </h2>
              <p className="text-xl text-gray-600">
                Estamos prontos para ajudar a transformar suas ideias em realidade.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Formulário */}
              <div>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                      <input
                        type="text"
                        id="nome"
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">Telefone/WhatsApp</label>
                      <input
                        type="tel"
                        id="telefone"
                        placeholder="(00) 00000-0000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                      <input
                        type="text"
                        id="assunto"
                        placeholder="Assunto da mensagem"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <textarea
                      id="mensagem"
                      rows={6}
                      placeholder="Sua mensagem"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              {/* Informações de contato */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-6 h-6 text-blue-600 mr-3">📍</span>
                    Endereço
                  </h3>
                  <p className="text-gray-600">
                    Av. Tore Albert Munck, 116<br />
                    Cotia - SP
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-6 h-6 text-blue-600 mr-3">📞</span>
                    Telefone
                  </h3>
                  <p className="text-gray-600">+55 11 97830-4267</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-6 h-6 text-blue-600 mr-3">👤</span>
                    Departamento Comercial
                  </h3>
                  <p className="text-gray-600">Francisco Nogueira</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-6 h-6 text-blue-600 mr-3">🕒</span>
                    Horário de Funcionamento
                  </h3>
                  <p className="text-gray-600">
                    Segunda a Sexta-feira<br />
                    7:00 às 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
