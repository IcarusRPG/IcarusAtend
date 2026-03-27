import { ConversationsController } from './controller.js';

const controller = new ConversationsController();

const conversationsModule = {
  basePath: '/conversations',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { conversationsModule };
