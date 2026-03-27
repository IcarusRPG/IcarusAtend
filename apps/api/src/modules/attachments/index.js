import { AttachmentsController } from './controller.js';

const controller = new AttachmentsController();

const attachmentsModule = {
  basePath: '/attachments',
  routes: [
    {
      method: 'GET',
      path: '/status',
      handler: () => controller.status()
    }
  ]
};

export { attachmentsModule };
