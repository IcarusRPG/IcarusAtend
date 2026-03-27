import { AttachmentsService } from './service.js';

class AttachmentsController {
  constructor(service = new AttachmentsService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { AttachmentsController };
