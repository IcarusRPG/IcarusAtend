import { UsersController } from './controller.js';

const controller = new UsersController();

const usersModule = {
  basePath: '/users',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { usersModule };
