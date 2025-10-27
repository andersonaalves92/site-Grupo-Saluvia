import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const depoimentos = [
  {
    texto: "A agilidade na entrega e a qualidade dos produtos do Grupo Saluvia transformaram nossa gestão de estoque. Recomendo!",
    autor: "Dr. Carlos Silva",
    cargo: "Diretor Clínico",
  },
  {
    texto: "Parceria confiável, produtos certificados e atendimento personalizado. Exatamente o que precisavamos.",
    autor: "Dra. Ana Paula",
    cargo: "Gerente de Compras",
  },
  {
    texto: "O suporte do KAM dedicado facilita muito nossa operação. Preços competitivos e entrega pontual.",
    autor: "Roberto Mendes",
    cargo: "Administrador Hospitalar",
  },
];

export default function Cases() {
  return (
    <section className="py-16 sm:py-20 bg-saluviaGreen text-saluviaBeige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CabeÃ§alho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-title font-bold text-saluviaGreen-900 mb-4" data-testid="text-cases-titulo">
            Confiança construí­da com resultados reais.
          </h2>
          <p className="text-lg font-body text-gray-600 leading-relaxed">
            Nossa trajetória no setor público e as primeiras parcerias privadas comprovam nossa capacidade de entregar qualidade, agilidade e atendimento humanizado.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {depoimentos.map((depoimento, indice) => (
            <Card
              key={indice}
              className="bg-saluviaBeige/20 border-none hover-elevate transition-all duration-300"
              data-testid={`card-depoimento-${indice}`}
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-saluviaGold" />
                <p className="text-sm font-body text-saluviaGold-700 leading-relaxed italic">
                  "{depoimento.texto}"
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-title font-semibold text-gray-900">
                    {depoimento.autor}
                  </p>
                  <p className="text-xs font-body text-saluviaGold-600">
                    {depoimento.cargo}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logos de parceiros (placeholders) */}
        <div className="mt-12">
          <p className="text-center text-sm font-body text-gray-500 mb-6">
            Confiado por hospitais, clí­nicas e laboratórios em todo o Brasil
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="w-32 h-16 bg-saluviaGreen text-saluviaBeige rounded-lg flex items-center justify-center"
                data-testid={`logo-parceiro-${num}`}
              >
                <span className="text-xs font-body text-gray-500">Parceiro {num}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

