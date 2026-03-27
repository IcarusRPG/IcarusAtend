import { messages, tickets } from '../lib/domain-mocks.js';

const createAppState = () => {
  const state = {
    currentView: 'atendimento',
    selectedTicketId: tickets[0]?.id,
    statusFilter: 'ALL',
    priorityFilter: 'ALL',
    messages: [...messages]
  };

  const listeners = new Set();

  const getState = () => state;

  const notify = () => listeners.forEach((listener) => listener(state));

  const setState = (patch) => {
    Object.assign(state, patch);
    notify();
  };

  const appendMessage = (message) => {
    state.messages.push(message);
    notify();
  };

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, appendMessage, subscribe };
};

export { createAppState };
