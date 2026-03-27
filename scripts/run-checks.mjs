import { existsSync } from 'node:fs';

const required = [
  'apps/web/index.html',
  'apps/web/src/main.js',
  'apps/web/src/routes/index.js',
  'apps/web/src/pages/dashboard-page.js',
  'apps/web/src/services/api-client.js',
  'packages/ui/src/tokens/index.js',
  'packages/ui/src/theme/index.css',
  'packages/ui/src/components/index.js',
  'packages/types/src/domain/enums.ts',
  'packages/types/src/domain/ticket.ts',
  'packages/types/src/domain/handoff.ts',
  'apps/api/src/server.js',
  'apps/api/src/routes/index.js',
  'apps/api/src/modules/auth/index.js',
  'apps/api/src/modules/users/index.js',
  'apps/api/src/modules/roles/index.js',
  'apps/api/src/modules/departments/index.js',
  'apps/api/src/modules/customers/index.js',
  'apps/api/src/modules/tickets/index.js',
  'apps/api/src/modules/conversations/index.js',
  'apps/api/src/modules/messages/index.js',
  'apps/api/src/modules/attachments/index.js',
  'apps/api/src/modules/templates/index.js',
  'apps/api/src/modules/queue/index.js',
  'apps/api/src/modules/sla/index.js',
  'apps/api/src/modules/audit/index.js',
  'apps/api/src/modules/handoff/index.js',
  'docs/entidades.md',
  'docs/regras-negocio.md'
];

const missing = required.filter((entry) => !existsSync(entry));

if (missing.length > 0) {
  console.error('Arquivos esperados não encontrados:');
  for (const item of missing) console.error(`- ${item}`);
  process.exit(1);
}

console.log('Checks de setup mínimo executados com sucesso.');
