import { createElement } from '/packages/ui/src/utils/dom.js';
import { createButton } from '/packages/ui/src/components/index.js';

const createComposerActions = ({ onInternalNote, onTemplate }) => {
  const wrap = createElement('div', 'op-composer-actions');

  wrap.append(
    createButton({ label: 'Áudio', variant: 'secondary' }),
    createButton({ label: 'Imagem', variant: 'secondary' }),
    createButton({ label: 'Documento', variant: 'secondary' }),
    createButton({ label: 'Nota interna', variant: 'secondary', onClick: onInternalNote }),
    createButton({ label: 'Mensagem modelo', variant: 'secondary', onClick: onTemplate })
  );

  return wrap;
};

export { createComposerActions };
