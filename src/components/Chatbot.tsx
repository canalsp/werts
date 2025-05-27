
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Olá! Sou assistente da Werts. Como posso ajudá-lo hoje? Posso responder sobre nossos produtos e serviços!'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = { type: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);

    // Simular resposta do bot
    setTimeout(() => {
      let botResponse = '';
      const lowerInput = inputMessage.toLowerCase();

      if (lowerInput.includes('produto') || lowerInput.includes('painel') || lowerInput.includes('elétrico')) {
        botResponse = 'Oferecemos painéis elétricos de baixa tensão, quadros de distribuição, banco de capacitores e automação industrial. Todos seguindo as normas técnicas. Gostaria de falar com nosso comercial?';
      } else if (lowerInput.includes('norma') || lowerInput.includes('qualidade')) {
        botResponse = 'Seguimos rigorosamente as normas ABNT NBR 5410, NR-10 e IEC 61439. Nossa qualidade é certificada. Posso conectá-lo com nosso especialista Francisco Nogueira?';
      } else if (lowerInput.includes('contato') || lowerInput.includes('orçamento') || lowerInput.includes('comercial')) {
        botResponse = 'Vou conectá-lo com nosso comercial Francisco Nogueira. Clique no botão abaixo para falar diretamente no WhatsApp!';
      } else if (lowerInput.includes('endereço') || lowerInput.includes('localização') || lowerInput.includes('onde')) {
        botResponse = 'Estamos localizados na Av. Tore Albert Munck, 116, Cotia - SP. Funcionamos de Segunda a Sexta, das 7:00 às 17:00.';
      } else {
        botResponse = 'Obrigado pela sua pergunta! Para melhor atendê-lo, vou conectá-lo com nosso especialista Francisco Nogueira que poderá esclarecer todas suas dúvidas.';
      }

      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 1000);

    setInputMessage('');
  };

  const handleWhatsApp = () => {
    const phone = '5511978304267';
    const message = 'Olá! Vim através do site da Werts e gostaria de mais informações sobre os produtos e serviços.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Botão do Chat */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Janela do Chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col border">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Assistente Werts</h3>
            <p className="text-sm opacity-90">Online agora</p>
          </div>

          {/* Mensagens */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {/* Botão WhatsApp */}
          <div className="p-3 border-t">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors mb-2"
            >
              💬 Falar com Francisco Nogueira
            </button>
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua mensagem..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
