import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: UserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  //@Get()
  //findAll(): Promise<User[]> {
  //  return this.usersService.findAll();
  //}

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOneById(id);
  }

  //@Delete(':id')
  //remove(@Param('id') id: string): Promise<void> {
  //  return this.usersService.remove(id);
  //}
}