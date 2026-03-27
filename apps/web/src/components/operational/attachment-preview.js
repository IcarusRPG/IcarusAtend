import { createElement } from '/packages/ui/src/utils/dom.js';

const createAttachmentPreview = (attachment) => {
  const box = createElement('div', 'op-attachment');
  box.append(
    createElement('strong', null, attachment.fileName),
    createElement('span', 'ia-text-muted', attachment.mimeType)
  );
  return box;
};

export { createAttachmentPreview };
