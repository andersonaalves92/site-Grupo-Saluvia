import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Scissors,
  Activity,
  Syringe,
  Sparkles,
  HeartPulse,
} from "lucide-react";
import { motion } from "framer-motion";
import { GOOGLE_FORM_URL } from "@/lib/constants";

const categorias = [
  {
    icone: Shield,
    imagem: "/imagens/protecao-descartaveis.jpg",
    titulo: "Proteção & Descartáveis",
    itens: ["Luvas de procedimento", "Máscaras cirúrgicas e N95", "Aventais descartáveis"],
  },
  {
    icone: Scissors,
    imagem: "/imagens/materiais-cirurgicos.jpg",
    titulo: "Materiais Cirúrgicos",
    itens: ["Campos cirúrgicos", "Compressas estéreis", "Ataduras e gazes"],
  },
  {
    icone: Activity,
    imagem: "/imagens/equipamentos-medicos.jpg",
    titulo: "Equipamentos Médicos",
    descricao:"",
    itens: ["Monitores multiparamétricos", "Desfibriladores", "Oxímetros de pulso"],
  },
  {
    icone: Syringe,
    imagem: "/imagens/instrumentais.jpg",
    titulo: "Instrumentais e Acessórios",
    descricao:"",
    itens: ["Seringas e agulhas", "Cateteres diversos", "Sondas e drenos"],
  },
  {
    icone: Sparkles,
    imagem: "/imagens/estetica-veterinaria.jpg",
    titulo: "Estética e Veterinária",
    descricao:"",
    itens: ["Produtos estéticos", "Linha veterinária", "Insumos ambulatoriais"],
  },
  {
    icone: HeartPulse,
    imagem: "/imagens/suporte-vida.jpg",
    titulo: "Suporte à Vida",
    descricao:"",
    itens: ["Ambu e válvulas", "Circuitos respiratórios", "Equipamentos de suporte cardíaco"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 bg-saluviaGreen text-saluviaGold"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-title font-bold text-saluviaGold mb-4">
            Tudo o que sua clínica precisa, em um só fornecedor.
          </h2>
          <p className="text-lg font-body text-saluviaBeige leading-relaxed">
            Linha completa de materiais descartáveis, EPIs, instrumentais e equipamentos
            para hospitais, clínicas e laboratórios.
          </p>
        </motion.div>

        {/* Grid de categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categorias.map((categoria, indice) => (
            <motion.div
              key={indice}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: indice * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="bg-saluviaGreen text-saluviaGold border border-saluviaGold/20 
                           shadow-md hover:shadow-xl hover:border-saluviaGold/40 
                           transition-all duration-300 rounded-lg overflow-hidden"
              >
                <CardContent className="p-0 overflow-hidden">
                  
                  {/* Imagem com proporção fixa e ajuste */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-t-lg bg-saluviaGreen/50">
                    {categoria.imagem && (
                      <motion.img
                        src={categoria.imagem}
                        alt={categoria.titulo}
                        className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-500 ease-in-out"
                        loading="lazy"
                        initial={{ scale: 1.05, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        onError={(e) => (e.currentTarget.style.display = "none")}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-saluviaGreen/70 via-transparent"></div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-saluviaGreen border border-saluviaGold/40 mx-auto">
                      <categoria.icone className="w-7 h-7 text-saluviaGold" />
                    </div>

                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-title font-semibold text-saluviaGold">
                        {categoria.titulo}
                      </h3>
                      <p className="text-sm font-body text-saluviaBeige">
                        {categoria.descricao}
                      </p>
                    </div>

                    <ul className="space-y-2 text-left">
                      {categoria.itens.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm font-body text-saluviaBeige flex items-start gap-2"
                        >
                          <span className="text-saluviaGold mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-center">
                      <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="link"
                          className="text-saluviaGold hover:text-saluviaGold/80 font-body"
                        >
                          Solicitar amostra / preço
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-saluviaGold hover:bg-saluviaGold/90 text-saluviaGreen 
                         font-button font-semibold shadow-lg px-8"
            >
              Baixar Catálogo Completo
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

