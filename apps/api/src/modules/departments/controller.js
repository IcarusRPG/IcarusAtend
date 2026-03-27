import { DepartmentsService } from './service.js';

class DepartmentsController {
  constructor(service = new DepartmentsService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { DepartmentsController };
