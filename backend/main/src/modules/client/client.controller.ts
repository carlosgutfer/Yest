import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClientDto } from './client.dto';
import { Client } from './client.entity';
import { ClientService } from './client.service';

@Controller('clients')
export class ClientController {
  
  constructor(private readonly clientService: ClientService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new_client')
  create(@Body() createUserDto: ClientDto, @Request() req): Promise<Client> 
  {
    if (req.user.permiss == 'admin')
      return this.clientService.create(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all_clients')
  findAll(@Request() req): Promise<Client[]> {
    if (req.user.permiss == 'admin')
      return this.clientService.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get(':CIF')
  findOne(@Param('CIF') cif: string): Promise<Client> {
    return this.clientService.findOneByCIF(cif);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: number, @Request() req)
  {
    if (req.user.permiss == 'admin')
      return this.clientService.delete(id);
  }
}