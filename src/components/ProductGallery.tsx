
const ProductGallery = () => {
  const products = [
    {
      title: "Quadros de Distribuição",
      image: "/lovable-uploads/e6d7b6a3-6c42-4e14-b31b-a0f1f135307c.png",
      description: "Quadros elétricos com componentes de alta qualidade e organização profissional"
    },
    {
      title: "Banco de Capacitores",
      image: "/lovable-uploads/58aac1c9-18ce-44c8-ad2f-109879b01ec0.png",
      description: "Sistemas de compensação de energia reativa para eficiência energética"
    },
    {
      title: "Automação Industrial",
      image: "/lovable-uploads/e9f494c1-d419-44cf-a544-4ea1e92534a7.png",
      description: "Painéis de comando e controle industrial com tecnologia avançada"
    },
    {
      title: "Processo de Montagem",
      image: "/lovable-uploads/e6f567aa-e2da-4ee1-bcd0-77f608a90956.png",
      description: "Nossa equipe especializada em montagem de painéis elétricos"
    },
    {
      title: "Componentes Internos",
      image: "/lovable-uploads/f13a6256-2293-44ee-b58b-f300146de487.png",
      description: "Detalhes internos dos painéis com componentes de qualidade"
    },
    {
      title: "Cabeamento Profissional",
      image: "/lovable-uploads/53a9184b-771d-4e6e-b186-738116625e43.png",
      description: "Organização e identificação profissional de cabos e conexões"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nossos Produtos em Ação
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça a qualidade e precisão dos nossos produtos através de imagens reais dos nossos projetos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
