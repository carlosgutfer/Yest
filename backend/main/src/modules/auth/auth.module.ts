import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { CaslAbilityFactory } from './casl-ability.factory';
import { PermissionsGuard } from './permissions.guard';

@Module({
  imports: [
      PassportModule,
      UsersModule,
      JwtModule.register({
          secret: 'process.env.JWTKEY',
          signOptions: { expiresIn: '48h' },
      }),
  ],
  providers: [
      AuthService,
      LocalStrategy,
      JwtStrategy,
      CaslAbilityFactory,
      PermissionsGuard,
  ],
  controllers: [AuthController],
  exports: [CaslAbilityFactory, PermissionsGuard],

})
export class AuthModule { }