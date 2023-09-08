import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrderDto } from './Order.dto';
import { Order } from './Order.entity';
import { OrderService } from './Order.service';

@Controller('Orders')
export class OrderController {
  
  constructor(private readonly OrderService: OrderService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  create(@Body() OrderDto: OrderDto, @Request() req): Promise<Order> 
  {   
    return this.OrderService.create(OrderDto); 
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('remove')
  remove(@Body('id') id: number, @Request() req)
  {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.OrderService.delete(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update')
  update(@Param('id') id: number, @Body() Order: OrderDto, @Request() req)
  {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.OrderService.update(id, Order);
  }

  /*
    This methos is for owner, user_plus or user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByClient')
  findAllByClient(@Request() req): Promise<Order[]> {
    if (['admin', 'owner', 'user_plus', 'user'].includes(req.user.permiss))
      return this.OrderService.findAllByClient(req.user.client_id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findOneByTableAndClient')
  findOneByIdClient(@Body() id: number, @Request() req): Promise<Order> {
    if (['admin', 'owner', 'user_plus', 'user'].includes(req.user.permiss))
      return this.OrderService.findOneByTableAndClient(id, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByTableAndClient')
  findAllByUserAndClient(@Body() user_id: number, @Request() req): Promise<Order[]> {
    if (['admin', 'owner', 'user_plus', 'user'].includes(req.user.permiss))
      return this.OrderService.findAllByUserAndClient(user_id, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findOneByDateAndClient')
  findOneByDateAndTable(@Body() date : Date, table_id : number , @Request() req): Promise<Order> {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.OrderService.findOneByDateAndTable(date, table_id , req.user.client_id);
  }


  /*
    This methos is only for the admin user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  findAll(@Request() req): Promise<Order[]> {
    if (req.user.permiss == 'admin')
      return this.OrderService.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllbyName')
  findAllbyDate(@Body('date') date: Date, @Request() req): Promise<Order[]> {
    if (req.user.permiss == 'admin')
        return this.OrderService.findAllByDate(date);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findbyId')
  findAllbyId(@Body('id') id: number, @Request() req): Promise<Order> {
    if (req.user.permiss == 'admin')
        return this.OrderService.findOneById(id);
  }

}