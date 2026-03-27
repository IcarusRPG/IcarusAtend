import { createElement } from '../utils/dom.js';

const createTabs = ({ items = [], active = '', onChange }) => {
  const container = createElement('div', 'ia-tabs');

  items.forEach((item) => {
    const tab = createElement('button', `ia-tab ${item.value === active ? 'is-active' : ''}`, item.label);
    tab.type = 'button';
    tab.addEventListener('click', () => onChange?.(item.value));
    container.appendChild(tab);
  });

  return container;
};

export { createTabs };
