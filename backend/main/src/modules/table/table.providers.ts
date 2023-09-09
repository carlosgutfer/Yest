import { Restaurant_Table } from './table.entity';


export const TableProviders = [{
    provide: 'Table_REPOSITORY',
    useValue: Restaurant_Table,
}];