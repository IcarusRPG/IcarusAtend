import { authModule } from '../modules/auth/index.js';
import { usersModule } from '../modules/users/index.js';
import { rolesModule } from '../modules/roles/index.js';
import { departmentsModule } from '../modules/departments/index.js';
import { customersModule } from '../modules/customers/index.js';
import { ticketsModule } from '../modules/tickets/index.js';
import { conversationsModule } from '../modules/conversations/index.js';
import { messagesModule } from '../modules/messages/index.js';
import { attachmentsModule } from '../modules/attachments/index.js';
import { templatesModule } from '../modules/templates/index.js';
import { queueModule } from '../modules/queue/index.js';
import { slaModule } from '../modules/sla/index.js';
import { auditModule } from '../modules/audit/index.js';
import { handoffModule } from '../modules/handoff/index.js';

const modules = [
  authModule,
  usersModule,
  rolesModule,
  departmentsModule,
  customersModule,
  ticketsModule,
  conversationsModule,
  messagesModule,
  attachmentsModule,
  templatesModule,
  queueModule,
  slaModule,
  auditModule,
  handoffModule
];

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
