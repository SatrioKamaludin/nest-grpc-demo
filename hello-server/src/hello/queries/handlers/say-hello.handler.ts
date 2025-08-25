import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SayHelloQuery } from '../impl/say-hello.query';
import { HelloReply } from 'src/hello/hello.interface';

@QueryHandler(SayHelloQuery)
export class SayHelloHandler implements IQueryHandler<SayHelloQuery> {
  async execute(query: SayHelloQuery): Promise<HelloReply> {
    const { name } = query;
    return { message: `Hello, ${name}!` };
  }
}
