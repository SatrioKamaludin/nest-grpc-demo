import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { GoodbyeReply, GoodbyeRequest } from './goodbye.interface';
import { QueryBus } from '@nestjs/cqrs';
import { SayGoodbyeQuery } from './queries/impl/goodbye-query';

@Controller()
export class GoodbyeController {
  // This controller can be used to handle HTTP requests if needed.
  // For gRPC, the service will handle the requests directly.

  private readonly logger = new Logger(GoodbyeController.name);

  constructor(private readonly queryBus: QueryBus) {}

  @GrpcMethod('GoodbyeService', 'sayGoodbye')
  async sayHello(data: GoodbyeRequest): Promise<GoodbyeReply> {
    this.logger.log(`Received gRPC request: ${JSON.stringify(data)}`);
    const response = await this.queryBus.execute(
      new SayGoodbyeQuery(data.name),
    );
    this.logger.log(`Sending gRPC response: ${JSON.stringify(response)}`);
    return response;
  }
}
