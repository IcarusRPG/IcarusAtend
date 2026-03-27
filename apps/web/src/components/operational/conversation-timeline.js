import { createElement } from '/packages/ui/src/utils/dom.js';
import { createMessageBubble } from './message-bubble.js';

const createConversationTimeline = ({ messages }) => {
  const card = createElement('section', 'ia-card op-conversation-card');
  const body = createElement('div', 'ia-card-body op-conversation-body');
  const title = createElement('h3', 'op-section-title', 'Conversation / Timeline');

  const timeline = createElement('div', 'op-timeline');
  messages.forEach((message) => timeline.appendChild(createMessageBubble(message)));

  body.append(title, timeline);
  card.appendChild(body);
  return card;
};

export { createConversationTimeline };
