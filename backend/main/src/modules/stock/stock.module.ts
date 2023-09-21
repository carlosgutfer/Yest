import { Module } from '@nestjs/common';
import { StockController } from './stock.controller';
import { StockProviders } from './stock.providers';
import { StockService } from './stock.service';

@Module({
  providers: [StockService, ...StockProviders],
  exports: [StockService],
  controllers: [StockController],
})
export class StockModule {}
