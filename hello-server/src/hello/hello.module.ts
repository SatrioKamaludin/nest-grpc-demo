import { Module, OnModuleInit } from '@nestjs/common';
import { SayHelloHandler } from './queries/handlers/say-hello.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { HelloController } from './hello.controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { GetAllUsersHandler } from './queries/handlers/get-all-users.handler';
import { Repository } from 'typeorm';
import { GetUserByIdHandler } from './queries/handlers/get-user-by-id.handler';
import { DeleteUserHandler } from './commands/handler/delete-user.handler';

export const QueryHandler = [
  SayHelloHandler,
  GetAllUsersHandler,
  GetUserByIdHandler,
];
export const CommandHandler = [DeleteUserHandler];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User])],
  controllers: [HelloController],
  providers: [...QueryHandler, ...CommandHandler],
})
export class HelloModule implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    const count = await this.userRepository.count();
    if (count === 0) {
      await this.userRepository.save([
        { name: 'Alice', isDeleted: false },
        { name: 'Bob', isDeleted: false },
        { name: 'Charlie', isDeleted: false },
      ]);
    }
  }
}
