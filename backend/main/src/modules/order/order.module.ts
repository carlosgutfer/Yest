import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { orderProviders } from './order.providers';
import { OrderService } from './order.service';

@Module({
  providers: [OrderService, ...orderProviders],
  exports: [OrderService],
})
export class OrderModule {}
