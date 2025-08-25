import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'goodbye',
        protoPath: join(__dirname, 'goodbye/goodbye.proto'),
        url: '0.0.0.0:50052',
      },
    },
  );
  await app.listen();
}
bootstrap();
