import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty()
  readonly body: string;

  @ApiProperty()
  readonly postId: number;
}
