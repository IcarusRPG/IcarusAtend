# Arquitetura Inicial — Icarus Atend

## 1. Visão geral

A arquitetura segue o modelo de monorepo com separação por responsabilidade:

- `apps/web`: experiência do operador/supervisor.
- `apps/api`: regras de negócio e exposição de endpoints.
- `packages/ui`: biblioteca de componentes de interface.
- `packages/types`: contratos compartilhados entre front e back.

## 2. Organização proposta de pastas

### `apps/web/src`

- `components/`: componentes específicos da aplicação.
- `pages/`: páginas e composição de rotas.
- `services/`: clientes HTTP e gateways para API.
- `hooks/`: hooks de domínio e estado.
- `styles/`: estilos globais e temas de app.
- `lib/`: utilitários e helpers locais.

### `apps/api/src`

- `modules/`: módulos de domínio (atendimentos, usuários, filas etc.).
- `routes/`: definição de rotas e versionamento de API.
- `services/`: regras de aplicação e orquestração.
- `integrations/`: adapters/stubs para integrações externas.
- `config/`: configuração de ambiente e bootstrap.
- `common/`: utilitários transversais (errors, logger, middlewares).

### `packages/ui/src`

- `components/`: componentes reutilizáveis (buttons, cards, layout).
- `theme/`: tema base e tokens derivados.
- `tokens/`: design tokens primários (cores, tipografia, spacing).
- `utils/`: utilitários de UI.

### `packages/types/src`

- `domain/`: entidades de domínio e value objects.
- `api/`: request/response DTOs e contratos públicos.
- `integrations/`: contratos de adapters de WhatsApp/n8n/IA.

## 3. Estratégia de extensibilidade

A pasta `apps/api/src/integrations` e `packages/types/src/integrations` já define o ponto de extensão para provedores externos.

Fluxo futuro planejado:

1. Definição de contratos de integração em `packages/types`.
2. Implementação de adapters concretos em `apps/api/src/integrations/providers`.
3. Injeção de dependência por configuração para troca de provedores sem alterar regras de domínio.

## 4. Convenções recomendadas

- Versionar endpoints (`/api/v1`).
- Manter lógica de negócio desacoplada de framework.
- Garantir que `web` consuma contratos de `packages/types`.
- Centralizar componentes no `packages/ui` antes de duplicar UI no app.

## 5. Decisões intencionais desta fase

- Sem lock-in de framework nesta etapa.
- Sem integrações reais com mensageria externa.
- Priorização de estrutura organizacional e documentação para acelerar implementação do MVP.
