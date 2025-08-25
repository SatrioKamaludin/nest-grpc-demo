import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { HelloClientService } from './hello/hello.client.service';
import { GoodbyeController } from './goodbye/goodbye.controller';
import { GoodbyeClientService } from './goodbye/goodbye.client.service';

@Module({
  imports: [],
  controllers: [AppController, HelloController, GoodbyeController],
  providers: [AppService, HelloClientService, GoodbyeClientService],
})
export class AppModule {}
