import type { BaseEntity, ID } from './base';

export interface DepartmentQueue extends BaseEntity {
  name: string;
  departmentId: ID;
  isActive: boolean;
  priorityOrder: number;
}

export interface Department extends BaseEntity {
  name: string;
  description?: string;
  queueIds: ID[];
  managerUserId?: ID;
}
