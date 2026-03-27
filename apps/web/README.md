# apps/web

Aplicação web do Icarus Atend.

## Objetivo nesta fase

Disponibilizar uma base funcional e visual de produto com:
- layout operacional SaaS (sidebar + topbar + conteúdo);
- dashboard inicial com dados mockados;
- base de rotas e cliente de API para evolução incremental.

## Scripts

- `npm run dev` — inicia servidor web local.
- `npm run start` — inicia servidor web local.

## Estrutura

- `index.html` — entrada da aplicação.
- `server.js` — servidor HTTP simples para ambiente local.
- `src/main.js` — bootstrap da aplicação.
- `src/routes` — resolução de rotas.
- `src/pages` — páginas da aplicação.
- `src/lib/mock-data.js` — dados mockados de dashboard.
- `src/services` — integração com API.
