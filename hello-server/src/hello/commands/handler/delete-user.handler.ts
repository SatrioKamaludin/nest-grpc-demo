import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteUserCommand } from '../impl/delete-user.command';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/hello/entities/user.entity';
import { Repository } from 'typeorm';

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(command: DeleteUserCommand): Promise<{ success: boolean }> {
    const user = await this.userRepository.findOne({
      where: { id: command.id, isDeleted: false },
    });
    if (!user) {
      return { success: false };
    }
    user.isDeleted = true;
    await this.userRepository.save(user);
    return { success: true };
  }
}
