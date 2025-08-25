import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs';
import { HelloServiceClient } from 'src/hello/hello.interface';

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

  private helloService: HelloServiceClient;

  onModuleInit() {
    this.helloService =
      this.client.getService<HelloServiceClient>('HelloService');
  }

  async greet(name: string) {
    return this.helloService.sayHello({ name });
  }

  async findAllUsers(): Promise<Observable<{ users: any[] }>> {
    return this.helloService.findAllUsers({});
  }

  async findUserById(id: string) {
    return this.helloService.findUserById({ id });
  }

  async deleteUser(id: string) {
    return this.helloService.deleteUser({ id });
  }
}
