import type { BaseEntity, ID } from './base';

export interface Permission extends BaseEntity {
  key: string;
  description: string;
}

export interface Role extends BaseEntity {
  name: string;
  description: string;
  permissionIds: ID[];
}

export interface User extends BaseEntity {
  name: string;
  email: string;
  isActive: boolean;
  roleIds: ID[];
  departmentIds: ID[];
}
