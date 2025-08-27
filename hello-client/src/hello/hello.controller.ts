import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { HelloClientService } from './hello.client.service';
import { firstValueFrom } from 'rxjs';
import {
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteUserDto } from './dto/delete-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

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
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiResponse({ status: 200, description: 'User found successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getUserById(@Param('id') id: string) {
    return this.helloClientService.findUserById(id);
  }

  @Delete('users/:id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiQuery({ name: 'id', type: String, description: 'UUID of the user' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async deleteUser(@Query() query: DeleteUserDto) {
    return this.helloClientService.deleteUser(query.id);
  }

  @Put('users/:id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiQuery({ name: 'id', type: String, description: 'UUID of the user' })
  @ApiResponse({ status: 200, description: 'User updated successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async updateUser(@Query('id') id: string, @Body() body: UpdateUserDto) {
    return this.helloClientService.updateUser(id, body.name);
  }

  @Post('users')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid request' })
  async createUser(@Body() dto: CreateUserDto) {
    return this.helloClientService.createUser(dto.name);
  }
}
