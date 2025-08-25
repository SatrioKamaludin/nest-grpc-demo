import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HelloReply, HelloRequest } from './hello.interface';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SayHelloQuery } from './queries/impl/say-hello.query';
import { UserDto } from './dto/user.dto';
import { GetAllUsersQuery } from './queries/impl/get-all-users.query';
import { GetUserByIdQuery } from './queries/impl/get-user-by-id.query';
import { DeleteUserCommand } from './commands/impl/delete-user.command';

@Controller()
export class HelloController {
  // This controller can be used to handle HTTP requests if needed.
  // For gRPC, the service will handle the requests directly.

  private readonly logger = new Logger(HelloController.name);

  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @GrpcMethod('HelloService', 'sayHello')
  async sayHello(data: HelloRequest): Promise<HelloReply> {
    this.logger.log(`Received gRPC request: ${JSON.stringify(data)}`);
    const response = await this.queryBus.execute(new SayHelloQuery(data.name));
    this.logger.log(`Sending gRPC response: ${JSON.stringify(response)}`);
    return response;
  }

  @GrpcMethod('HelloService', 'FindAllUsers')
  async findAllUsers(): Promise<{ users: UserDto[] }> {
    this.logger.log(`Received gRPC request: FindAllUsers`);
    const users = await this.queryBus.execute(new GetAllUsersQuery());
    this.logger.log(`Sending gRPC response: ${JSON.stringify(users)}`);
    return { users };
  }

  @GrpcMethod('HelloService', 'FindUserById')
  async findUserById(data: { id: string }): Promise<UserDto> {
    this.logger.log(`Received gRPC request: FindUserById with id ${data.id}`);
    const user = await this.queryBus.execute(new GetUserByIdQuery(data.id));
    this.logger.log(`Sending gRPC response: ${JSON.stringify(user)}`);
    return user;
  }

  @GrpcMethod('HelloService', 'DeleteUser')
  async deleteUser(data: { id: string }): Promise<{ success: boolean }> {
    return this.commandBus.execute(new DeleteUserCommand(data.id));
  }
}
