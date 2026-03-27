import { createElement } from '/packages/ui/src/utils/dom.js';

const createInternalNoteCard = (message) => {
  const note = createElement('div', 'op-internal-note');
  note.append(
    createElement('strong', null, 'Nota interna'),
    createElement('p', null, message.content),
    createElement('span', 'op-message-time', message.createdAt)
  );
  return note;
};

export { createInternalNoteCard };
