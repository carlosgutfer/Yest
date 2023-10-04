import { Controller, Body, Post, UseGuards, Request, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../users/user.dto';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';
import { CheckPermissions } from './permissions.decorator';
import { PermissionAction } from './casl-ability.factory';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }

    @UseGuards(DoesUserExist)
    @Post('signup')
    @CheckPermissions([PermissionAction.CREATE, "users"])
    async signUp(@Body() user: UserDto) {
        return await this.authService.create(user);
    }
}

