import { Injectable, Inject } from '@nestjs/common';
import { MenuStockService } from '../menuStock/menuStock.service';
import { TurnMenu } from './turn-menu.entity';
import { StockService } from '../stock/stock.service';
import { Stock } from '../stock/stock.entity';
import { MenuStock } from '../menuStock/menuStock.entity';


@Injectable()
export class TurnMenuService {


    constructor(@Inject('TURN_MENU_REPOSITORY') private readonly turnMenuRepository: typeof TurnMenu, 
                private readonly menuStockServices: MenuStockService,
                private readonly stockServices: StockService){}

    async create(Menu: TurnMenu): Promise<TurnMenu> {        
        
        //First we find all menu_stock of this menu and client
        const  menu_stock  =  await this.menuStockServices.find_all_by_menu_and_client(Menu.menu_id, Menu.client_id);
        
        //Then we check if there is not enough items for each menu_stock
        let not_enogugh_items:MenuStock [] = [];
        let stock_itmes:Stock [] = [];
        menu_stock.forEach((menuStockItem) => {
            const quantity: number = menuStockItem.units_taken;
            const ref_code: string = menuStockItem.ref_code;
            const client_id: number = menuStockItem.client_id;
            let total: number = 0;
            this.stockServices.findAllByRefAndClient(ref_code, client_id).then((stockItem) => {
                    stockItem.forEach((item) => {
                        total += item.items_number;
                        stock_itmes.push(item);
                    });
                });
            if (quantity > total)
                not_enogugh_items.push(menuStockItem);
          });

          //if there isnt we throw and error and return the name of the products not enough
          if (not_enogugh_items.length > 0) {
                let items: string = "";
                not_enogugh_items.forEach((item) => {
                    items += item.ref_code + " ";
                });
              throw new Error("Not enough items of " + items);
          }
          else{
            menu_stock.forEach((menuStockItem) => {
                    let quantity: number = menuStockItem.units_taken;
                    const ref_code: string = menuStockItem.ref_code;
                    let shouldBreak: boolean = false;
                    stock_itmes.forEach((item) => {
                        if (shouldBreak) {
                            return; 
                        }
                        if (item.ref_code == ref_code) {
                            if (quantity < item.items_number){
                                this.stockServices.update(item.id, item);
                                shouldBreak = true;
                            }else if( quantity == item.items_number){
                                this.stockServices.delete(item.id);
                                shouldBreak = true;
                            }else{
                                this.stockServices.delete(item.id);
                                quantity -= item.items_number;
                            }
                        }
                    });
                });
            }
        return await this.turnMenuRepository.create<TurnMenu>(Menu);
    }
}
