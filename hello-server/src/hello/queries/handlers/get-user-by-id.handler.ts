// src/hello/queries/handlers/get-all-users.handler.ts
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUserByIdQuery } from '../impl/get-user-by-id.query';

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(_query: GetUserByIdQuery): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id: _query.id, isDeleted: false },
    });
  }
}
