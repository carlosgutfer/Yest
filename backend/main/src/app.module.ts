import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { ClientModule } from './modules/client/client.module';
import { SheduleModule } from './modules/schedule/schedule.module';
import { OrderModule } from './modules/order/order.module';
import { OrderStockModule } from './modules/order_stock/order_stock.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { StockModule } from './modules/stock/stock.module';
import { TableModule } from './modules/table/table.module';
import { RestaurantModule } from './modules/restaurant/restaurant.module';

@Module({
    imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      DatabaseModule,
      UsersModule,
      AuthModule,
      ClientModule,
      //SheduleModule,
      //OrderModule,
      //OrderStockModule,
      //ReservationModule,
      //StockModule,
      //TableModule,
      //RestaurantModule
    ],
    controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
