import { Injectable, Inject } from '@nestjs/common';
import { CustomMenu } from './CustomMenu.entity';


@Injectable()
export class CustomMenuService {

    constructor(@Inject('CUSTOM_MENU_REPOSITORY')private readonly customMenuRepository: typeof CustomMenu){}

    async create(custom: CustomMenu): Promise<CustomMenu> {
        return await this.customMenuRepository.create<CustomMenu>(custom);
    }
    
    async findAll(): Promise<CustomMenu[]> {
        return await this.customMenuRepository.findAll<CustomMenu>();
    }

    async update(id: number, customMenu: CustomMenu){
        return await this.customMenuRepository.update({ ...customMenu.dataValues }, { where: { id }, returning: true });
    }

    async delete(id: number){
        return await this.customMenuRepository.destroy({ where: { id } });
    }

    async update_by_client_and_id(client_id: number, id: number, customMenu: CustomMenu){
        return await this.customMenuRepository.update({ ...customMenu.dataValues }, { where: { client_id, id }, returning: true });
    }

    async delete_by_client_and_id(client_id: number, id: number){
        return await this.customMenuRepository.destroy({ where: { client_id, id } });
    }


    async find_all_by_client_and_restaurant(client_id: number, restaurant_id: number): Promise<CustomMenu[]> {
        return await this.customMenuRepository.findAll<CustomMenu>({ where: { client_id, restaurant_id } });
    }

    async find_one_by_client_and_id(client_id: number, id: number): Promise<CustomMenu> {
        return await this.customMenuRepository.findOne<CustomMenu>({ where: { client_id, id } });
    }

    async find_all_by_client(client_id: number): Promise<CustomMenu[]> {
        return await this.customMenuRepository.findAll({ where: { client_id } });
    }
}
