import { createBadge } from '/packages/ui/src/components/index.js';
import { TicketStatus } from '../../lib/domain-mocks.js';

const toneByStatus = {
  [TicketStatus.NEW]: 'info',
  [TicketStatus.IN_QUEUE]: 'warning',
  [TicketStatus.IN_PROGRESS]: 'success',
  [TicketStatus.WAITING_CUSTOMER]: 'warning',
  [TicketStatus.TRANSFERRED]: 'info',
  [TicketStatus.CLOSED]: 'success'
};

const createStatusBadge = (status) => createBadge({ label: status, tone: toneByStatus[status] ?? 'info' });

export { createStatusBadge };
