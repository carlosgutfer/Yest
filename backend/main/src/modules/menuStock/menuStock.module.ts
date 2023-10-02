import { Module } from '@nestjs/common';
import { MenuStockProvides } from './menuStock.providers';
import { MenuStockService } from './menuStock.service';
import { StockModule } from '../stock/stock.module';

@Module({
  imports: [StockModule],
  providers: [MenuStockService, ...MenuStockProvides],
  exports: [MenuStockService],
  controllers: [],
})
export class MenuStockModule {}
