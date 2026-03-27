import { createElement } from '../utils/dom.js';

const createBadge = ({ label, tone = 'info' }) => createElement('span', `ia-badge ${tone}`, label);

export { createBadge };
