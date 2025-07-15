import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  Wrench, 
  Zap, 
  Building2, 
  Factory, 
  Power, 
  Cable,
  Shield,
  Box,
  Construction,
  FileText,
  Lightbulb
} from 'lucide-react';

const ServicesAndProducts = () => {
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    {
      title: "Projetos de Painéis Elétricos",
      description: "Desenvolvemos e executamos o projeto do seu painel elétrico, considerando todos os componentes necessários, requisitos técnicos e de segurança entregando um painel elétrico personalizado. Já possui projeto? Nossa equipe irá validar seu projeto e efetuar o orçamento do painel elétrico, garantindo a segurança e a qualidade além do melhor custo e benefício.",
      icon: FileText
    },
    {
      title: "Montagem de Painéis Elétricos",
      description: "Nossa equipe técnica experiente, treinada e acompanhada em todas as etapas por profissionais do setor elétrico. Os componentes são todos identificados e testados. E o seu painel é entregue devidamente documentado. Sempre de acordo com todas as normas vigentes.",
      icon: Wrench
    },
    {
      title: "Área de Atendimento",
      description: "Executamos o projeto e montagem de painéis elétricos de pequeno, médio e grande porte para os setores comerciais, industriais e setores de Infraestrutura e Engenharia, atendendo desde lojas comerciais, supermercados, concessionárias de energia elétrica, empresas de saneamento, cooperativas, construtoras de obras prediais, shopping centers entre outros.",
      icon: Building2
    }
  ];

  const products = [
    {
      title: "QD/QDLF/QDC",
      description: "Quadros de distribuição de embutir e sobrepor com comandos locais e remotos de acordo com a necessidade do seu sistema elétrico.",
      icon: Power
    },
    {
      title: "QTA/QTM",
      description: "Quadros de transferência manual e automático com sistema de aferição de grandezas. De acordo com a necessidade do seu projeto.",
      icon: Settings
    },
    {
      title: "QGBT/PGBT",
      description: "Quadros gerais de distribuição e transferência de força com medidores de energia e grandezas elétricas.",
      icon: Zap
    },
    {
      title: "Automação Industrial",
      description: "Montagem de painéis de automação industrial e projetos de automação industrial para controles de manufaturas.",
      icon: Factory
    },
    {
      title: "Banco de Capacitores",
      description: "Controlador de fator de potência para compensação do excesso de energia reativa gerada por carga indutiva. Fazemos a análise de qualidade de energia para o projeto do seu BCA.",
      icon: Power
    },
    {
      title: "Comandos e Controle",
      description: "Quadros de comando para controle de motores, manobras e equipamentos. Para sistemas hídricos e de transportes de acordo com a necessidade de seu projeto.",
      icon: Settings
    },
    {
      title: "QD By-Pass Nobreak",
      description: "Quadros de transferência para manobra de BY-PASS e secção de cargas elétricas. Para no break´s, geradores e sistemas fotovoltaicos.",
      icon: Power
    },
    {
      title: "Projetos Especiais",
      description: "Temos a solução elétrica para seu projeto e sistema elétrico, apresentamos um projeto para o retrofit de seu sistema ou equipamento.",
      icon: Lightbulb
    },
    {
      title: "Barramentos Especiais",
      description: "Nossos quadros compõem a melhor qualidade de cobre eletrolítico, prateado e isolado conforme normas para melhor segurança e adequação do seu quadro elétrico.",
      icon: Cable
    },
    {
      title: "Quadros Modulares",
      description: "Quadros modulares para acomodação dos componentes e sistemas elétricos.",
      icon: Box
    },
    {
      title: "Canteiro de Obras",
      description: "Robozinhos e quadros auxiliares para seu canteiro de obra feita de acordo com a demanda necessária para sua obra. NBR17018 NBR5410, NR-10, NR12, e NR18.",
      icon: Construction
    },
    {
      title: "QGBT's",
      description: "Nossos quadros seguem todas as normas vigentes para acomodação e manobra com aferição de grandezas elétricas.",
      icon: Shield
    }
  ];

  const gallery = [
    "/lovable-uploads/e6d7b6a3-6c42-4e14-b31b-a0f1f135307c.png",
    "/lovable-uploads/58aac1c9-18ce-44c8-ad2f-109879b01ec0.png",
    "/lovable-uploads/e9f494c1-d419-44cf-a544-4ea1e92534a7.png",
    "/lovable-uploads/e6f567aa-e2da-4ee1-bcd0-77f608a90956.png",
    "/lovable-uploads/f13a6256-2293-44ee-b58b-f300146de487.png",
    "/lovable-uploads/53a9184b-771d-4e6e-b186-738116625e43.png"
  ];

  return (
    <section className="py-20 bg-gray-50" id="produtos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Produtos e Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Conheça nossa linha completa de produtos e serviços especializados em painéis elétricos
            e soluções para sua empresa.
          </p>
        </div>

        <Tabs defaultValue="services" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white">
              <TabsTrigger 
                value="services"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-8 py-3"
              >
                Nossos Serviços
              </TabsTrigger>
              <TabsTrigger 
                value="products"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-8 py-3"
              >
                Nossos Produtos
              </TabsTrigger>
              <TabsTrigger 
                value="gallery"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-8 py-3"
              >
                Galeria
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="services" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <product.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {product.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={`Montagem de Painéis Elétricos ${index + 1}`}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesAndProducts; 