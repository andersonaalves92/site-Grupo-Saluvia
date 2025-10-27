import { useState, useEffect, useRef } from 'react';
import { X, Send, MessageSquare, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Mensagem {
  id: string;
  nomeCliente: string;
  mensagem: string;
  tipo: 'cliente' | 'atendente';
  timestamp: Date;
}

export default function ChatLateral() {
  const [aberto, setAberto] = useState(false);
  const [minimizado, setMinimizado] = useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [mensagemAtual, setMensagemAtual] = useState('');
  const [nomeCliente, setNomeCliente] = useState('');
  const [conectado, setConectado] = useState(false);
  const [digitando, setDigitando] = useState(false);
  
  const socketRef = useRef<WebSocket | null>(null);
  const mensagensRef = useRef<HTMLDivElement>(null);

  // Conectar ao WebSocket quando o chat é aberto
  useEffect(() => {
    if (aberto && !socketRef.current) {
      conectarWebSocket();
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null; // Limpar referência para permitir reconexão
      }
    };
  }, [aberto]);

  // Scroll automático para última mensagem
  useEffect(() => {
    if (mensagensRef.current) {
      mensagensRef.current.scrollTop = mensagensRef.current.scrollHeight;
    }
  }, [mensagens]);

  const conectarWebSocket = () => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/ws`;
    
    try {
      const socket = new WebSocket(wsUrl);
      
      socket.onopen = () => {
        setConectado(true);
        console.log('WebSocket conectado');
        
        // Mensagem de boas-vindas
        adicionarMensagemSistema('Olá! Bem-vindo ao atendimento Saluvia. Como posso ajudá-lo?');
      };

      socket.onmessage = (evento) => {
        const dados = JSON.parse(evento.data);
        
        if (dados.tipo === 'atendente') {
          setDigitando(false);
          setMensagens(prev => [...prev, {
            id: dados.id || Date.now().toString(),
            nomeCliente: dados.nomeCliente || 'Atendente',
            mensagem: dados.mensagem,
            tipo: 'atendente',
            timestamp: new Date(dados.timestamp || Date.now()),
          }]);
        } else if (dados.tipo === 'digitando') {
          setDigitando(true);
          setTimeout(() => setDigitando(false), 3000);
        }
      };

      socket.onerror = (erro) => {
        console.error('Erro no WebSocket:', erro);
        socketRef.current = null; // Limpar referência em caso de erro
        setConectado(false);
      };

      socket.onclose = () => {
        setConectado(false);
        socketRef.current = null; // Limpar referência ao fechar
        console.log('WebSocket desconectado');
        
        // Tentar reconectar após 3 segundos se o chat ainda estiver aberto
        setTimeout(() => {
          if (aberto && !socketRef.current) {
            console.log('Tentando reconectar WebSocket...');
            conectarWebSocket();
          }
        }, 3000);
      };

      socketRef.current = socket;
    } catch (erro) {
      console.error('Erro ao conectar WebSocket:', erro);
      setConectado(false);
    }
  };

  const adicionarMensagemSistema = (texto: string) => {
    const novaMensagem: Mensagem = {
      id: Date.now().toString(),
      nomeCliente: 'Atendente Saluvia',
      mensagem: texto,
      tipo: 'atendente',
      timestamp: new Date(),
    };
    setMensagens(prev => [...prev, novaMensagem]);
  };

  const enviarMensagem = () => {
    if (!mensagemAtual.trim()) return;

    // Se é a primeira mensagem, pedir o nome
    if (!nomeCliente) {
      setNomeCliente(mensagemAtual.trim());
      adicionarMensagemSistema(`Prazer, ${mensagemAtual.trim()}! Como posso ajudar você hoje?`);
      setMensagemAtual('');
      return;
    }

    const novaMensagem: Mensagem = {
      id: Date.now().toString(),
      nomeCliente: nomeCliente,
      mensagem: mensagemAtual,
      tipo: 'cliente',
      timestamp: new Date(),
    };

    setMensagens(prev => [...prev, novaMensagem]);

    // Enviar pelo WebSocket se conectado
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({
        nomeCliente: nomeCliente,
        mensagem: mensagemAtual,
        tipo: 'cliente',
      }));
    } else {
      // Se não estiver conectado, avisar o usuário
      adicionarMensagemSistema('Desculpe, estamos com problemas de conexão. Por favor, tente novamente em alguns instantes.');
    }

    setMensagemAtual('');
  };

  const formatarHora = (data: Date) => {
    return data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  if (!aberto) {
    return (
      <div className="fixed bottom-24 right-6 z-40">
        <Button
          onClick={() => setAberto(true)}
          className="flex items-center gap-2 bg-saluviaGreen hover:bg-saluviaGreen/90 text-white font-button font-semibold shadow-2xl px-6 py-6 rounded-full"
          data-testid="button-abrir-chat"
        >
          <MessageSquare className="w-6 h-6" />
          <span>Chat ao Vivo</span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saluviaGold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-saluviaGold"></span>
          </span>
        </Button>
      </div>
    );
  }

  if (minimizado) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setMinimizado(false)}
          className="flex items-center gap-2 bg-saluviaGreen hover:bg-saluviaGreen/90 text-white font-button shadow-lg px-4"
          data-testid="button-expandir-chat"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-sm">Chat</span>
          {mensagens.length > 0 && (
            <Badge className="bg-saluviaGold text-gray-900 text-xs">
              {mensagens.length}
            </Badge>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-[380px] max-w-[calc(100vw-3rem)]">
      <Card className="shadow-2xl border-none overflow-hidden">
        {/* Cabeçalho */}
        <CardHeader className="bg-saluviaGreen text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-saluviaGold/10">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-title font-semibold text-base" data-testid="text-chat-titulo">
                  Atendimento Saluvia
                </h3>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${conectado ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <span className="text-xs font-body">
                    {conectado ? 'Online' : 'Conectando...'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setMinimizado(true)}
                className="p-1.5 rounded hover:bg-white/10 transition-colors"
                aria-label="Minimizar"
                data-testid="button-minimizar-chat"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setAberto(false)}
                className="p-1.5 rounded hover:bg-white/10 transition-colors"
                aria-label="Fechar"
                data-testid="button-fechar-chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </CardHeader>

        {/* Área de mensagens */}
        <CardContent className="p-0">
          <div
            ref={mensagensRef}
            className="h-[400px] overflow-y-auto p-4 space-y-4 bg-saluviaBeige/10"
            data-testid="container-mensagens"
          >
            {mensagens.length === 0 && !nomeCliente && (
              <div className="text-center text-sm font-body text-gray-500 mt-8">
                <p className="mb-2">Para começar, digite seu nome:</p>
              </div>
            )}

            {mensagens.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.tipo === 'cliente' ? 'justify-end' : 'justify-start'}`}
                data-testid={`mensagem-${msg.tipo}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    msg.tipo === 'cliente'
                      ? 'bg-saluviaGreen text-white'
                      : 'bg-white shadow-sm'
                  }`}
                >
                  <p className="text-sm font-body">{msg.mensagem}</p>
                  <p className={`text-xs mt-1 ${msg.tipo === 'cliente' ? 'text-white/70' : 'text-gray-500'}`}>
                    {formatarHora(msg.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {digitando && (
              <div className="flex justify-start">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Área de input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                enviarMensagem();
              }}
              className="flex gap-2"
            >
              <Input
                value={mensagemAtual}
                onChange={(e) => setMensagemAtual(e.target.value)}
                placeholder={nomeCliente ? "Digite sua mensagem..." : "Digite seu nome..."}
                className="flex-1 font-body"
                data-testid="input-mensagem"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!mensagemAtual.trim()}
                className="bg-saluviaGreen hover:bg-saluviaGreen/90 text-white flex-shrink-0"
                data-testid="button-enviar-mensagem"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
