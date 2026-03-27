import { RolesService } from './service.js';

class RolesController {
  constructor(service = new RolesService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { RolesController };
