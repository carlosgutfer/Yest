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
  
      return this.clientService.create(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all_clients')
  findAll(@Request() req): Promise<Client[]> {
      return this.clientService.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findbyCIF')
  findOne(@Body('CIF') CIF: string): Promise<Client> {
    return this.clientService.findOneByCIF(CIF);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('remove_client')
  remove(@Body('id') id: number, @Request() req)
  {
  
      return this.clientService.delete(id);
  }
}