# apps/web

Aplicação web do Icarus Atend.

## Objetivo nesta fase

Disponibilizar uma base funcional e visual de produto com:
- layout operacional SaaS (sidebar + topbar + conteúdo);
- fluxo operacional principal (fila, meus atendimentos, atendimento, supervisão);
- timeline de conversa, contexto do ticket e handoff IA → humano;
- estado local para simulação de operação sem backend real.

## Scripts

- `npm run dev` — inicia servidor web local.
- `npm run start` — inicia servidor web local.

## Estrutura principal

- `src/pages/dashboard-page.js` — casca operacional e troca de telas.
- `src/components/operational` — componentes de domínio operacional.
- `src/lib/domain-mocks.js` — mocks consistentes com domínio modelado.
- `src/state/app-state.js` — estado local da interface.
- `src/styles/operational.css` — estilos específicos das telas operacionais.
