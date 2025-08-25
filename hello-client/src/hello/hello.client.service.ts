import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HelloReply, HelloRequest } from 'src/hello/hello.interface';

interface HelloServiceGrpc {
  sayHello(data: HelloRequest): Promise<HelloReply>;
}

@Injectable()
export class HelloClientService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'hello',
      protoPath: join(process.cwd(), 'src/hello/hello.proto'),
      url: 'localhost:50051', // server's gRPC URL
    },
  })
  private readonly client: ClientGrpc;

  private helloService: HelloServiceGrpc;

  onModuleInit() {
    this.helloService =
      this.client.getService<HelloServiceGrpc>('HelloService');
  }

  async greet(name: string) {
    return this.helloService.sayHello({ name });
  }
}
