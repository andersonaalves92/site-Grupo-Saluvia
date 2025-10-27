import { MapPin, FileCheck, Gift, UserCheck } from 'lucide-react';

const diferenciais = [
  {
    icone: MapPin,
    titulo: "Estoque em Brasí­lia",
    descricao: "Entregas em até 24h para todo o Distrito Federal e região",
  },
  {
    icone: FileCheck,
    titulo: "Contratos Recorrentes",
    descricao: "Preço fixo por 6 meses com garantia de fornecimento",
  },
  {
    icone: Gift,
    titulo: "Amostras Grátis",
    descricao: "Kits personalizados e amostras sem custo para teste",
  },
  {
    icone: UserCheck,
    titulo: "Key Account Managers",
    descricao: "Gestores dedicados para redes e hospitais de grande porte",
  },
];

export default function Diferenciais() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-saluviaBeige/30 to-[color:var(--saluviaBeige)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CabeÃ§alho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-title font-bold text-gray-900 mb-4" data-testid="text-diferenciais-titulo">
            Logí­stica e relacionamento que fazem a diferença.
          </h2>
          <p className="text-lg font-body text-gray-600 leading-relaxed">
            Nossa estrutura operacional garante agilidade, flexibilidade e suporte completo para o seu negócio.
          </p>
        </div>

        {/* Grid de diferenciais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((diferencial, indice) => (
            <div
              key={indice}
              className="flex flex-col items-center text-center space-y-4"
              data-testid={`diferencial-${indice}`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-saluviaGreen shadow-lg">
                <diferencial.icone className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-title font-semibold text-saluviaGreen">
                  {diferencial.titulo}
                </h3>
                <p className="text-sm font-body text-gray-600 leading-relaxed">
                  {diferencial.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

