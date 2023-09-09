import { Stock } from './Stock.entity';


export const StockProviders = [{
    provide: 'Stock_REPOSITORY',
    useValue: Stock,
}];