// src/hello/queries/handlers/get-all-users.handler.ts
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUserByIdQuery } from '../impl/get-user-by-id.query';
import { RpcException } from '@nestjs/microservices';

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(_query: GetUserByIdQuery): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { id: _query.id, isDeleted: false },
    });
    if (!user) {
      throw new RpcException({ code: 5, message: 'User Not Found' });
    }
    return user;
  }
}
