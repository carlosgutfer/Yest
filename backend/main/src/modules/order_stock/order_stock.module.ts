import { Module } from '@nestjs/common';
import { Order_stockController } from './order_stock.controller';
import { Order_stockProviders } from './order_stock.providers';
import { OrderStockService } from './order_stock.service';

@Module({
  providers: [OrderStockService, ...Order_stockProviders],
  exports: [OrderStockService],
  controllers: [Order_stockController],

})
export class OrderStockModule {}
