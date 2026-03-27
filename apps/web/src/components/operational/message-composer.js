import { createElement } from '/packages/ui/src/utils/dom.js';
import { createButton, createInput } from '/packages/ui/src/components/index.js';
import { MessageSender, MessageType } from '../../lib/domain-mocks.js';
import { createComposerActions } from './composer-actions.js';
import { createTemplateMessagePicker } from './template-message-picker.js';

const createMessageComposer = ({ onSend, onInternalNote, selectedTicketId }) => {
  const card = createElement('section', 'ia-card');
  const body = createElement('div', 'ia-card-body');

  const header = createElement('h3', 'op-section-title', 'Composer');
  const input = createInput({ placeholder: 'Digite sua resposta para o cliente...' });

  const send = () => {
    if (!input.value.trim()) return;
    onSend({
      id: `m-${Date.now()}`,
      ticketId: selectedTicketId,
      conversationId: `conv-${selectedTicketId}`,
      sender: MessageSender.AGENT,
      type: MessageType.TEXT,
      content: input.value,
      createdAt: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    });
    input.value = '';
  };

  const actions = createComposerActions({
    onInternalNote: () =>
      onInternalNote({
        id: `m-${Date.now()}`,
        ticketId: selectedTicketId,
        conversationId: `conv-${selectedTicketId}`,
        sender: MessageSender.AGENT,
        type: MessageType.INTERNAL_NOTE,
        content: 'Nota interna mockada adicionada pelo atendente.',
        createdAt: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      }),
    onTemplate: () => templatePicker.classList.toggle('is-open')
  });

  const sendButton = createButton({ label: 'Enviar', onClick: send });
  const footer = createElement('div', 'op-composer-footer');
  footer.append(actions, sendButton);

  const templatePicker = createTemplateMessagePicker({
    onPick: (template) => {
      input.value = template;
      templatePicker.classList.remove('is-open');
    }
  });

  body.append(header, input, footer, templatePicker);
  card.appendChild(body);
  return card;
};

export { createMessageComposer };
