import { TemplatesService } from './service.js';

class TemplatesController {
  constructor(service = new TemplatesService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { TemplatesController };
