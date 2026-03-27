import { existsSync } from 'node:fs';

const required = [
  'apps/web/index.html',
  'apps/web/src/main.js',
  'apps/web/src/routes/index.js',
  'apps/web/src/services/api-client.js',
  'apps/api/src/server.js',
  'apps/api/src/routes/index.js',
  'apps/api/src/modules/auth/index.js',
  'apps/api/src/modules/users/index.js',
  'apps/api/src/modules/tickets/index.js'
];

const missing = required.filter((entry) => !existsSync(entry));

if (missing.length > 0) {
  console.error('Arquivos esperados não encontrados:');
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log('Checks de setup mínimo executados com sucesso.');
