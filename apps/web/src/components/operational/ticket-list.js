import { createElement } from '/packages/ui/src/utils/dom.js';
import { createTicketListItem } from './ticket-list-item.js';

const createTicketList = ({ title, tickets, customersById, selectedTicketId, onSelect }) => {
  const section = createElement('section', 'ia-card');
  const body = createElement('div', 'ia-card-body');

  const header = createElement('h3', 'op-section-title', title);
  const list = createElement('div', 'op-ticket-list');

  tickets.forEach((ticket) => {
    list.appendChild(
      createTicketListItem({
        ticket,
        customer: customersById[ticket.customerId],
        selected: selectedTicketId === ticket.id,
        onSelect
      })
    );
  });

  body.append(header, list);
  section.appendChild(body);
  return section;
};

export { createTicketList };
