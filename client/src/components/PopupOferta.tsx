import { X, Gift, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GOOGLE_FORM_URL } from '@/lib/constants';

interface PopupOfertaProps {
  onFechar: () => void;
}

export default function PopupOferta({ onFechar }: PopupOfertaProps) {
  const abrirFormulario = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
    onFechar();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onFechar}
      data-testid="popup-oferta"
    >
      <Card
        className="relative max-w-md w-full bg-saluviaGreen text-saluviaBeige shadow-2xl border-none animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={onFechar}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-saluviaBeige transition-colors"
          aria-label="Fechar"
          data-testid="button-fechar-popup"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <CardContent className="p-8 space-y-6">
          {/* Ícone de presente */}
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-saluviaGold/20">
              <Gift className="w-8 h-8 text-saluviaGold" />
            </div>
          </div>

          {/* Título */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-title font-bold text-saluviaGold" data-testid="text-popup-titulo">
              BÔNUS EXCLUSIVO
            </h2>
            <p className="text-xl font-title font-semibold text-saluviaGold">
              10% DE DESCONTO NA PRIMEIRA COMPRA
            </p>
          </div>

          {/* Benefícios */}
          <div className="space-y-3">
            <p className="text-sm font-body text-saluviaBeige text-center">
              Preencha o formulário e receba:
            </p>
            
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Check className="w-5 h-5 text-saluviaGold" />
                </div>
                <p className="text-sm font-body text-saluviaBeige">
                  Catálogo técnico completo
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Check className="w-5 h-5 text-saluviaGold" />
                </div>
                <p className="text-sm font-body text-saluviaBeige">
                  Atendimento personalizado
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Check className="w-5 h-5 text-saluviaGold" />
                </div>
                <p className="text-sm font-body text-saluviaGold font-medium">
                  10% off na primeira compra
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button
            size="lg"
            onClick={abrirFormulario}
            className="w-full bg-saluviaGold hover:bg-saluviaGold/90 text-gray-900 font-button font-semibold shadow-lg"
            data-testid="button-cadastrar-bonus"
          >
            QUERO ME CADASTRAR E GARANTIR MEU BÔNUS
          </Button>

          {/* Texto legal */}
          <p className="text-xs font-body text-saluviaBeige/80 text-center">
            Oferta válida para novos clientes. Seus dados estão protegidos conforme a LGPD.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
