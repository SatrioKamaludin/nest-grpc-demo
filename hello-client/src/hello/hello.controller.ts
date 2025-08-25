import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { HelloClientService } from './hello.client.service';
import { firstValueFrom } from 'rxjs';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteUserDto } from './dto/delete-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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

  @Delete('users/delete/:id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiQuery({ name: 'id', type: String, description: 'UUID of the user' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async deleteUser(@Query() query: DeleteUserDto) {
    return this.helloClientService.deleteUser(query.id);
  }

  @Put('update')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiQuery({ name: 'id', type: String, description: 'UUID of the user' })
  @ApiResponse({ status: 200, description: 'User updated successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async updateUser(@Query('id') id: string, @Body() body: UpdateUserDto) {
    return this.helloClientService.updateUser(id, body.name);
  }
}
