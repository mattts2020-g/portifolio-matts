const express = require("express");
const path = require("path");
const app = express();

// Definição da Porta
const PORT = 3000;

// 1. CONEXÃO COM ARQUIVOS ESTÁTICOS (CSS, Imagens, JS)
// Isso garante que o style.css seja carregado em todas as páginas
app.use(express.static(path.join(__dirname, "publico")));

// 2. CONFIGURAÇÃO DAS ROTAS (PÁGINAS)

// Rota Principal (Home)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "publico", "index.html"));
});

// Rota Sobre
app.get("/sobre", (req, res) => {
  res.sendFile(path.join(__dirname, "publico", "sobre.html"));
});

// Rota Serviços
app.get("/servicos", (req, res) => {
  res.sendFile(path.join(__dirname, "publico", "servicos.html"));
});

// Rota Contato
app.get("/contato", (req, res) => {
  res.sendFile(path.join(__dirname, "publico", "contato.html"));
});

// 3. TRATAMENTO DE ERROS (Caso o arquivo não exista)
app.use((req, res) => {
  res.status(404).send(`
        <body style="background:#0a0a0a; color:#f5ff00; font-family:sans-serif; display:flex; justify-content:center; align-items:center; height:100vh; flex-direction:column;">
            <h1 style="font-size:5rem;">404</h1>
            <p style="color:#fff; font-size:1.5rem;">ARQUIVO NÃO ENCONTRADO NA PASTA PUBLICO</p>
            <a href="/" style="color:#f5ff00; text-decoration:none; border:2px solid #f5ff00; padding:15px 30px; margin-top:20px; font-weight:900;">VOLTAR PARA HOME</a>
        </body>
    `);
});

// 4. INICIALIZAÇÃO DO HOST
app.listen(PORT, () => {
  console.clear();
  console.log("==================================================");
  console.log("🚀 SISTEMA SMART CONSULT REESTABELECIDO!");
  console.log(`🔗 HOST ATIVO EM: http://localhost:${PORT}`);
  console.log("==================================================");
  console.log("Monitorando arquivos na pasta: /publico");
});
app.get("/metodologia", (req, res) => {
  res.sendFile(path.join(__dirname, "publico", "metodologia.html"));
});
// --- 1. CONFIGURAÇÕES ---
app.use(express.static(path.join(__dirname, "publico")));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Permite ler os dados do formulário de contato

// --- 2. ROTAS DAS PÁGINAS (CORRIGIDAS E COMPLETAS) ---

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "publico", "index.html"));
});

app.get("/sobre", (req, res) => {
  res.sendFile(path.join(__dirname, "publico", "sobre.html"));
});

app.get("/servicos", (req, res) => {
  res.sendFile(path.join(__dirname, "publico", "servicos.html"));
});

app.get("/contato", (req, res) => {
  res.sendFile(path.join(__dirname, "publico", "contato.html"));
});

// ADICIONADO: Rota para a nova página de Metodologia
app.get("/metodologia", (req, res) => {
  res.sendFile(path.join(__dirname, "publico", "metodologia.html"));
});

// --- 3. ROTA DE RECEBIMENTO DE CONTATO (BACKEND) ---
// Isso simula o recebimento dos dados do formulário de contato
app.post("/enviar-contato", (req, res) => {
  const { nome, objetivo, mensagem } = req.body;

  // Aqui no futuro você pode conectar com um serviço de E-mail
  console.log("========================================");
  console.log("NOVO LEAD RECEBIDO! 🔥");
  console.log(`NOME: ${nome}`);
  console.log(`OBJETIVO: ${objetivo}`);
  console.log(`MENSAGEM: ${mensagem}`);
  console.log("========================================");

  // Redireciona para uma página de sucesso ou volta para a home
  res.send(
    '<script>alert("Protocolo enviado com sucesso! O Coach entrará em contato."); window.location.href="/";</script>'
  );
});

// --- 4. TRATAMENTO DE ERRO 404 ---
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "publico", "404.html"));
});

// --- 5. START DO SERVIDOR ---
app.listen(PORT, () => {
  console.clear();
  console.log(`🚀 SERVIDOR RODANDO EM http://localhost:${PORT}`);
  console.log(`✅ Rota /metodologia ATIVADA`);
  console.log(`✅ Sistema de Captura de Leads ATIVADO`);
});
