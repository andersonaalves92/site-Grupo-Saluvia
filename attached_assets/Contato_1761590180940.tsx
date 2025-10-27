import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { GOOGLE_FORM_URL, CONTATO } from '@/lib/constants';

export default function Contato() {

  return (
    <section id="contato" className="py-16 sm:py-20 bg-gradient-to-b from-[color:var(--saluviaGreen)] to-saluviaBeige/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CabeÃ§alho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-title font-bold text-gray-100 mb-4" data-testid="text-contato-titulo">
            Vamos facilitar o seu próximo pedido?
          </h2>
          <p className="text-lg font-body text-gray-100 leading-relaxed">
            Preencha o cadastro rápido para receber catálogo técnico completo, atendimento personalizado e 10% de desconto na primeira compra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Coluna esquerda - FormulÃ¡rio */}
          <Card className="bg-saluviaGreen text-saluviaBeige shadow-xl border-none">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-title font-bold text-gray-100">
                  Solicite sua cotação
                </h3>
                <p className="text-sm font-body text-gray-200">
                  Preencha o formulário e nossa equipe entrará em contato em até 1 hora útil.
                </p>
              </div>

              {/* BenefÃ­cios */}
              <div className="space-y-3 py-4 border-y border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-5 h-5 rounded-full bg-saluviaGreen/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-saluviaGreen"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-body font-medium text-gray-100">Catálogo técnico completo</p>
                    <p className="text-xs font-body text-gray-200">Com todos os produtos e especificações</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-5 h-5 rounded-full bg-saluviaGreen/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-saluviaGreen"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-body font-medium text-gray-100">Atendimento personalizado</p>
                    <p className="text-xs font-body text-gray-200">Consultor dedicado para seu segmento</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-5 h-5 rounded-full bg-saluviaGold/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-saluviaGold"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-body font-medium text-saluviaGold">10% de desconto exclusivo</p>
                    <p className="text-xs font-body text-gray-100">Válido na primeira compra</p>
                  </div>
                </div>
              </div>

              {/* BotÃ£o para formulÃ¡rio */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid="button-abrir-formulario"
              >
                <Button
                  size="lg"
                  className="w-full bg-saluviaGold hover:bg-saluviaGold/90 text-gray-900 font-button font-semibold shadow-lg"
                >
                  Abrir Formulário de Cadastro
                </Button>
              </a>

              <p className="text-xs font-body text-gray-500 text-center">
                Seus dados estão protegidos conforme a LGPD
              </p>
            </CardContent>
          </Card>

          {/* Coluna direita - InformaÃ§Ãµes de contato */}
          <div className="space-y-6">
            <Card className="bg-saluviaGreen text-white border-none">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-title font-bold">
                  Informações de Contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-body font-medium">Endereço</p>
                      <p className="text-sm font-body text-white/90">
                        Brasí­lia, Distrito Federal<br />
                        Centro Logí­stico Saluvia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-body font-medium">Telefone</p>
                      <p className="text-sm font-body text-white/90">
                        {CONTATO.telefone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-body font-medium">E-mail</p>
                      <p className="text-sm font-body text-white/90">
                        {CONTATO.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-body font-medium">Horário de Atendimento</p>
                      <p className="text-sm font-body text-white/90">
                        Segunda a Sexta: 8h ás 18h<br />
                        Sábado: 8h ás 12h
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-saluviaBeige/50 border-saluviaGold/30">
              <CardContent className="p-6">
                <p className="text-sm font-body text-gray-700 leading-relaxed text-center">
                  <strong className="text-saluviaGreen">Atendimento Rápido:</strong> Nossa equipe responde em até 1 hora durante horário comercial
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

