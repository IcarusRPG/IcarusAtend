import { RolesController } from './controller.js';

const controller = new RolesController();

const rolesModule = {
  basePath: '/roles',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { rolesModule };
