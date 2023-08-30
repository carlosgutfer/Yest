import { Module } from '@nestjs/common';
import { OrderStockService } from './order_stock.service';

@Module({
  providers: [OrderStockService]
})
export class OrderStockModule {}
