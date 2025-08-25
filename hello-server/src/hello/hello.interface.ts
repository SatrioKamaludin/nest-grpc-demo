import { UserDto } from './dto/user.dto';

export interface HelloRequest {
  name: string;
}

export interface HelloReply {
  message: string;
}

export interface HelloService {
  sayHello(data: { name: string }): { message: string };

  // New function
  findAllUsers(data: object): { users: UserDto[] };
}
