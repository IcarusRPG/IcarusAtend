import { createElement } from '/packages/ui/src/utils/dom.js';

const createQueueSummary = ({ tickets }) => {
  const card = createElement('section', 'ia-card');
  const body = createElement('div', 'ia-card-body');
  const title = createElement('h3', 'op-section-title', 'Resumo da operação');

  const counters = createElement('div', 'op-counters');
  const counterData = [
    { label: 'Total', value: tickets.length },
    { label: 'Em fila', value: tickets.filter((t) => t.status === 'IN_QUEUE' || t.status === 'NEW').length },
    { label: 'Em atendimento', value: tickets.filter((t) => t.status === 'IN_PROGRESS').length },
    { label: 'Aguardando cliente', value: tickets.filter((t) => t.status === 'WAITING_CUSTOMER').length }
  ];

  counterData.forEach((item) => {
    const block = createElement('div', 'op-counter');
    block.append(createElement('p', 'op-counter-label', item.label), createElement('p', 'op-counter-value', String(item.value)));
    counters.appendChild(block);
  });

  body.append(title, counters);
  card.appendChild(body);
  return card;
};

export { createQueueSummary };
