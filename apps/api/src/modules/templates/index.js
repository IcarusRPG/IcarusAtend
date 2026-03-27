import { TemplatesController } from './controller.js';

const controller = new TemplatesController();

const templatesModule = {
  basePath: '/templates',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { templatesModule };
