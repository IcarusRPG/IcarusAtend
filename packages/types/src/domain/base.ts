export type ID = string;

export interface EntityMeta {
  createdAt: string;
  updatedAt: string;
  createdBy?: ID;
  updatedBy?: ID;
}

export interface BaseEntity {
  id: ID;
  meta: EntityMeta;
}
