import { createElement } from '../utils/dom.js';

const createButton = ({ label, variant = 'primary', onClick, type = 'button' }) => {
  const button = createElement('button', `ia-button ${variant}`, label);
  button.type = type;
  if (onClick) button.addEventListener('click', onClick);
  return button;
};

export { createButton };
