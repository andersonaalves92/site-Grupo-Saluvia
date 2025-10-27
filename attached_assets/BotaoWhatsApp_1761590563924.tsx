import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { WHATSAPP_LINK } from '@/lib/constants';

export default function BotaoWhatsApp() {
  const [mostrarTooltip, setMostrarTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Tooltip */}
      {mostrarTooltip && (
        <div className="absolute bottom-full right-0 mb-2 animate-in slide-in-from-bottom-2 duration-200">
          <div className="bg-saluviaGreen text-saluviaBeige  text-sm font-body px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
            💬 Fale com consultor + Ganhe 10%
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-saluviaGreen text-saluviaBeige"></div>
          </div>
        </div>
      )}

      {/* BotÃ£o */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setMostrarTooltip(true)}
        onMouseLeave={() => setMostrarTooltip(false)}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[color:var(--saluviaGreen)] text-white shadow-2xl hover:scale-110 transition-transform duration-300 hover-elevate"
        aria-label="Falar no WhatsApp"
        data-testid="button-whatsapp"
      >
        <MessageCircle className="w-8 h-8" fill="currentColor" />
        
        {/* AnimaÃ§Ã£o de pulso */}
        <span className="absolute inset-0 rounded-full bg-[color:var(--saluviaGreen)] animate-ping opacity-20"></span>
      </a>
    </div>
  );
}

