import { Module } from '@nestjs/common';
import { MenuStockProvides } from './menuStock.providers';
import { MenuStockService } from './menuStock.service';

@Module({
  providers: [MenuStockService, ...MenuStockProvides],
  exports: [MenuStockService],
  controllers: [],
})
export class MenuStockModule {}
