import { authModule } from '../modules/auth/index.js';
import { usersModule } from '../modules/users/index.js';
import { ticketsModule } from '../modules/tickets/index.js';

const modules = [authModule, usersModule, ticketsModule];

const normalizePath = (prefix, basePath, path) => `${prefix}${basePath}${path}`.replace(/\/+/g, '/');

const buildRoutes = (apiPrefix) => {
  const moduleRoutes = modules.flatMap((moduleDef) =>
    moduleDef.routes.map((route) => ({
      method: route.method,
      path: normalizePath(apiPrefix, moduleDef.basePath, route.path),
      handler: route.handler
    }))
  );

  return [
    {
      method: 'GET',
      path: '/health',
      handler: () => ({ status: 'ok' })
    },
    ...moduleRoutes
  ];
};

export { buildRoutes };
