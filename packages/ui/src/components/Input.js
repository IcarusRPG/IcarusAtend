import { createElement } from '../utils/dom.js';

const createInput = ({ placeholder = '', value = '' } = {}) => {
  const input = createElement('input', 'ia-input');
  input.placeholder = placeholder;
  input.value = value;
  return input;
};

export { createInput };
