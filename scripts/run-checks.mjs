import { existsSync } from 'node:fs';

const required = [
  'apps/web/index.html',
  'apps/web/src/main.js',
  'apps/web/src/routes/index.js',
  'apps/web/src/pages/dashboard-page.js',
  'apps/web/src/state/app-state.js',
  'apps/web/src/lib/domain-mocks.js',
  'apps/web/src/components/operational/ticket-list.js',
  'apps/web/src/components/operational/conversation-timeline.js',
  'apps/web/src/components/operational/message-composer.js',
  'apps/web/src/components/operational/customer-panel.js',
  'apps/web/src/components/operational/ticket-context-panel.js',
  'apps/web/src/components/operational/handoff-summary-card.js',
  'apps/web/src/styles/operational.css',
  'packages/ui/src/tokens/index.js',
  'packages/ui/src/theme/index.css',
  'packages/ui/src/components/index.js',
  'packages/types/src/domain/enums.ts',
  'packages/types/src/domain/ticket.ts',
  'packages/types/src/domain/handoff.ts',
  'apps/api/src/server.js',
  'apps/api/src/routes/index.js',
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
