import { createElement } from '../utils/dom.js';

const createEmptyState = ({ title, description }) => {
  const container = createElement('div', 'ia-empty');
  const heading = createElement('h3', null, title);
  const text = createElement('p', 'ia-text-muted', description);
  container.append(heading, text);
  return container;
};

export { createEmptyState };
