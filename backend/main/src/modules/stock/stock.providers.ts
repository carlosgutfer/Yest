import { Stock } from './Stock.entity';


export const StockProviders = [{
    provide: 'STOCK_REPOSITORY',
    useValue: Stock,
}];