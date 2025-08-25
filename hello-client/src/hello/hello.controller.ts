import { Controller, Get, Query } from '@nestjs/common';
import { HelloClientService } from './hello.client.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloClientService: HelloClientService) {}

  @Get()
  async sayHello(@Query('name') name: string) {
    return this.helloClientService.greet(name || 'World');
  }
}
