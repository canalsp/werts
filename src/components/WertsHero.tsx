import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const WertsHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides = [
    {
      image: "/lovable-uploads/e6d7b6a3-6c42-4e14-b31b-a0f1f135307c.webp",
      title: "Painéis de Baixa Tensão",
      description: "Soluções completas em painéis elétricos para sua empresa",
      section: "produtos"
    },
    {
      image: "/lovable-uploads/58aac1c9-18ce-44c8-ad2f-109879b01ec0.webp",
      title: "Automação Industrial",
      description: "Tecnologia avançada para controle e monitoramento",
      section: "produtos"
    },
    {
      image: "/lovable-uploads/e9f494c1-d419-44cf-a544-4ea1e92534a7.webp",
      title: "Quadros de Distribuição",
      description: "Qualidade e segurança em distribuição de energia",
      section: "produtos"
    },
    {
      image: "/lovable-uploads/e6f567aa-e2da-4ee1-bcd0-77f608a90956.webp",
      title: "Projetos Especiais",
      description: "Soluções personalizadas para suas necessidades",
      section: "produtos"
    },
    {
      image: "/lovable-uploads/f13a6256-2293-44ee-b58b-f300146de487.webp",
      title: "Banco de Capacitores",
      description: "Eficiência energética para sua instalação",
      section: "produtos"
    },
    {
      image: "/lovable-uploads/53a9184b-771d-4e6e-b186-738116625e43.webp",
      title: "QGBT's",
      description: "Controle total da distribuição de energia",
      section: "produtos"
    }
  ];

  return (
    <header className="relative bg-gray-900 h-[400px] md:h-[600px] flex items-center overflow-hidden">
      <style>{`
        .swiper-slide {
          transition: all 0.3s ease;
          display: flex !important;
          align-items: center;
          background: transparent;
        }
        .swiper-slide-active {
          transform: scale(1);
        }
        .swiper-slide-prev, .swiper-slide-next {
          opacity: 0.5;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #fff !important;
        }
        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>

      <div className="absolute inset-0">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="!w-[90%] md:!w-[80%] bg-transparent">
              <div className="flex w-full h-full items-center flex-col md:flex-row gap-4 md:gap-8 px-4">
                {/* Texto */}
                <div className="w-full md:w-1/2 text-white p-4 md:p-8 bg-gray-900 bg-opacity-80 rounded-xl">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{slide.title}</h2>
                  <p className="text-base md:text-xl">{slide.description}</p>
                  <button 
                    onClick={() => scrollToSection(slide.section)}
                    className="mt-4 md:mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base"
                  >
                    Saiba Mais
                  </button>
                </div>
                
                {/* Imagem */}
                <div className="w-full md:w-1/2 h-[200px] md:h-[500px] overflow-hidden rounded-xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
};

export default WertsHero;
