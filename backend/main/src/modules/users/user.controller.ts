import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

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
  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOneById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: number){
    return this.usersService.delete(id);
  }
}