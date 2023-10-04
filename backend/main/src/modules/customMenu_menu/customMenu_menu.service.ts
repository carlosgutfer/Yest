import { Injectable, Inject } from '@nestjs/common';
import { CustomMenuMenu } from './customMenu_menu.entity';


@Injectable()
export class CustomMenuMenuService {

    constructor(@Inject('CUSTOM_MENU_MENU_REPOSITORY') private readonly customMenuMenuRepository: typeof CustomMenuMenu) { }
    
    async create(customMenuMenu: CustomMenuMenu): Promise<CustomMenuMenu> {
        return await this.customMenuMenuRepository.create<CustomMenuMenu>(customMenuMenu);
    }

    async findAll(): Promise<CustomMenuMenu[]> {   
        return await this.customMenuMenuRepository.findAll<CustomMenuMenu>();
    }

    async update(customMenuMenu: CustomMenuMenu) { 
        return await this.customMenuMenuRepository.update<CustomMenuMenu>(customMenuMenu, { where: { id: customMenuMenu.id } });
    }

    async delete(id: number) {
        return await this.customMenuMenuRepository.destroy<CustomMenuMenu>({ where: { id } });
    }

    async delete_by_client_id(client_id: number, id: number) {
        return await this.customMenuMenuRepository.destroy<CustomMenuMenu>({ where: { client_id, id } });
    }

    async update_by_client_id(client_id: number, id: number, customMenuMenu: CustomMenuMenu) {
        return await this.customMenuMenuRepository.update<CustomMenuMenu>(customMenuMenu, { where: { client_id, id } });
    }

    async find_all_by_client_and_CustomMenu_id(client_id: number, customMenu_id: number): Promise<CustomMenuMenu[]> {
        return await this.customMenuMenuRepository.findAll<CustomMenuMenu>({ where: { client_id, customMenu_id } });
    }

}