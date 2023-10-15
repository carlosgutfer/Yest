import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CheckPermissions } from '../auth/permissions.decorator';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { PermissionsGuard } from '../auth/permissions.guard';
import { PermissionAction } from '../auth/casl-ability.factory';

@Controller('users')
export class UsersController {
  
  constructor(private readonly usersService: UsersService) {}

  /*@Post()
  create(@Body() createUserDto: UserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }*/

  /*
  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  */

  @UseGuards(AuthGuard('jwt'))
  @Get('new')
  findOne(@Body('id') id: number): Promise<User> {
    return this.usersService.findOneById(id);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @CheckPermissions([PermissionAction.DELETE, "users"])
  @Delete('delete')
  remove(@Body('id') id: number){
    return this.usersService.delete(id);
  }

}