import { resolveRoute } from './routes/index.js';
import { apiClient } from './services/api-client.js';

const appElement = document.getElementById('app');

if (!appElement) {
  throw new Error('Elemento #app não encontrado.');
}

const render = () => {
  const routeFactory = resolveRoute(window.location.pathname);
  appElement.innerHTML = '';
  appElement.appendChild(routeFactory());
};

const loadHealthStatus = async () => {
  const statusElement = document.getElementById('api-status');
  if (!statusElement) return;

  try {
    const response = await apiClient.health();
    statusElement.textContent = `Status API: ${response.status}`;
  } catch {
    statusElement.textContent = 'Status API: indisponível';
  }
};

render();
loadHealthStatus();
