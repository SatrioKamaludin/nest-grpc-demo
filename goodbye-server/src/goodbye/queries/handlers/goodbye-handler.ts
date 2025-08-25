import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SayGoodbyeQuery } from '../impl/goodbye-query';

@QueryHandler(SayGoodbyeQuery)
export class SayGoodbyeHandler implements IQueryHandler<SayGoodbyeQuery> {
  async execute(query: SayGoodbyeQuery): Promise<{ message: string }> {
    const { name } = query;
    return { message: `Goodbye, ${name}!` };
  }
}
