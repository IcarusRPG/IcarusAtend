import { createElement } from '/packages/ui/src/utils/dom.js';

const templateMessages = [
  'Olá! Recebi seu chamado e já estou verificando.',
  'Poderia confirmar o número do pedido para prosseguir?',
  'Encaminhei para o time responsável e retorno em instantes.'
];

const createTemplateMessagePicker = ({ onPick }) => {
  const wrap = createElement('div', 'op-template-picker');
  wrap.appendChild(createElement('strong', null, 'Modelos rápidos'));

  templateMessages.forEach((template) => {
    const button = createElement('button', 'op-template-btn', template);
    button.type = 'button';
    button.addEventListener('click', () => onPick(template));
    wrap.appendChild(button);
  });

  return wrap;
};

export { createTemplateMessagePicker };
