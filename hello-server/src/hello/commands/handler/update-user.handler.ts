import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from '../impl/update-user.command';
import { User } from 'src/hello/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RpcException } from '@nestjs/microservices';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(command: UpdateUserCommand): Promise<User> {
    console.log('UpdateUserCommand executed', command);

    // Implement the logic to update a user here
    const { id, name } = command;
    console.log('Looking for user with:', { id, isDeleted: false });
    const user = await this.userRepository.findOne({
      where: { id, isDeleted: false },
    });
    if (!user) {
      throw new RpcException({ code: 5, message: 'User Not Found' });
    }

    console.log('User found, updating:', user);

    user.name = name;
    await this.userRepository.save(user);

    return user;
  }
}
