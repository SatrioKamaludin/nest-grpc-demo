import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodbyeController } from './goodbye/goodbye.controller';
import { GoodbyeService } from './goodbye/goodbye.service';

@Module({
  imports: [],
  controllers: [AppController, GoodbyeController],
  providers: [AppService, GoodbyeService],
})
export class AppModule {}
