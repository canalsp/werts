import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const HistoryContent = () => (
    <div className="space-y-4">
      <h3 className="font-bold text-lg text-blue-600 mb-2">WERTS MONTAGEM DE PAINÉIS PROJETOS E COMÉRCIO DE MATERIAIS ELÉTRICOS</h3>
      
      <p>
        Somos a união da empresa W-TEC Serviços Elétricos e Montagem de Painéis há 11 anos no mercado atendendo com excelência e credibilidade o mercado nesses anos. E com muito orgulho em todos esses anos sempre atendemos com excelência todos nossos clientes, estas conquistas se deve a nossa equipe comprometida com a excelência e responsabilidade que tratamos todos nossos projetos, o que era bom agora está melhor com a WERTS. Tornamos nossa empresa muito mais competitiva e dinâmica.
      </p>

      <h4 className="font-bold text-lg text-blue-600 mt-4">A Werts e Seus Serviços</h4>
      
      <p>
        A Werts se estabelece como uma referência no setor de montagem de painéis elétricos com o fortalecimento dessa união, continuamos oferecendo soluções abrangentes para diversas aplicações. A empresa dedica-se à montagem de painéis de comando, distribuição, bancos de capacitores e automação, atendendo às necessidades de variados segmentos industriais e comerciais.
      </p>

      <p>
        Além de sua expertise técnica, a Werts compromete-se em seguir rigorosamente normas e padrões internacionais como PTTA, TTA e o sistema IT médico. Esses padrões são essenciais para garantir a qualidade e a segurança dos produtos fornecidos.
      </p>

      <p>
        Em um mercado onde a segurança e a eficiência são primordiais, a Werts destaca-se por sua dedicação à excelência na fabricação de painéis e quadros elétricos, oferecendo soluções que atendem às mais altas especificações técnicas e regulatórias.
      </p>

      <p>
        Em termos de segurança, a observância das normas ABNT - NBR reduz significativamente os riscos de curto-circuitos, sobrecargas e outros problemas elétricos que podem comprometer a integridade das instalações e a segurança dos usuários.
      </p>

      <h4 className="font-bold text-lg text-blue-600 mt-4">A Excelência na montagem de Painéis elétricos, comandos e automação industrial.</h4>
    </div>
  );

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
            {isMobile ? (
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium text-lg transition-colors">
                    Conheça Nossa História
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Nossa História</DialogTitle>
                    <button className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Fechar</span>
                    </button>
                  </DialogHeader>
                  <HistoryContent />
                </DialogContent>
              </Dialog>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium text-lg transition-colors">
                      Conheça Nossa História
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-2xl p-4 text-left space-y-4 bg-white text-gray-800 border border-gray-200 shadow-xl rounded-lg">
                    <HistoryContent />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
