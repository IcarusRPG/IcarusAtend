import { UsersService } from './service.js';

class UsersController {
  constructor(service = new UsersService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { UsersController };
