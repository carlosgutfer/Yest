import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StockDto } from './stock.dto';
import { Stock } from './stock.entity';
import { StockService } from './stock.service';

@Controller('Stocks')
export class StockController {
  
  constructor(private readonly stockService: StockService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  create(@Body() StockDto: StockDto): Promise<Stock> 
  {
      return this.stockService.create(StockDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('remove/:id')
  remove(@Param('id') id: number, @Request() req)
  {
      return this.stockService.delete(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('update/:id')
  update(@Param('id') id: number, @Body() Stock: StockDto)
  { 
      return this.stockService.update(id, Stock);
  }

  /*
    This methos is for owner and user_plus
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByClient')
  findAllByClient(@Request() req): Promise<Stock[]> {
      return this.stockService.findAllByClient(req.user.client_id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByIdAndClient:id')
  findAllByIdAndClient(@Param('id') id: number, @Request() req): Promise<Stock[]> {
      return this.stockService.findAllByIdAndClient(id, req.user.client_id);    
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findOneByNameAndClient/:name')
  findOneByNameAndClient(@Param('name') name: string, @Request() req): Promise<Stock> {
    
      return this.stockService.findOneByNameAndClient(name, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findOneByRefAndClient/:ref_code')
  findOneByRefAndClient(@Param('ref_code') ref_code: string, @Request() req): Promise<Stock> {
    
      return this.stockService.findOneByRefAndClient(ref_code, req.user.client_id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAllByRefAndClient/:ref_code')
  findAllByRefAndClient(@Param('ref_code') ref_code: string, @Request() req): Promise<Stock[]> {
    
      return this.stockService.findAllByRefAndClient(ref_code, req.user.client_id);
  }

  /*
    This methos is only for the admin user
  
  */
  @UseGuards(AuthGuard('jwt'))
  @Get('findAll')
  findAll(): Promise<Stock[]> {
  
      return this.stockService.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('findAllbyName/:name')
  findAllbyName(@Param('name') name: string): Promise<Stock[]> {
  
        return this.stockService.findAllByName(name);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findbyId/:id')
  findbyId(@Param('id') id: number, @Request() req): Promise<Stock> {
  
        return this.stockService.findById(id);
  }

}