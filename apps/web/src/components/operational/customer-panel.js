import { createCard, createSectionHeader } from '/packages/ui/src/components/index.js';
import { createElement } from '/packages/ui/src/utils/dom.js';

const createCustomerPanel = ({ customer }) => {
  const list = createElement('div', 'op-context-list');
  list.append(
    createElement('p', null, `Nome: ${customer.name}`),
    createElement('p', null, `Contato: ${customer.identifier}`),
    createElement('p', null, `Canal: ${customer.channel}`),
    createElement('p', null, `Tags: ${customer.tags.join(', ')}`)
  );

  return createCard({
    children: [
      createSectionHeader({ title: 'Cliente', subtitle: 'Dados principais do consumidor' }),
      list
    ]
  });
};

export { createCustomerPanel };
