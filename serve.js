import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
// Vite génère le site compilé dans « dist » (voir npm run build)
const PUBLIC_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
};

const server = http.createServer((req, res) => {
  // Décodage de l'URL pour gérer les espaces et caractères spéciaux
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let safePath = decodeURIComponent(parsedUrl.pathname);

  // Normalisation du chemin
  let filePath = path.join(PUBLIC_DIR, safePath);

  // Sécurité : interdire de sortir du dossier out
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Interdit');
    return;
  }

  // Si c'est un dossier, chercher index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // Si le fichier n'existe pas, fallback sur index.html (SPA routing)
  if (!fs.existsSync(filePath)) {
    filePath = path.join(PUBLIC_DIR, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('500 Erreur serveur');
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log('\n======================================================');
  console.log('  LE MONDRIAN — RÉSIDENCE HÔTELIÈRE À SALY PORTUDAL');
  console.log('  Site statique accessible en local sur :');
  console.log(`  -> ${url}`);
  console.log('======================================================');
  console.log('\nAppuyez sur Ctrl+C dans cette fenêtre pour arrêter le serveur.\n');

  // Ouverture automatique du navigateur par défaut
  exec(`start ${url}`);
});
