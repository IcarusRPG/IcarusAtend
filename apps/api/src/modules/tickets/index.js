import { TicketsController } from './controller.js';

const controller = new TicketsController();

const ticketsModule = {
  basePath: '/tickets',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { ticketsModule };
