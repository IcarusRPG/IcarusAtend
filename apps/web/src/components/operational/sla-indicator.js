import { createElement } from '/packages/ui/src/utils/dom.js';

const createSLAIndicator = ({ minutesRemaining }) => {
  const tone = minutesRemaining <= 10 ? 'critical' : minutesRemaining <= 30 ? 'warning' : 'ok';
  return createElement('div', `op-sla-indicator ${tone}`, `SLA restante: ${minutesRemaining} min`);
};

export { createSLAIndicator };
