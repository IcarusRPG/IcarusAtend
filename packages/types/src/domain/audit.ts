import type { BaseEntity, ID } from './base';

export interface AuditLog extends BaseEntity {
  actorUserId?: ID;
  actorType: 'USER' | 'SYSTEM' | 'AI';
  action: string;
  entityType: string;
  entityId: ID;
  description: string;
  changes?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
}
