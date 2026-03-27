import { DepartmentsController } from './controller.js';

const controller = new DepartmentsController();

const departmentsModule = {
  basePath: '/departments',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { departmentsModule };
