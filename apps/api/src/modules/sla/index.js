import { SlaController } from './controller.js';

const controller = new SlaController();

const slaModule = {
  basePath: '/sla',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { slaModule };
