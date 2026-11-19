
// Importa o módulo HTTP do Node.js
const http = require("http");

// Cria o servidor
const servidor = http.createServer((req, res) => {

    // Exibe no terminal o endereço solicitado pelo navegador
    console.log("Endereço solicitado:", req.url);

    // Verifica se foi solicitada a página inicial
    if (req.url === "/") {

        // Define o status e o tipo de conteúdo da resposta
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

        // Envia a resposta da página inicial
        res.end("API do Sistema de Chamados TI");

    } else if (req.url === "/chamados") {

        // Define o status e o tipo de conteúdo da resposta
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

        // Envia a resposta da rota de chamados
        res.end("Lista de chamados do sistema");

    } else {

        // Define o status de endereço não encontrado
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });

        // Envia a mensagem de erro
        res.end("Rota não encontrada");

    }
});

// Define a porta do servidor
const PORTA = 3000;

// Inicia o servidor
servidor.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
