import { createCard, createSectionHeader } from '/packages/ui/src/components/index.js';
import { createElement } from '/packages/ui/src/utils/dom.js';
import { createStatusBadge } from './status-badge.js';
import { createPriorityBadge } from './priority-badge.js';
import { createSLAIndicator } from './sla-indicator.js';

const createTicketContextPanel = ({ ticket, departmentName, assigneeName }) => {
  const wrap = createElement('div', 'op-context-list');
  wrap.append(
    createElement('p', null, `Protocolo: ${ticket.protocol}`),
    createElement('p', null, `Departamento: ${departmentName}`),
    createElement('p', null, `Responsável: ${assigneeName ?? 'Não atribuído'}`)
  );

  const badges = createElement('div', 'op-badges-inline');
  badges.append(createStatusBadge(ticket.status), createPriorityBadge(ticket.priority));

  return createCard({
    children: [
      createSectionHeader({ title: 'Ticket', subtitle: 'Contexto operacional do atendimento' }),
      wrap,
      badges,
      createSLAIndicator({ minutesRemaining: ticket.slaMinutesRemaining })
    ]
  });
};

export { createTicketContextPanel };
