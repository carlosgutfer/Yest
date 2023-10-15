import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ReservationDto } from './reservation.dto';
import { Reservation } from './reservation.entity';
import { ReservationService } from './reservation.service';

@Controller('Reservations')
export class ReservationController {
  
  constructor(private readonly ReservationService: ReservationService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  create(@Body() ReservationDto: ReservationDto, @Request() req): Promise<Reservation> 
  {   
    return this.ReservationService.create(ReservationDto); 
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('remove')
  remove(@Body('id') id: number, @Request() req)
  {
    
      return this.ReservationService.delete(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update')
  update(@Param('id') id: number, @Body() Reservation: ReservationDto, @Request() req)
  {
    
      return this.ReservationService.update(id, Reservation);
  }

  /*
    This methos is for owner, user_plus or user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByClient')
  findAllByClient(@Request() req): Promise<Reservation[]> {
    if (['admin', 'owner', 'user_plus', 'user'].includes(req.user.permiss))
      return this.ReservationService.findAllByClient(req.user.client_id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllBTableAndClient')
  findAllByTableAndClient(@Body() id: number, @Request() req): Promise<Reservation[]> {
    if (['admin', 'owner', 'user_plus', 'user'].includes(req.user.permiss))
      return this.ReservationService.findAllByTableAndClient(id, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByTableAndClient')
  findAllByUserAndClient(@Body() user_id: number, @Request() req): Promise<Reservation[]> {
    if (['admin', 'owner', 'user_plus', 'user'].includes(req.user.permiss))
      return this.ReservationService.findAllByUserAndClient(user_id, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByDateAndClient')
  findAllByDateAndClient(@Body() date : Date, table_id : number , @Request() req): Promise<Reservation[]> {
    
      return this.ReservationService.findAllByDateAndClient(date, req.user.client_id);
  }


  /*
    This methos is only for the admin user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  findAll(@Request() req): Promise<Reservation[]> {
  
      return this.ReservationService.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllbyName')
  findAllbyDate(@Body('date') date: Date, @Request() req): Promise<Reservation[]> {
  
        return this.ReservationService.findAllByDate(date);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findbyId')
  findAllbyId(@Body('id') id: number, @Request() req): Promise<Reservation> {
  
        return this.ReservationService.findOneById(id);
  }

}