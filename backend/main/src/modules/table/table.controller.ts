import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Restaurant_TableDto } from './table.dto';
import { Restaurant_Table } from './table.entity';
import { TableService } from './table.service';

@Controller('Restaurant_Tables')
export class Restaurant_TableController {
  
  constructor(private readonly TableService: TableService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  create(@Body() Restaurant_TableDto: Restaurant_Table, @Request() req): Promise<Restaurant_Table> 
  {   
    return this.TableService.create(Restaurant_TableDto); 
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('remove')
  remove(@Body('id') id: number, @Request() req)
  {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.TableService.delete(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update')
  update(@Param('id') id: number, @Body() Restaurant_Table: Restaurant_TableDto, @Request() req)
  {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.TableService.update(id, Restaurant_Table);
  }

  /*
    This methos is for owner, user_plus or user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByClient')
  findAllByClient(@Request() req): Promise<Restaurant_Table[]> {
    if (['admin', 'owner', 'user_plus', 'user'].includes(req.user.permiss))
      return this.TableService.findAllByClient(req.user.client_id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByTableAndClient')
  findAllByUserAndClient(@Body() restaurant_id: number, @Request() req): Promise<Restaurant_Table[]> {
    if (['admin', 'owner', 'user_plus', 'user'].includes(req.user.permiss))
      return this.TableService.findAllByRestaurantAndClient(restaurant_id, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findOneByRestaurantAndClient')
  findOneByRestaurantAndClient(@Body() number_table : number, restaurant_id : number , @Request() req): Promise<Restaurant_Table> {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.TableService.findOneByRestaurantAndClient(number_table, restaurant_id , req.user.client_id);
  }


  /*
    This methos is only for the admin user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  findAll(@Request() req): Promise<Restaurant_Table[]> {
    if (req.user.permiss == 'admin')
      return this.TableService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findbyId')
  findAllbyId(@Body('id') id: number, @Request() req): Promise<Restaurant_Table> {
    if (req.user.permiss == 'admin')
        return this.TableService.findOneById(id);
  }

}