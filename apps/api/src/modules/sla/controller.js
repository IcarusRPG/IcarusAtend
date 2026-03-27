import { SlaService } from './service.js';

class SlaController {
  constructor(service = new SlaService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { SlaController };
