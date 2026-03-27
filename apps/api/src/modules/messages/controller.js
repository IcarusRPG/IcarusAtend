import { MessagesService } from './service.js';

class MessagesController {
  constructor(service = new MessagesService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { MessagesController };
