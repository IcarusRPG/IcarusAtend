import { AuthService } from './service.js';

class AuthController {
  constructor(service = new AuthService()) {
    this.service = service;
  }

  status() {
    return this.service.getStatus();
  }
}

export { AuthController };
