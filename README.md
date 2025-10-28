Website Institucional - Grupo Saluvia
Visão Geral
Website institucional completo para o Grupo Saluvia, empresa referência em fornecimento de materiais hospitalares. O site apresenta design premium, chat em tempo real via WebSocket, integração com Google Forms para captação de leads e experiência de usuário excepcional.

Status: MVP Completo - Pronto para Testes/Produção Última atualização: Outubro 2025
Stack: React + Vite, TypeScript, Tailwind CSS, Express.js, WebSocket

Características Principais
Frontend
Hero Section com CTAs destacados e card informativo sobre entrega em 24h
Seção de Credibilidade com 4 blocos destacando experiência pública, entrega rápida, parcerias diretas e suporte KAM
Portfólio Completo com 5 categorias de produtos (Proteção, Cirúrgicos, Equipamentos, Instrumentais, Estética/Veterinária)
Segmentos Atendidos mostrando 5 tipos de clientes (Hospitais, Clínicas, Laboratórios, Estética, Veterinárias)
Diferenciais Operacionais destacando vantagens competitivas
Parcerias e Cases com depoimentos de clientes
Formulário de Contato integrado ao Google Forms
Pop-up de Oferta (10% desconto) que aparece após 30s ou 60% de scroll
Chat Lateral em Tempo Real com WebSocket
Botão Flutuante WhatsApp para contato direto
Rodapé Institucional completo com informações de contato
Design System
Paleta de Cores:

Verde Saluvia: #2B6653 (cor institucional, botões principais)
Dourado Suave: #D1B97F (detalhes e destaques)
Bege Claro: #F5F2E7 (backgrounds secundários)
Branco: #FFFFFF (fundo principal)
Tipografia:

Títulos: Montserrat (Bold)
Textos: Open Sans (Regular)
Botões: Poppins (SemiBold)
Backend (Completo)
Express.js como servidor HTTP
WebSocket Server funcional em /ws para chat em tempo real
Broadcast de mensagens para todos os clientes conectados
Respostas automáticas do atendente
Armazenamento em memória para histórico de até 1000 mensagens
Endpoints REST para buscar histórico de mensagens
Validação de dados com Zod
Tratamento de erros e reconexão automática
Schemas TypeScript completos para type safety
Estrutura de Arquivos
client/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Credibilidade.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Segmentos.tsx
│   │   │   ├── Diferenciais.tsx
│   │   │   ├── Cases.tsx
│   │   │   ├── Contato.tsx
│   │   │   └── Rodape.tsx
│   │   └── ui/
│   │       ├── PopupOferta.tsx
│   │       ├── BotaoWhatsApp.tsx
│   │       └── ChatLateral.tsx
│   ├── pages/
│   │   └── HomePage.tsx
│   ├── App.tsx
│   └── index.css
├── index.html
server/
├── routes.ts
└── storage.ts
shared/
└── schema.ts
Integrações
Google Forms
URL do formulário: https://docs.google.com/forms/d/e/1FAIpQLSc1zDrjx_udFVDt0h36emMk9MIMqzzI4cCydBWu0lqcHyRiug/viewform

Utilizado para:

Captação de leads
Solicitação de cotações
Download de catálogo
Cadastro para desconto de 10%
WhatsApp Business
Botão flutuante no canto inferior direito com:

Link direto para WhatsApp comercial
Mensagem pré-configurada
Tooltip com chamada para ação
WebSocket (Chat em Tempo Real)
Conexão automática ao abrir o chat
Reconexão automática em caso de falha
Indicador de status (online/offline)
Indicador de digitação
Histórico de mensagens
Status das Tarefas
✅ Tarefa 1: Schema & Frontend Completo
 Schemas de dados definidos (usuários, mensagens chat)
 Design system configurado (cores, fontes, breakpoints)
 Todos os componentes React criados
 Navbar, Hero, Credibilidade, Portfolio, Segmentos
 Diferenciais, Cases, Contato, Rodapé
 Pop-up de oferta com gatilhos
 Chat lateral com WebSocket
 Botão flutuante WhatsApp
 Design responsivo e acessível
✅ Tarefa 2: Backend Completo
 Servidor WebSocket implementado
 Endpoints REST para chat
 Armazenamento em memória
 Validações e tratamento de erros
 Broadcast de mensagens
 Respostas automáticas
🔄 Tarefa 3: Integração e Testes (Em Andamento)
 Testar conexão WebSocket
 Validar todos os fluxos de usuário
 Verificar responsividade
 Realizar testes end-to-end
 Obter feedback do arquiteto
SEO e Acessibilidade
Metadados OpenGraph configurados
Títulos descritivos e únicos
Alt text em todas as imagens (quando implementadas)
Código semântico (nav, main, section, footer)
Contraste WCAG 2.1 AA
data-testid em elementos interativos
Performance
Mobile-first design
Lazy loading planejado para imagens
Componentes React otimizados
Tailwind CSS com purge automático
Google Fonts pré-carregadas
Conformidade LGPD
Aviso de proteção de dados nos formulários
Link para Política de Privacidade no rodapé
Transparência sobre uso de dados