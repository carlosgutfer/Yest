import { MenuStock } from './menuStock.entity';

export const MenuStockProvides = [{
    provide: 'MENU_STOCK_REPOSITORY',
    useValue: MenuStock,
}]
