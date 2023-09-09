import { Order_stock } from './order_stock.entity';

export const Order_stockProviders = [{
    provide: 'Order_stock_REPOSITORY',
    useValue: Order_stock,
}];