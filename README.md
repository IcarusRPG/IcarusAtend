# Icarus Atend

O **Icarus Atend** é uma plataforma de atendimento ao consumidor pensada para operação moderna, omnichannel e escalável.

## Objetivo do projeto

Este repositório prepara a base de um **MVP profissional** com arquitetura de crescimento para:

- Atendimento inicial assistido por IA.
- Transferência fluida para atendimento humano.
- Operação com observabilidade, organização por domínios e separação clara entre front-end, API e pacotes compartilhados.

> Nesta fase, **não há integrações reais com WhatsApp, n8n ou IA**. Apenas pontos de extensão estruturais foram preparados para implementação futura.

## Estrutura do monorepo

```text
.
├── apps/
│   ├── web/           # Front-end da plataforma
│   └── api/           # Backend/API do sistema
├── packages/
│   ├── ui/            # Componentes visuais reutilizáveis
│   └── types/         # Tipos/contratos compartilhados
├── docs/              # Documentação de visão e arquitetura
└── scripts/           # Scripts utilitários do monorepo
```

## Scripts disponíveis (raiz)

- `npm run dev` — sobe **web + api** em paralelo (comando único).
- `npm run dev:web` — sobe apenas o front-end.
- `npm run dev:api` — sobe apenas a API.
- `npm run start:web` — inicia web em modo start.
- `npm run start:api` — inicia API em modo start.
- `npm run check:structure` — valida estrutura base do monorepo.
- `npm run check:setup` — valida arquivos mínimos de setup funcional.

## Como rodar

### Opção 1 (comando único)

```bash
npm run dev
```

- Web: `http://localhost:3000`
- API: `http://localhost:4000`
- Health: `http://localhost:4000/health`

### Opção 2 (comandos separados)

```bash
npm run dev:api
npm run dev:web
```

## Decisões técnicas desta fase

- Stack mínima sem dependências externas para reduzir complexidade inicial.
- Servidores HTTP nativos em Node.js (web e api) para bootstrap rápido.
- API organizada por módulos de domínio (`auth`, `users`, `tickets`) desde o início.
- Front-end com base de rotas e cliente de API para evolução incremental.
- Integrações externas mantidas apenas como pontos de extensão (sem implementação real).
