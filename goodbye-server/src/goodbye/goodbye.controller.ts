import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { GoodbyeService } from './goodbye.service';
import { GoodbyeReply, GoodbyeRequest } from './goodbye.interface';

@Controller()
export class GoodbyeController {
  // This controller can be used to handle HTTP requests if needed.
  // For gRPC, the service will handle the requests directly.

  private readonly logger = new Logger(GoodbyeController.name);

  constructor(private readonly goodbyeService: GoodbyeService) {}

  @GrpcMethod('GoodbyeService', 'sayGoodbye')
  sayHello(data: GoodbyeRequest): GoodbyeReply {
    this.logger.log(`Received gRPC request: ${JSON.stringify(data)}`);
    const response = this.goodbyeService.sayGoodbye(data);
    this.logger.log(`Sending gRPC response: ${JSON.stringify(response)}`);
    return response;
  }
}
