import { AuditService } from './service.js';

class AuditController {
  constructor(service = new AuditService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { AuditController };
