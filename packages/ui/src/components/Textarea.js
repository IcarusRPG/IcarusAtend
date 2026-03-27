import { createElement } from '../utils/dom.js';

const createTextarea = ({ placeholder = '', value = '' } = {}) => {
  const textarea = createElement('textarea', 'ia-textarea');
  textarea.placeholder = placeholder;
  textarea.value = value;
  return textarea;
};

export { createTextarea };
