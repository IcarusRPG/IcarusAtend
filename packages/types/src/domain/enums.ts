export enum TicketStatus {
  NEW = 'NEW',
  IN_QUEUE = 'IN_QUEUE',
  IN_PROGRESS = 'IN_PROGRESS',
  WAITING_CUSTOMER = 'WAITING_CUSTOMER',
  TRANSFERRED = 'TRANSFERRED',
  CLOSED = 'CLOSED'
}

export enum MessageType {
  TEXT = 'TEXT',
  SYSTEM = 'SYSTEM',
  INTERNAL_NOTE = 'INTERNAL_NOTE',
  AUDIO = 'AUDIO',
  IMAGE = 'IMAGE',
  DOCUMENT = 'DOCUMENT'
}

export enum MessageSender {
  CUSTOMER = 'CUSTOMER',
  AGENT = 'AGENT',
  SYSTEM = 'SYSTEM',
  AI = 'AI'
}

export enum TicketPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum HandoffStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  COMPLETED = 'COMPLETED'
}

export enum Channel {
  WHATSAPP = 'WHATSAPP',
  WEBCHAT = 'WEBCHAT',
  EMAIL = 'EMAIL',
  API = 'API'
}
