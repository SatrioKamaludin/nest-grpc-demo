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
        package: 'hello',
        protoPath: join(__dirname, 'hello/hello.proto'),
        url: '0.0.0.0:50051',
      },
    },
  );
  await app.listen();
}
bootstrap();
