import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodbyeModule } from './goodbye/goodbye.module';

@Module({
  imports: [GoodbyeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
