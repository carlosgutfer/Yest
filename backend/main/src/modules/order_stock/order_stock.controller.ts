import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Order_stockDto } from './order_stock.dto';
import { Order_stock } from './order_stock.entity';
import { OrderStockService } from './order_stock.service';

@Controller('Order_stock')
export class Order_stockController {
  
  constructor(private readonly OrderStockService: OrderStockService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  create(@Body() Order_stockDto: Order_stockDto, @Request() req): Promise<Order_stock> 
  {   
    return this.OrderStockService.create(Order_stockDto); 
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('remove')
  remove(@Body('id') id: number, @Request() req)
  {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.OrderStockService.delete(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update')
  update(@Param('id') id: number, @Body() Order: Order_stockDto, @Request() req)
  {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.OrderStockService.update(id, Order);
  }

  /*
    This methos is for owner, user_plus or user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByClient')
  findAllByClient(@Request() req): Promise<Order_stock[]> {
    if (['admin', 'owner', 'user_plus', 'user'].includes(req.user.permiss))
      return this.OrderStockService.findAllByClient(req.user.client_id);
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('findAllbyOrderAndClient')
  findAllByOrderAndClient(@Body() order_id: number, @Request() req): Promise<Order_stock[]> {
    if (req.user.permiss == 'admin')
        return this.OrderStockService.findAllByOrderAndClient(order_id, req.user.client_id);
  }


  /*
    This methos is only for the admin user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  findAll(@Request() req): Promise<Order_stock[]> {
    if (req.user.permiss == 'admin')
      return this.OrderStockService.findAll();
  }
  


  @UseGuards(AuthGuard('jwt'))
  @Get('findbyId')
  findAllbyId(@Body('id') id: number, @Request() req): Promise<Order_stock> {
    if (req.user.permiss == 'admin')
        return this.OrderStockService.findOneById(id);
  }

  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByOrder')
  findAllByOrder(@Body() order_id: number, @Request() req): Promise<Order_stock[]> {
    if (req.user.permiss == 'admin')
        return this.OrderStockService.findAllByOrder(order_id);
  }

}