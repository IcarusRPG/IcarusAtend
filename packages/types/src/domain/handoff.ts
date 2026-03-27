import type { BaseEntity, ID } from './base';
import type { HandoffStatus, TicketPriority } from './enums';

export interface Handoff extends BaseEntity {
  ticketId: ID;
  origem: 'AI';
  destino: 'HUMAN';
  resumoGeradoIA: string;
  intencaoDetectada: string;
  prioridadeSugerida: TicketPriority;
  dadosColetadosCliente: Record<string, unknown>;
  status: HandoffStatus;
  acceptedByUserId?: ID;
  acceptedAt?: string;
}
