import type { BaseEntity, ID } from './base';
import type { MessageSender, MessageType } from './enums';

export interface Attachment extends BaseEntity {
  messageId: ID;
  fileName: string;
  mimeType: string;
  sizeInBytes: number;
  url: string;
}

export interface Message extends BaseEntity {
  ticketId: ID;
  conversationId: ID;
  sender: MessageSender;
  type: MessageType;
  content: string;
  attachmentIds: ID[];
  isPrivate: boolean;
}

export interface TemplateMessage extends BaseEntity {
  title: string;
  body: string;
  category: string;
  isActive: boolean;
  variables: string[];
}
