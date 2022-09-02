import { Controller, Get } from '@nestjs/common';

import { User } from '@code-or-die/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(): User[] {
    return this.appService.getUsers();
  }
}
