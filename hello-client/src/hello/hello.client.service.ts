import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { firstValueFrom, Observable } from 'rxjs';
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
    try {
      return await firstValueFrom(this.helloService.findUserById({ id }));
    } catch (error: any) {
      this.handleGrpcError(error);
    }
  }

  async deleteUser(id: string) {
    try {
      return await firstValueFrom(this.helloService.deleteUser({ id }));
    } catch (error: any) {
      this.handleGrpcError(error);
    }
  }

  async updateUser(id: string, name: string) {
    try {
      return await firstValueFrom(this.helloService.updateUser({ id, name }));
    } catch (error: any) {
      this.handleGrpcError(error);
    }
  }

  private handleGrpcError(error: any) {
    if (error?.code === 5) {
      throw new NotFoundException(error.details);
    }
    throw new InternalServerErrorException(
      error.details || 'Internal Server Error',
    );
  }
}
