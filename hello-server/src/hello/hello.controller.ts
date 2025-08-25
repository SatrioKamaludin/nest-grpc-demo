import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HelloReply, HelloRequest } from './hello.interface';
import { QueryBus } from '@nestjs/cqrs';
import { SayHelloQuery } from './queries/impl/say-hello.query';

@Controller()
export class HelloController {
  // This controller can be used to handle HTTP requests if needed.
  // For gRPC, the service will handle the requests directly.

  private readonly logger = new Logger(HelloController.name);

  constructor(private readonly queryBus: QueryBus) {}

  @GrpcMethod('HelloService', 'sayHello')
  async sayHello(data: HelloRequest): Promise<HelloReply> {
    this.logger.log(`Received gRPC request: ${JSON.stringify(data)}`);
    const response = await this.queryBus.execute(new SayHelloQuery(data.name));
    this.logger.log(`Sending gRPC response: ${JSON.stringify(response)}`);
    return response;
  }
}
