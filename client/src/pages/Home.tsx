import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Credibilidade from '@/components/Credibilidade';
import Portfolio from '@/components/Portfolio';
import Diferenciais from '@/components/Diferenciais';
import Segmentos from '@/components/Segmentos';
import Cases from '@/components/Cases';
import Contato from '@/components/Contato';
import Rodape from '@/components/Rodape';
import BotaoWhatsApp from '@/components/BotaoWhatsApp';
import ChatLateral from '@/components/ChatLateral';
import PopupOferta from '@/components/PopupOferta';

export default function Home() {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  // Exibir popup após 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Barra de navegação fixa */}
      <Navbar />

      {/* Seções da página */}
      <main>
        <Hero />
        <Credibilidade />
        <Portfolio />
        <Diferenciais />
        <Segmentos />
        <Cases />
        <Contato />
      </main>

      {/* Rodapé */}
      <Rodape />

      {/* Elementos flutuantes */}
      <BotaoWhatsApp />
      <ChatLateral />

      {/* Popup de oferta - aparece após 5 segundos */}
      {mostrarPopup && <PopupOferta onFechar={() => setMostrarPopup(false)} />}
    </div>
  );
}
