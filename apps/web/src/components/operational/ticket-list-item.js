import { createElement } from '/packages/ui/src/utils/dom.js';
import { createStatusBadge } from './status-badge.js';
import { createPriorityBadge } from './priority-badge.js';

const createTicketListItem = ({ ticket, customer, selected, onSelect }) => {
  const item = createElement('button', `op-ticket-item ${selected ? 'is-selected' : ''}`);
  item.type = 'button';
  item.addEventListener('click', () => onSelect(ticket.id));

  const title = createElement('div', 'op-ticket-item-title', `${ticket.id} · ${customer?.name ?? 'Cliente'}`);
  const subtitle = createElement('div', 'op-ticket-item-subtitle', ticket.subject ?? 'Sem assunto');

  const meta = createElement('div', 'op-ticket-item-meta');
  meta.append(createStatusBadge(ticket.status), createPriorityBadge(ticket.priority));

  const footer = createElement(
    'div',
    'op-ticket-item-footer',
    `${ticket.channel} · espera ${ticket.waitingMinutes} min · SLA ${ticket.slaMinutesRemaining} min`
  );

  item.append(title, subtitle, meta, footer);
  return item;
};

export { createTicketListItem };
