import { Module } from '@nestjs/common';
import { SayHelloHandler } from './queries/handlers/say-hello.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { HelloController } from './hello.controller';

export const QueryHandler = [SayHelloHandler];

@Module({
  imports: [CqrsModule],
  controllers: [HelloController],
  providers: [...QueryHandler],
})
export class HelloModule {}
