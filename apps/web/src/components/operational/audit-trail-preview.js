import { createCard, createSectionHeader } from '/packages/ui/src/components/index.js';
import { createElement } from '/packages/ui/src/utils/dom.js';

const createAuditTrailPreview = ({ logs }) => {
  const list = createElement('ul', 'op-audit-list');

  logs.forEach((log) => {
    const item = createElement('li', 'op-audit-item');
    item.append(
      createElement('strong', null, log.action),
      createElement('span', 'ia-text-muted', `${log.at} · ${log.actor}`)
    );
    list.appendChild(item);
  });

  return createCard({
    children: [
      createSectionHeader({ title: 'Histórico / Auditoria', subtitle: 'Ações críticas recentes' }),
      list
    ]
  });
};

export { createAuditTrailPreview };
