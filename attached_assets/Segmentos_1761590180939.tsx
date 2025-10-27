import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Building2,
  Stethoscope,
  FlaskConical,
  Sparkles,
  PawPrint,
} from 'lucide-react';
import { GOOGLE_FORM_URL } from '@/lib/constants';

const segmentos = [
  {
    icone: Building2,
    titulo: "Hospitais Premium",
    descricao: "Fornecimento com SLA garantido e Key Account Manager dedicado para atendimento personalizado.",
  },
  {
    icone: Stethoscope,
    titulo: "Clí­nicas Especializadas",
    descricao: "Kits por especialidade (angiologia, ortopedia, oncologia) com uso recorrente e entrega ágil.",
  },
  {
    icone: FlaskConical,
    titulo: "Laboratórios",
    descricao: "Insumos com alto controle de qualidade, rastreabilidade completa e certificação ANVISA.",
  },
  {
    icone: Sparkles,
    titulo: "Estética e Odontologia",
    descricao: "Produtos de grau hospitalar adaptados para uso ambulatorial e estética clí­nica.",
  },
  {
    icone: PawPrint,
    titulo: "Veterinárias",
    descricao: "Linha hospitalar completa adaptada para uso veterinário com os mesmos padrões de qualidade.",
  },
];

export default function Segmentos() {

  return (
    <section id="segmentos" className="py-16 sm:py-20 bg-saluviaGreen text-saluviaBeige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CabeÃ§alho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-title font-bold text-saluviaGold-900 mb-4" data-testid="text-segmentos-titulo">
            Soluções sob medida para cada tipo de atendimento.
          </h2>
          <p className="text-lg font-body text-saluviaGold-600 leading-relaxed">
            Atendemos diversos segmentos do setor de saúde com propostas personalizadas e produtos especí­ficos para cada necessidade.
          </p>
        </div>

        {/* Grid de segmentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segmentos.map((segmento, indice) => (
            <Card
              key={indice}
              className="bg-saluviaBeige/20 border-gray-200 hover-elevate transition-all duration-300"
              data-testid={`card-segmento-${indice}`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-saluviaGold/20">
                  <segmento.icone className="w-7 h-7 text-saluviaGreen" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-title font-semibold text-gray-900">
                    {segmento.titulo}
                  </h3>
                  <p className="text-sm font-body text-saluviaGold-600 leading-relaxed">
                    {segmento.descricao}
                  </p>
                </div>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pt-2"
                >
                  <Button
                    variant="link"
                    className="text-saluviaGreen hover:text-bg-saluviaGreen/80 p-0 h-auto font-body"
                    data-testid={`button-proposta-${indice}`}
                  >
                    Solicitar proposta personalizada 
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

