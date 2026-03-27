import { createHomePage } from '../pages/home-page.js';

const routes = {
  '/': createHomePage,
  '/app': createHomePage
};

const resolveRoute = (pathname) => routes[pathname] ?? createHomePage;

export { resolveRoute };
