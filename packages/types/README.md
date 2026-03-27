# packages/types

Contratos de tipo compartilhados entre os apps do monorepo.

## Objetivo nesta fase

Definir base de tipos para domínio, API e integrações futuras.

## Estrutura principal

- `src/domain/enums.ts` — estados e enums oficiais do domínio.
- `src/domain/*.ts` — entidades centrais de atendimento.
- `src/index.ts` — ponto único de exportação para consumo por web/api.

## Entidades modeladas

- User, Role, Permission
- Department, DepartmentQueue
- Customer
- Ticket, QueueItem, SLAConfig
- Conversation
- Message, Attachment, TemplateMessage
- AuditLog
- Handoff (IA → humano)
