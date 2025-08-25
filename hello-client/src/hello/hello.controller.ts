import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloClientService } from './hello.client.service';
import { firstValueFrom } from 'rxjs';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { DeleteUserDto } from './dto/delete-user.dto';

@ApiTags('hello')
@Controller('hello')
export class HelloController {
  constructor(private readonly helloClientService: HelloClientService) {}

  @Get()
  @ApiQuery({ name: 'name', required: false, example: 'Alice' })
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

  @Get('users/delete/:id')
  async deleteUser(@Query() query: DeleteUserDto) {
    return firstValueFrom(await this.helloClientService.deleteUser(query.id));
  }
}
