import { createElement } from '../utils/dom.js';

const createCard = ({ children = [] } = {}) => {
  const card = createElement('section', 'ia-card');
  const body = createElement('div', 'ia-card-body');
  children.forEach((child) => body.appendChild(child));
  card.appendChild(body);
  return card;
};

export { createCard };
