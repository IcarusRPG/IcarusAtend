import { HandoffService } from './service.js';

class HandoffController {
  constructor(service = new HandoffService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { HandoffController };
