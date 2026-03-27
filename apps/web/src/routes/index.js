import { createDashboardPage } from '../pages/dashboard-page.js';

const routes = {
  '/': createDashboardPage,
  '/app': createDashboardPage,
  '/dashboard': createDashboardPage,
  '/atendimento': createDashboardPage
};

const resolveRoute = (pathname) => routes[pathname] ?? createDashboardPage;

export { resolveRoute };
