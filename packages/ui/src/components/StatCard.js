import { createCard } from './Card.js';
import { createElement } from '../utils/dom.js';

const createStatCard = ({ label, value, footer }) => {
  const labelEl = createElement('p', 'ia-stat-label', label);
  const valueEl = createElement('p', 'ia-stat-value', value);
  const footerEl = createElement('p', 'ia-text-muted', footer);
  footerEl.style.margin = '0.45rem 0 0';

  return createCard({ children: [labelEl, valueEl, footerEl] });
};

export { createStatCard };
