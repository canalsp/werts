
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            A satisfação dos nossos clientes é o nosso maior orgulho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
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
