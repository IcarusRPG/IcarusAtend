import { HandoffController } from './controller.js';

const controller = new HandoffController();

const handoffModule = {
  basePath: '/handoff',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { handoffModule };
