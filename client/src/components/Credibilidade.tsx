import { Award, Truck, DollarSign, HeadphonesIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const itens = [
  {
    icone: Award,
    titulo: "Experiência Pública",
    descricao: "Contratos ativos com órgãos públicos — compliance, procedência e certificação ANVISA garantidos.",
  },
  {
    icone: Truck,
    titulo: "Entrega Rápida",
    descricao: "Estoque local em Brasília - entregas otimizadas.",
  },
  {
    icone: DollarSign,
    titulo: "Parcerias Diretas",
    descricao: "Fornecedores diretos de fábrica para reduzir custos e garantir qualidade superior.",
  },
  {
    icone: HeadphonesIcon,
    titulo: "Suporte Dedicado",
    descricao: "Key Account Managers exclusivos para hospitais e redes clínicas de grande porte.",
  },
];

export default function Credibilidade() {
  return (
    <section className="py-16 sm:py-20 bg-saluviaGreen text-saluviaBeige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-title font-bold text-saluviaGold mb-4" data-testid="text-credibilidade-titulo">
            A solidez e confiança conquistada no setor público agora no privado
          </h2>
          <p className="text-lg font-body text-saluviaBeige leading-relaxed">
            Com contratos ativos e fornecimento recorrente para órgãos públicos, o Grupo Saluvia traz ao setor privado a credibilidade de quem já atende com rigor técnico, transparência e eficiência logística.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {itens.map((item, indice) => (
            <Card
              key={indice}
              className="bg-saluviaBeige/30 border-none hover-elevate transition-all duration-300"
              data-testid={`card-credibilidade-${indice}`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-saluviaGreen/10">
                  <item.icone className="w-7 h-7 text-saluviaGold" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-title font-semibold text-saluviaGold">
                    {item.titulo}
                  </h3>
                  <p className="text-sm font-body text-gray-100 leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
