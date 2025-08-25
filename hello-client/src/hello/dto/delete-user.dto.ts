import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserDto {
  @ApiProperty({ example: 'a12f3e45-6789-4bcd-ef01-234567890abc' })
  id: string;
}
