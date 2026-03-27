import type { BaseEntity, ID } from './base';

export interface Conversation extends BaseEntity {
  ticketId: ID;
  messageIds: ID[];
  lastMessageAt?: string;
}
