import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './user/user.entity';
import { PostEntity } from './post/post.entity';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { CommentEntity } from './comment/comment.entity';
import { LikeModule } from './like/like.module';
import { LikeEntity } from './like/like.entity';
import { BannedModule } from './banned/banned.module';
import { BannedListEntity } from './banned/banned.list.entity';
import { ShareModule } from './share/share.module';
import { ShareEntity } from './share/share.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [
        UserEntity,
        PostEntity,
        CommentEntity,
        LikeEntity,
        BannedListEntity,
        ShareEntity,
      ],
      synchronize: true,
    }),

    AuthModule,
    UserModule,
    PostModule,
    CommentModule,
    LikeModule,
    BannedModule,
    ShareModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
