import { AuthController } from './controller.js';

const controller = new AuthController();

const authModule = {
  basePath: '/auth',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { authModule };
