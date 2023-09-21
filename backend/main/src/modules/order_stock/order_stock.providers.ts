import { Order_stock } from './order_stock.entity';

export const Order_stockProviders = [{
    provide: 'ORDER_STOCK_REPOSITORY',
    useValue: Order_stock,
}];