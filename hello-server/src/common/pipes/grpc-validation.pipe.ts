import { status } from '@grpc/grpc-js';
import { Injectable, ValidationError, ValidationPipe } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class GrpcValidationPipe extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      forbidUnknownValues: true,
      transform: true,
    });
  }

  protected flattenValidationErrors(
    validationErrors: ValidationError[],
  ): string[] {
    return validationErrors
      .map((error) => Object.values(error.constraints ?? {}))
      .flat();
  }

  public createExceptionFactory() {
    return (validationErrors = []) => {
      const message = this.flattenValidationErrors(validationErrors);
      return new RpcException({
        code: status.INVALID_ARGUMENT,
        message: message.join(', ') || 'Invalid request payload',
      });
    };
  }
}
