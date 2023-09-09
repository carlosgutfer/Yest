import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StockDto } from './stock.dto';
import { Stock } from './stock.entity';
import { StockService } from './stock.service';

@Controller('Stocks')
export class StockController {
  
  constructor(private readonly StockService: StockService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  create(@Body() StockDto: StockDto, @Request() req): Promise<Stock> 
  {
    
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss)){
      return this.StockService.create(StockDto);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('remove')
  remove(@Body('id') id: number, @Request() req)
  {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.StockService.delete(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update')
  update(@Param('id') id: number, @Body() Stock: StockDto, @Request() req)
  {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.StockService.update(id, Stock);
  }

  /*
    This methos is for owner and user_plus
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByClient')
  findAllByClient(@Request() req): Promise<Stock[]> {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.StockService.findAllByClient(req.user.client_id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByIdAndClient')
  findAllByIdAndClient(@Body() id: number, @Request() req): Promise<Stock[]> {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.StockService.findAllByIdAndClient(id, req.user.client_id);
    else if (req.user.permiss == 'user')
      return this.StockService.findAllByIdAndClient(req.user.id, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findOneByNameAndClient')
  findOneByNameAndClient(@Body() name: string, @Request() req): Promise<Stock> {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.StockService.findOneByNameAndClient(name, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findOneByRefAndClient')
  findOneByRefAndClient(@Body() ref_code: string, @Request() req): Promise<Stock> {
    if (['admin', 'owner', 'user_plus'].includes(req.user.permiss))
      return this.StockService.findOneByRefAndClient(ref_code, req.user.client_id);
  }

  /*
    This methos is only for the admin user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  findAll(@Request() req): Promise<Stock[]> {
    if (req.user.permiss == 'admin')
      return this.StockService.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllbyName')
  findAllbyType(@Body('name') name: string, @Request() req): Promise<Stock[]> {
    if (req.user.permiss == 'admin')
        return this.StockService.findAllByName(name);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findbyId')
  findbyId(@Body('id') id: number, @Request() req): Promise<Stock> {
    if (req.user.permiss == 'admin')
        return this.StockService.findById(id);
  }

}