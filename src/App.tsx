import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Truck, 
  Shield, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Play,
  Zap,
  Wifi,
  Battery,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Como funciona a transformação de TV para tablet?",
      answer: "O NomadView possui uma tela touchscreen de 22 polegadas que pode ser destacada da base, transformando-se instantaneamente em um tablet gigante. Basta pressionar o botão de liberação e destacar a tela."
    },
    {
      question: "Qual é a qualidade da imagem?",
      answer: "O NomadView oferece resolução Full HD 1080p com tecnologia IPS para cores vibrantes e ângulos de visão amplos. A tela possui tratamento anti-reflexo para uso em qualquer ambiente."
    },
    {
      question: "A bateria dura quanto tempo?",
      answer: "Em modo tablet, a bateria dura até 8 horas de uso contínuo. Em modo TV conectado à energia, você pode usar indefinidamente enquanto a bateria carrega automaticamente."
    },
    {
      question: "Posso conectar dispositivos externos?",
      answer: "Sim! O NomadView possui múltiplas entradas: HDMI, USB-C, USB 3.0, entrada para fones de ouvido e slot para cartão microSD. Conecte consoles, notebooks, smartphones e muito mais."
    },
    {
      question: "Como é o processo de entrega?",
      answer: "Enviamos para todo o Brasil com frete grátis. O prazo de entrega varia de 3 a 7 dias úteis dependendo da sua região. Você recebe o código de rastreamento por email."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! O NomadView possui 12 meses de garantia nacional contra defeitos de fabricação. Nosso suporte técnico está disponível via WhatsApp e email."
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      rating: 5,
      comment: "Incrível! Uso no escritório como monitor extra e em casa como TV. A qualidade da imagem é excelente."
    },
    {
      name: "Ana Costa",
      location: "Rio de Janeiro, RJ", 
      rating: 5,
      comment: "Perfeito para quem viaja muito. Levo nas viagens e tenho entretenimento garantido. Muito prático!"
    },
    {
      name: "Roberto Lima",
      location: "Belo Horizonte, MG",
      rating: 5,
      comment: "Comprei para minha filha estudar. Ela usa como tablet para aulas online e como TV para relaxar. Adoramos!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Monitor className="w-8 h-8 text-purple-400" />
              <Smartphone className="w-4 h-4 text-cyan-400 absolute -bottom-1 -right-1" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              NomadView
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#produto" className="text-gray-300 hover:text-purple-400 transition-colors">Produto</a>
            <a href="#beneficios" className="text-gray-300 hover:text-purple-400 transition-colors">Benefícios</a>
            <a href="#depoimentos" className="text-gray-300 hover:text-purple-400 transition-colors">Depoimentos</a>
            <a href="#faq" className="text-gray-300 hover:text-purple-400 transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              TV que vira Tablet
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">Revolução Portátil</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubra o <strong className="text-purple-400">NomadView</strong> - a primeira TV portátil com touchscreen de 22" que se transforma em tablet. Entretenimento sem limites, onde você estiver.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-1 rounded-2xl">
                <button 
                  onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-slate-900 hover:bg-transparent transition-all duration-300 px-8 py-4 rounded-xl text-white font-semibold text-lg flex items-center space-x-2 group"
                >
                  <span>Comprar Agora</span>
                  <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  R$ 194,80
                </div>
                <div className="text-green-400 font-medium flex items-center justify-center space-x-1">
                  <Truck className="w-4 h-4" />
                  <span>Frete Grátis para todo Brasil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <img 
                src="/WhatsApp Image 2025-09-02 at 23.21.11.jpeg" 
                alt="NomadView TV Mode" 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-white font-semibold mb-2">Modo TV</h3>
              <p className="text-gray-300 text-sm">Experiência completa de TV com base estável</p>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
              <img 
                src="/WhatsApp Image 2025-09-02 at 23.21.11 (1).jpeg" 
                alt="NomadView Tablet Mode" 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-white font-semibold mb-2">Modo Tablet</h3>
              <p className="text-gray-300 text-sm">Touchscreen responsivo para interação direta</p>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <img 
                src="/WhatsApp Image 2025-09-02 at 23.21.11 (2).jpeg" 
                alt="NomadView Portabilidade" 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-white font-semibold mb-2">Portabilidade</h3>
              <p className="text-gray-300 text-sm">Leve para qualquer lugar com facilidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="beneficios" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tecnologia Revolucionária
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Tela 22" Full HD</h3>
              <p className="text-gray-300 text-sm">Resolução 1080p com tecnologia IPS para cores vibrantes e ângulos perfeitos</p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Touchscreen Responsivo</h3>
              <p className="text-gray-300 text-sm">Toque multi-point ultra sensível para navegação intuitiva e jogos</p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Battery className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Bateria 8h</h3>
              <p className="text-gray-300 text-sm">Autonomia de até 8 horas para entretenimento sem interrupções</p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Conectividade Total</h3>
              <p className="text-gray-300 text-sm">Wi-Fi, Bluetooth, HDMI, USB-C e muito mais para máxima versatilidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section id="produto" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-purple-500/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Duas Experiências em Um Só Dispositivo
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Monitor className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Modo TV Tradicional</h3>
                      <p className="text-gray-300">Assista seus programas favoritos, filmes e séries com qualidade de cinema em casa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Smartphone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Modo Tablet Gigante</h3>
                      <p className="text-gray-300">Navegue, jogue, desenhe e trabalhe com a liberdade de um tablet de 22 polegadas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Construção Premium</h3>
                      <p className="text-gray-300">Design robusto e elegante, resistente a riscos e impactos do dia a dia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
                <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-purple-500/30">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Especificações Técnicas</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Tela:</span>
                      <span className="text-white font-medium">22" Full HD IPS Touchscreen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Resolução:</span>
                      <span className="text-white font-medium">1920 x 1080 pixels</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Bateria:</span>
                      <span className="text-white font-medium">8000mAh (8h autonomia)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Conectividade:</span>
                      <span className="text-white font-medium">Wi-Fi, Bluetooth, HDMI, USB-C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sistema:</span>
                      <span className="text-white font-medium">Android 12 + TV Box integrado</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Peso:</span>
                      <span className="text-white font-medium">2.8kg (TV) / 1.2kg (Tablet)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="depoimentos" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Mais de 10.000 Clientes Satisfeitos
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">Veja o que nossos clientes estão dizendo</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 backdrop-blur-sm bg-white/10 rounded-2xl px-6 py-4 border border-green-500/30">
              <Award className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <div className="text-white font-semibold">Avaliação Média</div>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-300">4.9/5 (2.847 avaliações)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/10 rounded-2xl border border-purple-500/20 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="backdrop-blur-md bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-3xl p-8 md:p-12 border border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Não Perca Esta Oportunidade Única!
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Seja um dos primeiros a experimentar o futuro do entretenimento portátil. Oferta limitada!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  R$ 194,80
                </div>
                <div className="text-green-400 font-medium flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Frete Grátis + 12x sem juros</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-1 rounded-2xl inline-block">
              <a 
                href="https://seguro.nomadview.shop/checkout/Z-08SZX097KE25"
                target="_blank"
                rel="noopener noreferrer"
                id="final-cta"
                className="bg-slate-900 hover:bg-transparent transition-all duration-300 px-12 py-6 rounded-xl text-white font-bold text-xl flex items-center space-x-3 group"
              >
                <span>COMPRAR AGORA</span>
                <Play className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Garantia 12 meses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-green-400" />
                <span>Entrega 3-7 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Suporte técnico</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-500/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Monitor className="w-8 h-8 text-purple-400" />
                  <Smartphone className="w-4 h-4 text-cyan-400 absolute -bottom-1 -right-1" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  NomadView
                </span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Revolucionando o entretenimento portátil com tecnologia inovadora e design premium.
              </p>
              <p className="text-gray-400 text-sm">
                CNPJ: 34.662.852/0001-66
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Especificações</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Manual do Usuário</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Garantia</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Suporte</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 NomadView. Todos os direitos reservados. | Transformando entretenimento em mobilidade.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-1 rounded-full">
          <button 
            onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-slate-900 hover:bg-transparent transition-all duration-300 px-6 py-3 rounded-full text-white font-semibold flex items-center space-x-2 group"
          >
            <span>Comprar</span>
            <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
