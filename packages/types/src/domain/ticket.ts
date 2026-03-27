import type { BaseEntity, ID } from './base';
import type { Channel, TicketPriority, TicketStatus } from './enums';

export interface Ticket extends BaseEntity {
  customerId: ID;
  departmentId: ID;
  queueId?: ID;
  assignedUserId?: ID;
  conversationId: ID;
  status: TicketStatus;
  priority: TicketPriority;
  channel: Channel;
  subject?: string;
  tags: string[];
  startedByAI: boolean;
  transferredToHuman: boolean;
  closedAt?: string;
}

export interface QueueItem extends BaseEntity {
  ticketId: ID;
  queueId: ID;
  position: number;
  priority: TicketPriority;
  enteredAt: string;
  assignedAt?: string;
}

export interface SLAConfig extends BaseEntity {
  departmentId: ID;
  priority: TicketPriority;
  firstResponseMinutes: number;
  resolutionMinutes: number;
  isActive: boolean;
}
