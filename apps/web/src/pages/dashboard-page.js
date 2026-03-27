import { createButton, createSectionHeader, createStatCard } from '/packages/ui/src/components/index.js';
import { createElement } from '/packages/ui/src/utils/dom.js';
import {
  auditLogs,
  customers,
  departments,
  handoffs,
  messages,
  tickets,
  users,
  TicketStatus
} from '../lib/domain-mocks.js';
import { createTicketList } from '../components/operational/ticket-list.js';
import { createQueueSummary } from '../components/operational/queue-summary.js';
import { createConversationTimeline } from '../components/operational/conversation-timeline.js';
import { createMessageComposer } from '../components/operational/message-composer.js';
import { createCustomerPanel } from '../components/operational/customer-panel.js';
import { createTicketContextPanel } from '../components/operational/ticket-context-panel.js';
import { createHandoffSummaryCard } from '../components/operational/handoff-summary-card.js';
import { createAuditTrailPreview } from '../components/operational/audit-trail-preview.js';

const navItems = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'fila', label: 'Fila' },
  { key: 'meus', label: 'Meus Atendimentos' },
  { key: 'atendimento', label: 'Atendimento' },
  { key: 'supervisao', label: 'Supervisão' },
  { key: 'clientes', label: 'Clientes' },
  { key: 'administracao', label: 'Administração' },
  { key: 'logs', label: 'Logs' },
  { key: 'configuracoes', label: 'Configurações' }
];

const viewTabs = [
  { key: 'atendimento', label: 'Tela de Atendimento' },
  { key: 'fila', label: 'Fila de Atendimentos' },
  { key: 'meus', label: 'Meus Atendimentos' },
  { key: 'supervisao', label: 'Supervisão' }
];

const buildMaps = () => ({
  customersById: Object.fromEntries(customers.map((item) => [item.id, item])),
  usersById: Object.fromEntries(users.map((item) => [item.id, item])),
  departmentsById: Object.fromEntries(departments.map((item) => [item.id, item]))
});

const filterTickets = (allTickets, state) =>
  allTickets.filter((ticket) => {
    const statusOk = state.statusFilter === 'ALL' || ticket.status === state.statusFilter;
    const priorityOk = state.priorityFilter === 'ALL' || ticket.priority === state.priorityFilter;
    return statusOk && priorityOk;
  });

const createLeftColumn = ({ state, onSelectTicket, onFilterChange, maps }) => {
  const wrapper = createElement('div', 'op-col op-col-left');

  const filters = createElement('section', 'ia-card');
  const filtersBody = createElement('div', 'ia-card-body');
  filtersBody.appendChild(createElement('h3', 'op-section-title', 'Filtros'));

  const statusSelect = createElement('select', 'op-filter-select');
  ['ALL', ...Object.values(TicketStatus)].forEach((status) => {
    const option = createElement('option', null, status);
    option.value = status;
    option.selected = status === state.statusFilter;
    statusSelect.appendChild(option);
  });

  const prioritySelect = createElement('select', 'op-filter-select');
  ['ALL', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].forEach((priority) => {
    const option = createElement('option', null, priority);
    option.value = priority;
    option.selected = priority === state.priorityFilter;
    prioritySelect.appendChild(option);
  });

  statusSelect.addEventListener('change', (event) => onFilterChange({ statusFilter: event.target.value }));
  prioritySelect.addEventListener('change', (event) => onFilterChange({ priorityFilter: event.target.value }));

  filtersBody.append(
    createElement('label', 'op-filter-label', 'Status'),
    statusSelect,
    createElement('label', 'op-filter-label', 'Prioridade'),
    prioritySelect
  );
  filters.appendChild(filtersBody);

  const visibleTickets = filterTickets(tickets, state);
  const queueTickets = visibleTickets.filter((ticket) => !ticket.assignedUserId || ticket.status === 'IN_QUEUE' || ticket.status === 'NEW');
  const assignedTickets = visibleTickets.filter((ticket) => ticket.assignedUserId === 'u-1');

  wrapper.append(
    createQueueSummary({ tickets: visibleTickets }),
    filters,
    createTicketList({
      title: 'Tickets em fila',
      tickets: queueTickets,
      customersById: maps.customersById,
      selectedTicketId: state.selectedTicketId,
      onSelect: onSelectTicket
    }),
    createTicketList({
      title: 'Meus tickets',
      tickets: assignedTickets,
      customersById: maps.customersById,
      selectedTicketId: state.selectedTicketId,
      onSelect: onSelectTicket
    })
  );

  return wrapper;
};

