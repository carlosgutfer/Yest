import { Injectable, Inject } from '@nestjs/common';
import { MenuStock} from './menuStock.entity';

@Injectable()
export class MenuStockService {

    constructor(@Inject('MENU_STOCK_REPOSITORY') private readonly menuStockRepository: typeof MenuStock) { }


    /*metodo para insertar en la bbdd en la tabla menustock*/
    async create(menuStock: MenuStock): Promise<MenuStock> {
        return await this.menuStockRepository.create<MenuStock>(menuStock);
    
    }

    async delete(id: number) {
      return await this.menuStockRepository.destroy({ where: { id }});
    }

    async update(id: number, data: MenuStock): Promise<[number, MenuStock[]]> {
        return await this.menuStockRepository.update({ ...data.dataValues }, { where: { id }, returning: true });
    }

    async findAll(): Promise<MenuStock[]> {

        return await this.menuStockRepository.findAll<MenuStock>();
    }

    async find_one(id: number): Promise<MenuStock> {
        return await this.menuStockRepository.findOne({ where: { id } });
     }

    async find_one_by_menu_id_and_client(menu_id: number, client_id: number): Promise<MenuStock> { 
        return await this.menuStockRepository.findOne({ where: { menu_id, client_id } });
    }

    async find_all_by_menu_and_client(menu_id: number, client_id: number): Promise<MenuStock[]> {
        return await this.menuStockRepository.findAll({ where: { menu_id, client_id } });
    }

    async find_all_by_client(client_id: number): Promise<MenuStock[]> {
        return await this.menuStockRepository.findAll({ where: { client_id } });
    }
}