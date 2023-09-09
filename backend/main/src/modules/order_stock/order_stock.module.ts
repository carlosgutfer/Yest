import { Module } from '@nestjs/common';
import { Order_stockProviders } from './order_stock.providers';
import { OrderStockService } from './order_stock.service';

@Module({
  providers: [OrderStockService, ...Order_stockProviders],
  exports: [OrderStockService]
})
export class OrderStockModule {}
