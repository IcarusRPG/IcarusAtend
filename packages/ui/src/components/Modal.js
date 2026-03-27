import { createElement } from '../utils/dom.js';

const createModal = ({ title = 'Modal', content }) => {
  const overlay = createElement('div', 'ia-modal-overlay');
  const modal = createElement('div', 'ia-modal');

  const heading = createElement('h3', null, title);
  modal.appendChild(heading);

  if (content) modal.appendChild(content);

  overlay.appendChild(modal);

  const open = () => overlay.classList.add('is-open');
  const close = () => overlay.classList.remove('is-open');

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) close();
  });

  return { element: overlay, open, close };
};

export { createModal };
