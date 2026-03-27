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
└── .github/workflows/ # Espaço para pipelines futuras
```

## Princípios adotados

- **Escalabilidade**: separação em apps e pacotes compartilhados.
- **Evolução incremental**: MVP com base sólida e baixo retrabalho.
- **Padronização**: contratos centralizados em `packages/types`.
- **Extensibilidade**: conectores e adapters previstos para integrações futuras.

## Próximos passos sugeridos

1. Definir stack técnica final do `apps/web` (ex.: Next.js/Vite) e `apps/api` (ex.: Nest/Fastify/Express).
2. Configurar ferramentas de qualidade (lint, formatter, testes, CI).
3. Formalizar contratos de domínio no `packages/types`.
4. Implementar módulos de autenticação, gestão de atendimentos e roteamento de conversas.
5. Evoluir integrações com WhatsApp, n8n e IA por adapters em `apps/api/src/integrations`.
