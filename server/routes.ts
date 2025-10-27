import type { Express } from "express";
import { createServer, type Server } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Criar servidor HTTP
  const httpServer = createServer(app);

  // Configurar WebSocket Server para chat ao vivo
  const wss = new WebSocketServer({ 
    server: httpServer,
    path: "/ws"
  });

  // Armazenar conexões ativas
  const clientes = new Set<WebSocket>();

  wss.on("connection", (ws: WebSocket) => {
    console.log("Novo cliente conectado ao chat");
    clientes.add(ws);

    // Enviar mensagem de boas-vindas
    ws.send(JSON.stringify({
      tipo: 'atendente',
      mensagem: 'Bem-vindo ao atendimento Saluvia! Como podemos ajudá-lo?',
      timestamp: new Date().toISOString(),
    }));

    // Receber mensagens do cliente
    ws.on("message", (data: Buffer) => {
      try {
        const mensagem = JSON.parse(data.toString());
        console.log("Mensagem recebida:", mensagem);

        // Broadcast para todos os clientes (simulando atendente)
        // Em produção, isso seria processado por um sistema de atendimento real
        const resposta = {
          tipo: 'atendente',
          mensagem: `Obrigado pela sua mensagem, ${mensagem.nomeCliente}! Um de nossos consultores responderá em breve.`,
          timestamp: new Date().toISOString(),
        };

        // Enviar resposta apenas para o cliente que enviou
        ws.send(JSON.stringify(resposta));
      } catch (erro) {
        console.error("Erro ao processar mensagem:", erro);
      }
    });

    // Remover cliente quando desconectar
    ws.on("close", () => {
      console.log("Cliente desconectado do chat");
      clientes.delete(ws);
    });

    // Tratar erros
    ws.on("error", (erro) => {
      console.error("Erro no WebSocket:", erro);
      clientes.delete(ws);
    });
  });

  console.log("WebSocket server configurado no path /ws");

  return httpServer;
}
