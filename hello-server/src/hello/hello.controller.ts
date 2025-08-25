import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HelloReply, HelloRequest } from './hello.interface';
import { HelloService } from './hello.service';

@Controller()
export class HelloController {
  // This controller can be used to handle HTTP requests if needed.
  // For gRPC, the service will handle the requests directly.

  private readonly logger = new Logger(HelloController.name);

  constructor(private readonly helloService: HelloService) {}

  @GrpcMethod('HelloService', 'sayHello')
  sayHello(data: HelloRequest): HelloReply {
    this.logger.log(`Received gRPC request: ${JSON.stringify(data)}`);
    const response = this.helloService.sayHello(data);
    this.logger.log(`Sending gRPC response: ${JSON.stringify(response)}`);
    return response;
  }
}
