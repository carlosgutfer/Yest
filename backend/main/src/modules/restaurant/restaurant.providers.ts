import { Restaurant } from './restaurant.entity';

export const restaurantProviders = [{
    provide: 'Restaurant_REPOSITORY',
    useValue: Restaurant,
}];