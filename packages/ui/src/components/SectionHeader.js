import { createElement } from '../utils/dom.js';

const createSectionHeader = ({ title, subtitle, rightContent }) => {
  const wrapper = createElement('header', 'ia-section-header');
  const left = createElement('div');
  const heading = createElement('h2', null, title);
  const sub = createElement('p', 'ia-text-muted', subtitle);
  sub.style.margin = '0.25rem 0 0';
  left.append(heading, sub);

  wrapper.appendChild(left);
  if (rightContent) wrapper.appendChild(rightContent);

  return wrapper;
};

export { createSectionHeader };
