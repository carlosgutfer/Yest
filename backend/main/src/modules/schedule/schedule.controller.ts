import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ScheduleDto } from './schedule.dto';
import { Schedule } from './schedule.entity';
import { ScheduleServices } from './schedule.service';

@Controller('Schedules')
export class ScheduleController {
  
  constructor(private readonly ScheduleService: ScheduleServices) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  create(@Body() ScheduleDto: ScheduleDto, @Request() req): Promise<Schedule> 
  {
    
    {
      ScheduleDto.client_id = req.user.client_id;
      ScheduleDto.user_id_admin = req.user.id;
      return this.ScheduleService.create(ScheduleDto);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('remove')
  remove(@Body('id') id: number, @Request() req)
  {
    
      return this.ScheduleService.delete(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update')
  update(@Param('id') id: number, @Body() schedule: ScheduleDto, @Request() req)
  {
    
      return this.ScheduleService.update(id, schedule);
  }

  /*
    This methos is for owner and user_plus
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByClient')
  findAllByClient(@Request() req): Promise<Schedule[]> {
    
      return this.ScheduleService.findAllByClient(req.user.client_id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByTypeAndClient')
  findAllbyTypeAndClient(@Body() type: string, @Request() req): Promise<Schedule[]> {
    
      return this.ScheduleService.findAllByTypeAndClient(type, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByIdAndClient')
  findAllByIdAndClient(@Body() id: number, @Request() req): Promise<Schedule[]> {
    
      return this.ScheduleService.findAllByIdAndClient(id, req.user.client_id);
    
      return this.ScheduleService.findAllByIdAndClient(req.user.id, req.user.client_id);
  }


  /*
    This methos is only for the admin user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  findAll(@Request() req): Promise<Schedule[]> {
  
      return this.ScheduleService.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllbyType')
  findAllbyType(@Body('TYPE') type: string, @Request() req): Promise<Schedule[]> {
  
        return this.ScheduleService.findAllByType(type);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findbyId')
  findAllbyId(@Body('id') id: number, @Request() req): Promise<Schedule> {
  
        return this.ScheduleService.findById(id);
  }

}