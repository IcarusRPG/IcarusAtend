import { QueueService } from './service.js';

class QueueController {
  constructor(service = new QueueService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { QueueController };
