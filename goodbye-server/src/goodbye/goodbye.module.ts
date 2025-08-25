import { CqrsModule } from '@nestjs/cqrs';
import { GoodbyeController } from './goodbye.controller';
import { SayGoodbyeHandler } from './queries/handlers/goodbye-handler';
import { Module } from '@nestjs/common';

export const QueryHandler = [SayGoodbyeHandler];

@Module({
  imports: [CqrsModule],
  controllers: [GoodbyeController],
  providers: [...QueryHandler],
})
export class GoodbyeModule {}
