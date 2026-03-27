import { createDashboardPage } from '../pages/dashboard-page.js';

const routes = {
  '/': createDashboardPage,
  '/app': createDashboardPage,
  '/dashboard': createDashboardPage
};

const resolveRoute = (pathname) => routes[pathname] ?? createDashboardPage;

export { resolveRoute };
