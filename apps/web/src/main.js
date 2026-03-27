import '/packages/ui/src/theme/index.css';
import './styles/operational.css';
import { resolveRoute } from './routes/index.js';
import { apiClient } from './services/api-client.js';
import { createAppState } from './state/app-state.js';

const appElement = document.getElementById('app');

if (!appElement) {
  throw new Error('Elemento #app não encontrado.');
}

const store = createAppState();

const render = async () => {
  const routeFactory = resolveRoute(window.location.pathname);
  appElement.innerHTML = '';

  let apiStatusLabel = 'API indisponível';

  try {
    const health = await apiClient.health();
    apiStatusLabel = `API ${health.status}`;
  } catch {
    apiStatusLabel = 'API indisponível';
  }

  const page = routeFactory({ store, apiStatusLabel });
  const pageElement = page.layout ?? page;
  appElement.appendChild(pageElement);
};

render();
