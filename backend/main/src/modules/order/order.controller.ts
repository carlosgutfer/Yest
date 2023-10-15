import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrderDto } from './order.dto';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('Orders')
export class OrderController {
  
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  create(@Body() OrderDto: OrderDto, @Request() req): Promise<Order> 
  {   
    return this.orderService.create(OrderDto); 
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('remove')
  remove(@Body('id') id: number, @Request() req)
  {
    
      return this.orderService.delete(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update')
  update(@Param('id') id: number, @Body() Order: OrderDto, @Request() req)
  {
    
      return this.orderService.update(id, Order);
  }

  /*
    This methos is for owner, user_plus or user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByClient')
  findAllByClient(@Request() req): Promise<Order[]> {
    if (['admin', 'owner', 'user_plus', 'user'].includes(req.user.permiss))
      return this.orderService.findAllByClient(req.user.client_id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findOneByTableAndClient')
  findOneByIdClient(@Body() id: number, @Request() req): Promise<Order> {
    if (['admin', 'owner', 'user_plus', 'user'].includes(req.user.permiss))
      return this.orderService.findOneByTableAndClient(id, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByTableAndClient')
  findAllByUserAndClient(@Body() user_id: number, @Request() req): Promise<Order[]> {
    if (['admin', 'owner', 'user_plus', 'user'].includes(req.user.permiss))
      return this.orderService.findAllByUserAndClient(user_id, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findOneByDateAndClient')
  findOneByDateAndTable(@Body() date : Date, table_id : number , @Request() req): Promise<Order> {
    
      return this.orderService.findOneByDateAndTable(date, table_id , req.user.client_id);
  }


  /*
    This methos is only for the admin user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  findAll(@Request() req): Promise<Order[]> {
  
      return this.orderService.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllbyName')
  findAllbyDate(@Body('date') date: Date, @Request() req): Promise<Order[]> {
  
        return this.orderService.findAllByDate(date);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findbyId')
  findAllbyId(@Body('id') id: number, @Request() req): Promise<Order> {
  
        return this.orderService.findOneById(id);
  }

}