import { Controller, Get, Query } from '@nestjs/common';
import { GoodbyeClientService } from './goodbye.client.service';

@Controller('goodbye')
export class GoodbyeController {
  constructor(private readonly goodbyeClientService: GoodbyeClientService) {}

  @Get()
  async sayGoodbye(@Query('name') name: string) {
    return this.goodbyeClientService.farewell(name || 'World');
  }
}
