import { CustomersController } from './controller.js';

const controller = new CustomersController();

const customersModule = {
  basePath: '/customers',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { customersModule };
