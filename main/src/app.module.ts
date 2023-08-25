import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
    imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      DatabaseModule,
      UsersModule,
      AuthModule,
    ],
    controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
