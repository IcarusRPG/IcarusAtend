import { existsSync } from 'node:fs';

const requiredPaths = [
  'apps/web',
  'apps/api',
  'packages/ui',
  'packages/types',
  'docs',
  'docs/visao-produto.md',
  'docs/arquitetura.md',
  'apps/web/.env.example',
  'apps/api/.env.example'
];

const missing = requiredPaths.filter((path) => !existsSync(path));

if (missing.length > 0) {
  console.error('Estrutura incompleta. Itens ausentes:');
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log('Estrutura inicial do monorepo validada com sucesso.');
