import { ConversationsService } from './service.js';

class ConversationsController {
  constructor(service = new ConversationsService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { ConversationsController };
