import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloClientService } from './hello.client.service';
import { firstValueFrom } from 'rxjs';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloClientService: HelloClientService) {}

  @Get()
  async sayHello(@Query('name') name: string) {
    return this.helloClientService.greet(name || 'World');
  }

  @Get('users')
  async getAllUsers() {
    return firstValueFrom(await this.helloClientService.findAllUsers());
  }

  @Get('users/:id')
  async getUserById(@Param('id') id: string) {
    return firstValueFrom(await this.helloClientService.findUserById(id));
  }
}
