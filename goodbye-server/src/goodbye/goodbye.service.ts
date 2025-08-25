import { Injectable } from '@nestjs/common';
import { GoodbyeReply, GoodbyeRequest } from './goodbye.interface';

@Injectable()
export class GoodbyeService {
  sayGoodbye(data: GoodbyeRequest): GoodbyeReply {
    return {
      message: `Goodbye, ${data.name}!`,
    };
  }
}
