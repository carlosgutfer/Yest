import { Module } from '@nestjs/common';
import { StockProviders } from './stock.providers';
import { StockService } from './stock.service';

@Module({
  providers: [StockService, ...StockProviders],
  exports: [StockService]
})
export class StockModule {}
