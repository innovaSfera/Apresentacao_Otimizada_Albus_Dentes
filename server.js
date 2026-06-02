const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DIR = __dirname;

// Reescritas de rota do vercel.json
const rewrites = {
  '/apresentacao': '/apresentacao-albusdente.html',
  '/dashboard': '/apresentacao-albusdente.html',
  '/login': '/index.html'
};

const server = http.createServer((req, res) => {
  // Remove query string da URL
  const urlPath = req.url.split('?')[0];
  
  // Aplica reescritas de rota
  let filePath = rewrites[urlPath] || urlPath;
  
  // Se for a raiz, serve index.html
  if (filePath === '/') {
    filePath = '/index.html';
  }

  // Constrói o caminho completo do arquivo
  filePath = path.join(DIR, filePath);

  // Tira ../ para segurança
  if (!filePath.startsWith(DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Acesso negado');
    return;
  }

  // Mapeia extensões para content-types
  const contentTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif'
  };

  // Tenta ler o arquivo
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(`❌ Arquivo não encontrado: ${filePath}`);
      console.log(`   URL original: ${req.url}`);
      console.log(`   Tentando servir index.html como fallback...`);
      
      // Se não encontrou, tenta servir como SPA (volta para index.html)
      fs.readFile(path.join(DIR, 'index.html'), (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Página não encontrada');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      return;
    }

    const ext = path.extname(filePath);
    const contentType = contentTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n✅ Servidor rodando em http://localhost:${PORT}`);
  console.log(`\n📍 Rotas disponíveis:`);
  console.log(`   - http://localhost:${PORT}/login (página de login)`);
  console.log(`   - http://localhost:${PORT}/apresentacao (dashboard)`);
  console.log(`   - http://localhost:${PORT}/dashboard (dashboard alternativo)\n`);
});
