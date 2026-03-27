import { createElement } from '/packages/ui/src/utils/dom.js';

const createSystemMessage = (message) => {
  const item = createElement('div', 'op-system-message');
  item.append(
    createElement('span', 'op-message-time', message.createdAt),
    createElement('span', null, message.content)
  );
  return item;
};

export { createSystemMessage };
