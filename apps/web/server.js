import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');

const port = Number(process.env.WEB_PORT ?? 3000);
const appName = process.env.WEB_APP_NAME ?? 'Icarus Atend';

const contentTypeByExt = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml'
};

const getFilePath = (urlPath) => {
  if (urlPath === '/' || urlPath.startsWith('/app')) {
    return path.join(__dirname, 'index.html');
  }

  if (urlPath.startsWith('/public/')) {
    return path.join(__dirname, urlPath);
  }

  if (urlPath.startsWith('/src/')) {
    return path.join(__dirname, urlPath);
  }

  if (urlPath.startsWith('/packages/')) {
    return path.join(repoRoot, urlPath);
  }

  return null;
};

const server = createServer(async (request, response) => {
  if (!request.url) {
    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Bad request');
    return;
  }

  const url = new URL(request.url, `http://${request.headers.host}`);
  const filePath = getFilePath(url.pathname);

  if (!filePath) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  try {
    const content = await readFile(filePath);
    const ext = path.extname(filePath);
    const contentType = contentTypeByExt[ext] ?? 'application/octet-stream';
    response.writeHead(200, { 'Content-Type': contentType });
    response.end(content);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[${appName}] running on http://localhost:${port}`);
});
