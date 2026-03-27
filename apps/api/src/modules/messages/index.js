import { MessagesController } from './controller.js';

const controller = new MessagesController();

const messagesModule = {
  basePath: '/messages',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { messagesModule };
