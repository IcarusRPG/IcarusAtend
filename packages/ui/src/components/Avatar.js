import { createElement } from '../utils/dom.js';

const createAvatar = ({ name = 'IA' } = {}) => {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

  return createElement('span', 'ia-avatar', initials || 'IA');
};

export { createAvatar };
