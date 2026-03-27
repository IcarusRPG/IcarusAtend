import { QueueController } from './controller.js';

const controller = new QueueController();

const queueModule = {
  basePath: '/queue',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { queueModule };
