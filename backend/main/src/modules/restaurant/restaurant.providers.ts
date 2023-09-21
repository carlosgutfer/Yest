import { Restaurant } from './restaurant.entity';

export const restaurantProviders = [{
    provide: 'RESTAURANT_REPOSITORY',
    useValue: Restaurant,
}];