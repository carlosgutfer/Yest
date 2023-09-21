import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { restaurantProviders } from './restaurant.providers';
import { RestaurantService } from './restaurant.service';

@Module({
  providers: [RestaurantService, ...restaurantProviders],
  exports: [RestaurantService],
  controllers: [RestaurantController],

})
export class RestaurantModule {}
