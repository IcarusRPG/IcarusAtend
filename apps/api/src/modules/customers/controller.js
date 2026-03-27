import { CustomersService } from './service.js';

class CustomersController {
  constructor(service = new CustomersService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { CustomersController };
