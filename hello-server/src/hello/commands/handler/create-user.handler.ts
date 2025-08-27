import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl/create-user.command';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/hello/entities/user.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async execute(command: CreateUserCommand): Promise<User> {
    const { name } = command;

    const user = this.userRepository.create({
      id: uuidv4(),
      name,
      isDeleted: false,
    });

    return this.userRepository.save(user);
  }
}
