import { Order } from './order.entity';

export const orderProviders = [{
    provide: 'order_REPOSITORY',
    useValue: Order,
}];