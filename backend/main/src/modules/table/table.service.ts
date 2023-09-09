import { Injectable, Inject } from '@nestjs/common';
import { Restaurant_TableDto } from './table.dto';
import { Restaurant_Table } from './table.entity';

@Injectable()
export class TableService {

    constructor(@Inject('RESTAURANT_TABLE_REPOSITORY') private readonly RestaurantTableRepository: typeof Restaurant_Table) { }

    async create(Restaurant_Table: Restaurant_TableDto): Promise<Restaurant_Table> {
        return await this.RestaurantTableRepository.create<Restaurant_Table>(Restaurant_Table);
    }
    
    async delete(id) {
      return await this.RestaurantTableRepository.destroy({ where: { id }});
    }

    async update(id, data) {
      const [numberOfAffectedRows, [updatedOrder]] = await this.RestaurantTableRepository.update({ ...data }, { where: { id }, returning: true });
      return { numberOfAffectedRows, updatedOrder };
    }


    async findAll(): Promise<Restaurant_Table[]> {
      try {
          return await this.RestaurantTableRepository.findAll<Restaurant_Table>();
        } catch (error) {
          throw error;
        }
    }

    async findOneById(id: number): Promise<Restaurant_Table> {
        try {
            return await this.RestaurantTableRepository.findOne<Restaurant_Table>({where: { id }});
          } catch (error) {
            throw error;
          }
    }




  async findAllByClient(client_id: number): Promise<Restaurant_Table[]> {
        try {
            return await this.RestaurantTableRepository.findAll<Restaurant_Table>({where: {client_id }});
          } catch (error) {
            throw error;
          }
    }

    async findAllByRestaurantAndClient(restaurant_id: number, client_id: number): Promise<Restaurant_Table[]> {
        try {
            return await this.RestaurantTableRepository.findAll<Restaurant_Table>({where: {restaurant_id, client_id }});
          } catch (error) {
            throw error;
          }
    }

    async findOneByRestaurantAndClient(number_table: number, restaurant_id: number, client_id: number): Promise<Restaurant_Table> {
        try {
            return await this.RestaurantTableRepository.findOne<Restaurant_Table>({where: {number_table, restaurant_id, client_id }});
          } catch (error) {
            throw error;
          }
    }

}


