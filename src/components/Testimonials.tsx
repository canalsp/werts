
const Testimonials = () => {
  const testimonials = [
    {
      initials: "CS",
      name: "Carlos Silva",
      role: "Gerente de Manutenção, Indústria Metalúrgica",
      content: "Os painéis elétricos fornecidos pela Werts superaram nossas expectativas em termos de qualidade e segurança. A equipe técnica é extremamente competente e atenciosa."
    },
    {
      initials: "AO",
      name: "Ana Oliveira",
      role: "Engenheira Eletricista, Construtora Horizonte",
      content: "Trabalhamos com a Werts em diversos projetos e sempre entregam no prazo, com qualidade e seguindo todas as normas técnicas. Parceiros confiáveis."
    },
    {
      initials: "RM",
      name: "Roberto Mendes",
      role: "Diretor Industrial, Grupo Nexus",
      content: "A automação implementada pela Werts em nossa linha de produção aumentou significativamente nossa eficiência. Profissionais qualificados e soluções de alta qualidade."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            A satisfação dos nossos clientes é o nosso maior orgulho.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-lg">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-blue-600 font-semibold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
