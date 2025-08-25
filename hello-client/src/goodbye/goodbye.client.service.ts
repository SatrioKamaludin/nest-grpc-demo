import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GoodbyeReply, GoodbyeRequest } from './goodbye.interface';

interface GoodbyeServiceGrpc {
  sayGoodbye(data: GoodbyeRequest): Promise<GoodbyeReply>;
}

@Injectable()
export class GoodbyeClientService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'goodbye',
      protoPath: join(process.cwd(), 'src/goodbye/goodbye.proto'),
      url: 'localhost:50052', // server's gRPC URL
    },
  })
  private readonly client: ClientGrpc;

  private goodbyeService: GoodbyeServiceGrpc;

  onModuleInit() {
    this.goodbyeService =
      this.client.getService<GoodbyeServiceGrpc>('GoodbyeService');
  }

  async farewell(name: string) {
    return this.goodbyeService.sayGoodbye({ name });
  }
}