const createCenterColumn = ({ state, onSendMessage, onInternalNote }) => {
  const wrapper = createElement('div', 'op-col op-col-center');

  const selectedMessages = state.messages
    .filter((message) => message.ticketId === state.selectedTicketId)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  wrapper.append(
    createConversationTimeline({ messages: selectedMessages }),
    createMessageComposer({
      selectedTicketId: state.selectedTicketId,
      onSend: onSendMessage,
      onInternalNote
    })
  );

  return wrapper;
};

const createRightColumn = ({ state, maps }) => {
  const wrapper = createElement('div', 'op-col op-col-right');
  const ticket = tickets.find((item) => item.id === state.selectedTicketId) ?? tickets[0];
  const customer = maps.customersById[ticket.customerId];
  const handoff = handoffs.find((item) => item.ticketId === ticket.id);
  const logs = auditLogs.filter((item) => item.ticketId === ticket.id);

  wrapper.append(
    createCustomerPanel({ customer }),
    createTicketContextPanel({
      ticket,
      departmentName: maps.departmentsById[ticket.departmentId]?.name ?? '-',
      assigneeName: maps.usersById[ticket.assignedUserId]?.name
    }),
    createHandoffSummaryCard({ handoff }),
    createAuditTrailPreview({ logs })
  );

  return wrapper;
};

const createQueueView = ({ state, onSelectTicket, maps }) => {
  const card = createElement('section', 'ia-card');
  const body = createElement('div', 'ia-card-body');

  const header = createSectionHeader({
    title: 'Fila de Atendimentos',
    subtitle: 'Agrupamento por departamento, prioridade e tempo de espera'
  });

  const grouped = departments.map((department) => ({
    department,
    items: tickets.filter((ticket) => ticket.departmentId === department.id && (ticket.status === 'IN_QUEUE' || ticket.status === 'NEW'))
  }));

  const container = createElement('div', 'op-grouped-queue');
  grouped.forEach((group) => {
    const block = createElement('div', 'op-queue-group');
    block.appendChild(createElement('h3', 'op-section-title', group.department.name));

    if (group.items.length === 0) {
      block.appendChild(createElement('p', 'ia-text-muted', 'Sem tickets em fila neste departamento.'));
    }

    group.items.forEach((ticket) => {
      block.appendChild(
        createButton({
          label: `${ticket.id} · ${maps.customersById[ticket.customerId]?.name} · espera ${ticket.waitingMinutes} min`,
          variant: 'secondary',
          onClick: () => onSelectTicket(ticket.id)
        })
      );
    });

    container.appendChild(block);
  });

  body.append(header, container);
  card.appendChild(body);
  return card;
};

const createMyTicketsView = ({ onSelectTicket, maps }) => {
  const card = createElement('section', 'ia-card');
  const body = createElement('div', 'ia-card-body');

  body.appendChild(
    createSectionHeader({
      title: 'Meus Atendimentos',
      subtitle: 'Tickets atribuídos ao atendente atual'
    })
  );

  const myTickets = tickets.filter((ticket) => ticket.assignedUserId === 'u-1');
  const list = createElement('div', 'op-my-tickets-list');

  myTickets.forEach((ticket) => {
    list.appendChild(
      createButton({
        label: `${ticket.id} · ${maps.customersById[ticket.customerId]?.name} · ${ticket.status}`,
        variant: 'secondary',
        onClick: () => onSelectTicket(ticket.id)
      })
    );
  });

  body.appendChild(list);
  card.appendChild(body);
  return card;
};

