import { Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GOOGLE_FORM_URL } from '@/lib/constants';

export default function Navbar() {
  // Função para rolagem suave até a seção
  const rolarPara = (id: string) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-saluviaGreen text-saluviaGold/95 backdrop-blur-md border-b border-saluviaGold/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo e nome */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-saluviaGold/10">
              <Building2 className="w-7 h-7 text-saluviaGold" />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-title font-bold text-saluviaGold">Grupo Saluvia</p>
              <p className="text-xs font-body text-saluviaBeige">Excelência em materiais hospitalares</p>
            </div>
          </div>

          {/* Menu de navegação */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => rolarPara('portfolio')}
              className="text-sm font-body text-saluviaBeige hover:text-saluviaGold transition-colors"
              data-testid="link-portfolio"
            >
              Portfólio
            </button>
            <button
              onClick={() => rolarPara('segmentos')}
              className="text-sm font-body text-saluviaBeige hover:text-saluviaGold transition-colors"
              data-testid="link-segmentos"
            >
              Segmentos
            </button>
            <button
              onClick={() => rolarPara('contato')}
              className="text-sm font-body text-saluviaBeige hover:text-saluviaGold transition-colors"
              data-testid="link-contato"
            >
              Cotação
            </button>
          </nav>

          {/* CTA Button */}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-solicitar-cotacao"
          >
            <Button
              className="bg-saluviaGold hover:bg-saluviaGold/90 text-gray-900 font-button font-semibold shadow-md"
              size="default"
            >
              Solicitar Cotação
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
