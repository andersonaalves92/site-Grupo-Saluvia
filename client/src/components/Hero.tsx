import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Clock, Shield, TrendingDown } from 'lucide-react';
import { GOOGLE_FORM_URL } from '@/lib/constants';

export default function Hero() {
  // Função para rolagem suave até a seção portfolio
  const rolarParaPortfolio = () => {
    const elemento = document.getElementById('portfolio');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-saluviaBeige to-saluviaBeige/80 py-16 sm:py-20 lg:py-28">
      {/* Container principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda - Conteúdo textual */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-title font-bold text-gray-900 leading-tight" data-testid="text-hero-titulo">
                Excelência em Materiais Hospitalares agora também para o setor privado.
              </h1>
              <p className="text-lg sm:text-xl font-body text-gray-700 leading-relaxed max-w-2xl" data-testid="text-hero-subtitulo">
                O Grupo Saluvia, referência no fornecimento público, leva o mesmo padrão de qualidade, agilidade e procedência para hospitais, clínicas e laboratórios privados.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-solicitar-cotacao-hero"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-saluviaGold hover:bg-saluviaGold/90 text-gray-900 font-button font-semibold shadow-lg text-base px-8"
                >
                  Solicitar Cotação
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={rolarParaPortfolio}
                className="w-full sm:w-auto font-button font-semibold border-2 border-saluviaGreen text-saluviaGreen hover:bg-saluviaGreen hover:text-white text-base px-8"
                data-testid="button-baixar-catalogo"
              >
                Ver Portfólio
              </Button>
            </div>
          </div>

          {/* Coluna direita - Card de destaque */}
          <div>
            <Card className="bg-saluviaGreen text-saluviaBeige shadow-2xl border-none">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-saluviaGold" />
                    <h3 className="text-2xl font-title font-bold text-saluviaGold" data-testid="text-card-titulo">
                      Entregas otimizadas
                    </h3>
                  </div>
                  <p className="text-base font-body text-saluviaBeige">
                    Estoque local em Brasília com logística dedicada para hospitais e clínicas.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-saluviaGold mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-body text-saluviaBeige">
                      Selos de procedência e certificações ANVISA
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-saluviaGold mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-body text-saluviaBeige">
                      Kits prontos por especialidade médica
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingDown className="w-5 h-5 text-saluviaGold mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-body text-saluviaBeige">
                      Contratos recorrentes com preço fixo
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-saluviaBeige/20">
                  <p className="text-xs font-body text-saluviaBeige/80 text-center">
                    Atendemos hospitais, clínicas, laboratórios, estética e veterinária
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
