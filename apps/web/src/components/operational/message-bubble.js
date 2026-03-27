import { createElement } from '/packages/ui/src/utils/dom.js';
import { MessageSender, MessageType } from '../../lib/domain-mocks.js';
import { createAttachmentPreview } from './attachment-preview.js';
import { createSystemMessage } from './system-message.js';
import { createInternalNoteCard } from './internal-note-card.js';

const createMessageBubble = (message) => {
  if (message.type === MessageType.SYSTEM || message.sender === MessageSender.SYSTEM) {
    return createSystemMessage(message);
  }

  if (message.type === MessageType.INTERNAL_NOTE) {
    return createInternalNoteCard(message);
  }

  const bubble = createElement('div', `op-message-bubble from-${message.sender.toLowerCase()}`);

  const header = createElement('div', 'op-message-header', `${message.sender} · ${message.type}`);
  const content = createElement('p', 'op-message-content', message.content);
  const time = createElement('span', 'op-message-time', message.createdAt);

  bubble.append(header, content);

  if (message.attachments?.length) {
    const attachmentsWrap = createElement('div', 'op-attachments-wrap');
    message.attachments.forEach((attachment) => attachmentsWrap.appendChild(createAttachmentPreview(attachment)));
    bubble.appendChild(attachmentsWrap);
  }

  bubble.appendChild(time);
  return bubble;
};

export { createMessageBubble };
