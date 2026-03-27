import '/packages/ui/src/theme/index.css';
import { resolveRoute } from './routes/index.js';
import { apiClient } from './services/api-client.js';

const appElement = document.getElementById('app');

if (!appElement) {
  throw new Error('Elemento #app não encontrado.');
}

const render = () => {
  const routeFactory = resolveRoute(window.location.pathname);
  appElement.innerHTML = '';

  const page = routeFactory();
  const pageElement = page.layout ?? page;
  appElement.appendChild(pageElement);

  return page;
};

const loadHealthStatus = async (page) => {
  const topbar = page.topbar;
  const badge = topbar?.querySelector('.ia-badge');

  if (!badge) return;

  try {
    const response = await apiClient.health();
    badge.textContent = `API ${response.status}`;
    badge.className = 'ia-badge success';
  } catch {
    badge.textContent = 'API indisponível';
    badge.className = 'ia-badge error';
  }
};

const page = render();
loadHealthStatus(page);
