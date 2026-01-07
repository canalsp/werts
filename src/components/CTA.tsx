
import { useState } from 'react';
import { useChatbot } from '@/contexts/ChatbotContext';

const CTA = () => {
  const { openChatbot } = useChatbot();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean | null, message: string}>({success: null, message: ''});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!formData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório';
    if (!formData.assunto.trim()) newErrors.assunto = 'Assunto é obrigatório';
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({success: null, message: ''});

    try {
      const response = await fetch('/enviar-contato.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({success: true, message: data.message || 'Mensagem enviada com sucesso!'});
        // Reset form on success
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'Erro ao enviar mensagem. Por favor, tente novamente.'
        });
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setSubmitStatus({
        success: false,
        message: 'Erro de conexão. Por favor, tente novamente mais tarde.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
          <button 
            onClick={openChatbot}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded font-semibold transition-all"
          >
            Solicitar Orçamento
          </button>
          
          <button 
            onClick={openChatbot}
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded font-semibold transition-all"
          >
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus.message && (
                    <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome"
                        className={`w-full px-4 py-3 border ${errors.nome ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors.nome && <p className="mt-1 text-sm text-red-600">{errors.nome}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">Telefone/WhatsApp *</label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="(00) 00000-0000"
                        className={`w-full px-4 py-3 border ${errors.telefone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors.telefone && <p className="mt-1 text-sm text-red-600">{errors.telefone}</p>}
                    </div>
                    <div>
                      <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">Assunto *</label>
                      <input
                        type="text"
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleInputChange}
                        placeholder="Assunto da mensagem"
                        className={`w-full px-4 py-3 border ${errors.assunto ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                      {errors.assunto && <p className="mt-1 text-sm text-red-600">{errors.assunto}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Sua mensagem"
                      className={`w-full px-4 py-3 border ${errors.mensagem ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    ></textarea>
                    {errors.mensagem && <p className="mt-1 text-sm text-red-600">{errors.mensagem}</p>}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">* Campos obrigatórios</p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 px-6 rounded-md font-medium transition-colors`}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                  </div>
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
