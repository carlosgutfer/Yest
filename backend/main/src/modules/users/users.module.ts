import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { UsersController } from './user.controller';
import { CaslAbilityFactory } from '../auth/casl-ability.factory';
@Module({
    providers: [UsersService, ...usersProviders,  CaslAbilityFactory,],
    exports: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}