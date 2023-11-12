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
  @Delete('remove/:id')
  remove(@Param('id') id: number, @Request() req)
  {
    if (['admin'].includes(req.user.permiss))
      return this.Restaurantervice.delete(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update/:id')
  update(@Param('id') id: number, @Body() Restaurant: RestaurantDto, @Request() req)
  {
    
      return this.Restaurantervice.update(id, Restaurant);
  }

  /*
    This methos is for owner and user_plus
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByClient')
  findAllByClient(@Request() req): Promise<Restaurant[]> {
    
      return this.Restaurantervice.findAllByClient(req.user.client_id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findOneByNameAndClient/:name')
  findOneByNameAndClient(@Param('name') name: string, @Request() req): Promise<Restaurant> {
    
      return this.Restaurantervice.findOneByNameAndClient(name, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByIdandClient/:id')
  findAllByIdAndClient(@Param('id') id: number, @Request() req): Promise<Restaurant[]> {
    
      return this.Restaurantervice.findAllByIdAndClient(id, req.user.client_id);
  }


  /*
    This methos is only for the admin user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  findAll(): Promise<Restaurant[]> {
      return this.Restaurantervice.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllbyName/:name')
  findAllbyType(@Param('name') name: string): Promise<Restaurant[]> {
        return this.Restaurantervice.findAllByName(name);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findbyId/:id')
  findbyId(@Param('id') id: number): Promise<Restaurant> {
        return this.Restaurantervice.findById(id);
  }

}