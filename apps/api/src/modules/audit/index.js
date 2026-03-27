import { AuditController } from './controller.js';

const controller = new AuditController();

const auditModule = {
  basePath: '/audit',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { auditModule };
