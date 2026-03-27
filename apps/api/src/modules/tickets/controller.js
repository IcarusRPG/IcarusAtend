import { TicketsService } from './service.js';

class TicketsController {
  constructor(service = new TicketsService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { TicketsController };
