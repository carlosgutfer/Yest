import { Restaurant_Table } from './table.entity';


export const TableProviders = [{
    provide: 'RESTAURANT_TABLE_REPOSITORY',
    useValue: Restaurant_Table,
}];