const createSupervisionView = () => {
  const inQueue = tickets.filter((ticket) => ticket.status === 'IN_QUEUE' || ticket.status === 'NEW').length;
  const inProgress = tickets.filter((ticket) => ticket.status === 'IN_PROGRESS').length;
  const waiting = tickets.filter((ticket) => ticket.status === 'WAITING_CUSTOMER').length;
  const closedToday = tickets.filter((ticket) => ticket.status === 'CLOSED').length;

  const container = createElement('div', 'op-supervision-grid');
  container.append(
    createStatCard({ label: 'Total em fila', value: String(inQueue), footer: 'Visão operacional em tempo real' }),
    createStatCard({ label: 'Em atendimento', value: String(inProgress), footer: 'Ativos neste momento' }),
    createStatCard({ label: 'Aguardando cliente', value: String(waiting), footer: 'Pendentes de retorno' }),
    createStatCard({ label: 'Encerrados hoje', value: String(closedToday), footer: 'Concluídos no período' })
  );

  const alerts = createElement('section', 'ia-card');
  const body = createElement('div', 'ia-card-body');
  body.append(
    createSectionHeader({ title: 'Alertas de SLA', subtitle: 'Itens críticos para supervisão' }),
    createElement('p', null, 'ATD-1296 em risco de SLA (8 min restantes).'),
    createElement('p', null, '2 agentes online no departamento Atendimento CX.')
  );
  alerts.appendChild(body);

  const wrap = createElement('div', 'op-supervision-wrap');
  wrap.append(container, alerts);
  return wrap;
};

const createMainView = ({ state, onSelectTicket, onFilterChange, onSendMessage, onInternalNote, maps }) => {
  if (state.currentView === 'fila') return createQueueView({ state, onSelectTicket, maps });
  if (state.currentView === 'meus') return createMyTicketsView({ onSelectTicket, maps });
  if (state.currentView === 'supervisao') return createSupervisionView();

  const grid = createElement('section', 'op-main-grid');
  grid.append(
    createLeftColumn({ state, onSelectTicket, onFilterChange, maps }),
    createCenterColumn({ state, onSendMessage, onInternalNote }),
    createRightColumn({ state, maps })
  );

  return grid;
};

const createDashboardPage = ({ store, apiStatusLabel = 'API mockada' }) => {
  const maps = buildMaps();
  const root = createElement('div', 'ia-app-layout');
  const sidebar = createElement('aside', 'ia-sidebar');
  const logo = createElement('div', 'ia-logo');
  const logoIcon = createElement('div', 'ia-logo-fallback');
  logo.append(logoIcon, createElement('span', null, 'Icarus Atend'));

  const nav = createElement('nav', 'ia-nav');
  navItems.forEach((item) => {
    const button = createElement('button', `ia-nav-item ${item.key === 'atendimento' ? 'is-active' : ''}`, item.label);
    button.type = 'button';
    nav.appendChild(button);
  });

  sidebar.append(logo, nav);

  const main = createElement('div', 'ia-main');
  const topbar = createElement('header', 'ia-topbar');
  const left = createElement('div');
  left.append(
    createElement('strong', null, 'Operação Icarus Atend'),
    createElement('p', 'ia-text-muted', 'Fluxo completo de atendimento com histórico e contexto')
  );
  left.lastChild.style.margin = '0.2rem 0 0';

  const right = createElement('div', 'op-topbar-actions');
  viewTabs.forEach((tab) => {
    const button = createButton({
      label: tab.label,
      variant: store.getState().currentView === tab.key ? 'primary' : 'secondary',
      onClick: () => store.setState({ currentView: tab.key })
    });
    right.appendChild(button);
  });
  right.appendChild(createElement('span', 'ia-badge info', apiStatusLabel));

  topbar.append(left, right);

  const content = createElement('main', 'ia-content');

  const renderContent = () => {
    content.innerHTML = '';
    const state = store.getState();
    content.appendChild(
      createMainView({
        state,
        onSelectTicket: (selectedTicketId) => store.setState({ selectedTicketId, currentView: 'atendimento' }),
        onFilterChange: (patch) => store.setState(patch),
        onSendMessage: (message) => store.appendMessage(message),
        onInternalNote: (message) => store.appendMessage(message),
        maps
      })
    );
  };

  renderContent();
  store.subscribe(renderContent);

  main.append(topbar, content);
  root.append(sidebar, main);

  return { layout: root };
};

export { createDashboardPage };
