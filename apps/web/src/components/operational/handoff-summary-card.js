import { createCard, createSectionHeader, createEmptyState } from '/packages/ui/src/components/index.js';
import { createElement } from '/packages/ui/src/utils/dom.js';

const createHandoffSummaryCard = ({ handoff }) => {
  if (!handoff) {
    return createCard({
      children: [
        createSectionHeader({ title: 'Handoff IA → humano', subtitle: 'Sem transferência registrada neste ticket' }),
        createEmptyState({
          title: 'Nenhum handoff',
          description: 'Quando a IA transferir o atendimento, o resumo aparecerá aqui.'
        })
      ]
    });
  }

  const content = createElement('div', 'op-context-list');
  content.append(
    createElement('p', null, `Status: ${handoff.status}`),
    createElement('p', null, `Intenção: ${handoff.intencaoDetectada}`),
    createElement('p', null, `Prioridade sugerida: ${handoff.prioridadeSugerida}`),
    createElement('p', null, `Resumo IA: ${handoff.resumoGeradoIA}`),
    createElement('p', null, `Dados coletados: ${JSON.stringify(handoff.dadosColetadosCliente)}`)
  );

  return createCard({
    children: [
      createSectionHeader({ title: 'Handoff IA → humano', subtitle: 'Contexto entregue pela automação' }),
      content
    ]
  });
};

export { createHandoffSummaryCard };
