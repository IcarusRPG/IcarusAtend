import type { BaseEntity, ID } from './base';
import type { Channel } from './enums';

export interface CustomerContact {
  channel: Channel;
  identifier: string;
  isPrimary: boolean;
}

export interface Customer extends BaseEntity {
  name: string;
  externalRef?: string;
  contacts: CustomerContact[];
  tags: string[];
  preferredChannel?: Channel;
  lastTicketId?: ID;
}
