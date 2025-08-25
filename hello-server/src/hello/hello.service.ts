import { Injectable } from '@nestjs/common';
import { HelloReply, HelloRequest } from './hello.interface';

@Injectable()
export class HelloService {
  sayHello(data: HelloRequest): HelloReply {
    return {
      message: `Hello, ${data.name}!`,
    };
  }
}
