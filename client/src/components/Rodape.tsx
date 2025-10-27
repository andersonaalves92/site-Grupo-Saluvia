import { Building2, Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import { CONTATO, REDES_SOCIAIS } from '@/lib/constants';

export default function Rodape() {
  return (
    <footer className="bg-saluviaGreen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Logo e descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-saluviaGold/10">
                <Building2 className="w-6 h-6 text-saluviaGold" />
              </div>
              <span className="text-xl font-title font-bold">Grupo Saluvia</span>
            </div>
            <p className="text-sm font-body text-white/80 leading-relaxed">
              Excelência em materiais hospitalares com qualidade, agilidade e procedência garantidas.
            </p>
          </div>

          {/* Coluna 2 - Links rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-title font-semibold">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-sm font-body text-white/80 hover:text-white transition-colors"
                  data-testid="link-footer-inicio"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm font-body text-white/80 hover:text-white transition-colors"
                  data-testid="link-footer-portfolio"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('segmentos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm font-body text-white/80 hover:text-white transition-colors"
                  data-testid="link-footer-segmentos"
                >
                  Segmentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm font-body text-white/80 hover:text-white transition-colors"
                  data-testid="link-footer-contato"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-title font-semibold">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm font-body text-white/80">{CONTATO.telefone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm font-body text-white/80">{CONTATO.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm font-body text-white/80">
                  Brasília, DF
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Redes sociais */}
          <div className="space-y-4">
            <h3 className="text-lg font-title font-semibold">Redes Sociais</h3>
            <div className="flex gap-3">
              <a
                href={REDES_SOCIAIS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-saluviaGold/10 hover:bg-saluviaGold/20 transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={REDES_SOCIAIS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-saluviaGold/10 hover:bg-saluviaGold/20 transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs font-body text-white/60 mt-4">
              Siga-nos para novidades e atualizações.
            </p>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-body text-white/60">
              © 2025 Grupo Saluvia. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <button className="text-sm font-body text-white/60 hover:text-white transition-colors" data-testid="link-privacidade">
                Política de Privacidade
              </button>
              <button className="text-sm font-body text-white/60 hover:text-white transition-colors" data-testid="link-termos">
                Termos de Uso
              </button>
              <button className="text-sm font-body text-white/60 hover:text-white transition-colors" data-testid="link-lgpd">
                LGPD
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
