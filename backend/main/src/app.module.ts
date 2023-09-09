import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { ClientModule } from './modules/client/client.module';
import { SheduleModule } from './modules/schedule/schedule.module';

@Module({
    imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      DatabaseModule,
      UsersModule,
      AuthModule,
      ClientModule,
      SheduleModule,
      
    ],
    controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
