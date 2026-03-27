import { createBadge } from '/packages/ui/src/components/index.js';
import { TicketPriority } from '../../lib/domain-mocks.js';

const toneByPriority = {
  [TicketPriority.LOW]: 'success',
  [TicketPriority.MEDIUM]: 'info',
  [TicketPriority.HIGH]: 'warning',
  [TicketPriority.CRITICAL]: 'error'
};

const createPriorityBadge = (priority) =>
  createBadge({ label: `Prioridade ${priority}`, tone: toneByPriority[priority] ?? 'info' });

export { createPriorityBadge };
