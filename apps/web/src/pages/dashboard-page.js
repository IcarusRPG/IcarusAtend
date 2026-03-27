import {
  createAvatar,
  createBadge,
  createButton,
  createCard,
  createEmptyState,
  createInput,
  createModal,
  createSectionHeader,
  createStatCard,
  createTabs,
  createTextarea
} from '/packages/ui/src/components/index.js';
import { createElement } from '/packages/ui/src/utils/dom.js';
import { metrics, recentTickets } from '../lib/mock-data.js';

const navItems = [
  'Dashboard',
  'Fila',
  'Meus Atendimentos',
  'Supervisão',
  'Clientes',
  'Administração',
  'Logs',
  'Configurações'
];

const createSidebar = () => {
  const sidebar = createElement('aside', 'ia-sidebar');

  const logo = createElement('div', 'ia-logo');
  const logoImg = createElement('img');
  logoImg.src = 'https://i.imgur.com/T9WPu6g.png';
  logoImg.alt = 'Logo Icarus Atend';

  const logoText = createElement('span', null, 'Icarus Atend');
  logo.append(logoImg, logoText);

  const nav = createElement('nav', 'ia-nav');
  navItems.forEach((item, index) => {
    const button = createElement('button', `ia-nav-item ${index === 0 ? 'is-active' : ''}`, item);
    button.type = 'button';
    nav.appendChild(button);
  });

  sidebar.append(logo, nav);
  return sidebar;
};

const createTopbar = () => {
  const topbar = createElement('header', 'ia-topbar');

  const left = createElement('div');
  const title = createElement('strong', null, 'Operação em tempo real');
  const subtitle = createElement('p', 'ia-text-muted', 'Visão consolidada dos atendimentos e filas ativas');
  subtitle.style.margin = '0.2rem 0 0';
  left.append(title, subtitle);

  const right = createElement('div');
  right.style.display = 'flex';
  right.style.alignItems = 'center';
  right.style.gap = '0.6rem';

  right.append(
    createBadge({ label: 'API conectando...', tone: 'info' }),
    createAvatar({ name: 'Ana Silva' })
  );

  topbar.append(left, right);
  return topbar;
};

const createMetricsSection = () => {
  const grid = createElement('div', 'ia-grid cols-3');
  metrics.forEach((metric) => grid.appendChild(createStatCard(metric)));
  return grid;
};

const createRecentTicketsSection = () => {
  const header = createSectionHeader({
    title: 'Atendimentos recentes',
    subtitle: 'Últimas interações registradas no sistema',
    rightContent: createButton({ label: 'Ver fila completa', variant: 'secondary' })
  });

  const content = createElement('div');

  if (recentTickets.length === 0) {
    content.appendChild(
      createEmptyState({
        title: 'Nenhum atendimento recente',
        description: 'Assim que novos atendimentos chegarem, eles aparecerão aqui.'
      })
    );
  } else {
    const list = createElement('ul', 'ia-list');

    recentTickets.forEach((ticket) => {
      const item = createElement('li', 'ia-list-item');
      const left = createElement('div');
      left.append(
        createElement('strong', null, `${ticket.id} · ${ticket.customer}`),
        createElement('p', 'ia-text-muted', `Canal: ${ticket.channel}`)
      );
      left.lastChild.style.margin = '0.25rem 0 0';

      const toneByStatus = {
        'Em andamento': 'info',
        'Aguardando cliente': 'warning',
        Novo: 'success'
      };

      item.append(left, createBadge({ label: ticket.status, tone: toneByStatus[ticket.status] || 'info' }));
      list.appendChild(item);
    });

    content.appendChild(list);
  }

  return createCard({ children: [header, content] });
};

const createOperationalOverview = () => {
  const tabs = createTabs({
    items: [
      { label: 'Hoje', value: 'today' },
      { label: '7 dias', value: 'week' },
      { label: '30 dias', value: 'month' }
    ],
    active: 'today'
  });

  const form = createElement('div', 'ia-grid');
  form.style.gap = '0.75rem';

  const input = createInput({ placeholder: 'Filtrar por fila, atendente ou canal' });
  const textarea = createTextarea({ placeholder: 'Anotações operacionais rápidas...' });

  const quickActionContent = createElement('div');
  quickActionContent.append(
    createElement('p', 'ia-text-muted', 'Exemplo de modal para ações futuras do dashboard.')
  );
  const modal = createModal({ title: 'Nova ação operacional', content: quickActionContent });

  const actionButton = createButton({
    label: 'Nova ação',
    onClick: () => modal.open()
  });

  form.append(tabs, input, textarea, actionButton, modal.element);

  return createCard({
    children: [
      createSectionHeader({
        title: 'Visão geral operacional',
        subtitle: 'Resumo para supervisão e coordenação de atendimento'
      }),
      form
    ]
  });
};

const createDashboardPage = () => {
  const layout = createElement('div', 'ia-app-layout');
  const main = createElement('div', 'ia-main');

  const topbar = createTopbar();
  const content = createElement('main', 'ia-content');
  content.append(
    createMetricsSection(),
    createElement('div', 'ia-grid cols-2'),
    createRecentTicketsSection(),
    createOperationalOverview()
  );

  const splitGrid = content.querySelector('.ia-grid.cols-2');
  splitGrid.append(
    createCard({
      children: [
        createSectionHeader({
          title: 'SLA por prioridade',
          subtitle: 'Monitoramento das janelas de resposta'
        }),
        createEmptyState({
          title: 'Gráfico será habilitado em breve',
          description: 'Espaço reservado para evolução com métricas detalhadas.'
        })
      ]
    }),
    createCard({
      children: [
        createSectionHeader({
          title: 'Capacidade da equipe',
          subtitle: 'Distribuição de atendimentos por agente'
        }),
        createEmptyState({
          title: 'Sem dados de escala no momento',
          description: 'Conecte a fonte de dados para visualizar a capacidade em tempo real.'
        })
      ]
    })
  );

  layout.append(createSidebar(), main);
  main.append(topbar, content);

  return { layout, topbar };
};

export { createDashboardPage };
