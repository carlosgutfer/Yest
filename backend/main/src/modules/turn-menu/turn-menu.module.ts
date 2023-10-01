import { Module } from '@nestjs/common';
import { MenuStockModule } from '../menuStock/menuStock.module';
import { StockModule } from '../stock/stock.module';
import { TurnMenuController } from './turn-menu.controller';
import { TurnMenuProviders } from './turn-menu.providers';
import { TurnMenuService } from './turn-menu.service';



@Module({
  imports:[MenuStockModule, StockModule],
  providers: [TurnMenuService, ...TurnMenuProviders],
  exports: [TurnMenuService],
  controllers: [TurnMenuController],
})
export class TurnMenuModule {}
