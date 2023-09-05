import { Module } from '@nestjs/common';
import { restaurantProviders } from './restaurant.providers';
import { RestaurantService } from './restaurant.service';

@Module({
  providers: [RestaurantService, ...restaurantProviders],
  exports: [RestaurantService]
})
export class RestaurantModule {}
