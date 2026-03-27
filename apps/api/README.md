# apps/api

Backend/API do Icarus Atend.

## Objetivo nesta fase

Disponibilizar uma base funcional de backend com:
- endpoint de saúde (`GET /health`);
- estrutura modular inicial por domínio;
- organização preparada para evolução dos casos de uso.

## Scripts

- `npm run dev` — inicia API local.
- `npm run start` — inicia API local.

## Módulos atuais

- `auth`
- `users`
- `roles`
- `departments`
- `customers`
- `tickets`
- `conversations`
- `messages`
- `attachments`
- `templates`
- `queue`
- `sla`
- `audit`
- `handoff`

## Observação

Os módulos possuem base estrutural (`controller`, `service`, `dtos`) e rota de status.
A lógica de negócio pesada será implementada em etapas futuras.
