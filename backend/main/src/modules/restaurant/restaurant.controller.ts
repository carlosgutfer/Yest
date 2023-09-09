import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RestaurantDto } from './restaurant.dto';
import { Restaurant } from './restaurant.entity';
import { RestaurantService } from './restaurant.service';

@Controller('Restaurant')
export class RestaurantController {
  
  constructor(private readonly Restaurantervice: RestaurantService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  create(@Body() RestaurantDto: RestaurantDto, @Request() req): Promise<Restaurant> 
  {
    
    if (['admin'].includes(req.user.permiss)){
      return this.Restaurantervice.create(RestaurantDto);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('remove')
  remove(@Body('id') id: number, @Request() req)
  {
    if (['admin'].includes(req.user.permiss))
      return this.Restaurantervice.delete(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update')
  update(@Param('id') id: number, @Body() Restaurant: RestaurantDto, @Request() req)
  {
    if (['admin', 'owner'].includes(req.user.permiss))
      return this.Restaurantervice.update(id, Restaurant);
  }

  /*
    This methos is for owner and user_plus
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByClient')
  findAllByClient(@Request() req): Promise<Restaurant[]> {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.Restaurantervice.findAllByClient(req.user.client_id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findOneByNameAndClient')
  findOneByNameAndClient(@Body() name: string, @Request() req): Promise<Restaurant> {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.Restaurantervice.findOneByNameAndClient(name, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByIdandClient')
  findAllByIdAndClient(@Body() id: number, @Request() req): Promise<Restaurant[]> {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.Restaurantervice.findAllByIdAndClient(id, req.user.client_id);
  }


  /*
    This methos is only for the admin user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  findAll(@Request() req): Promise<Restaurant[]> {
    if (req.user.permiss == 'admin')
      return this.Restaurantervice.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllbyName')
  findAllbyType(@Body('name') name: string, @Request() req): Promise<Restaurant[]> {
    if (req.user.permiss == 'admin')
        return this.Restaurantervice.findAllByName(name);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findbyId')
  findbyId(@Body('id') id: number, @Request() req): Promise<Restaurant> {
    if (req.user.permiss == 'admin')
        return this.Restaurantervice.findById(id);
  }

}