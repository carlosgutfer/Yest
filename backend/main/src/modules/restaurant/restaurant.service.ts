import { Injectable, Inject } from '@nestjs/common';
import { RestaurantDto } from './restaurant.dto';
import { Restaurant } from './restaurant.entity';
@Injectable()
export class RestaurantService {
    constructor(@Inject('RESTAURANT_REPOSITORY') private readonly RestaurantRepository: typeof Restaurant) { }

    async create(Restaurant: RestaurantDto): Promise<Restaurant> {
        return await this.RestaurantRepository.create<Restaurant>(Restaurant);
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedRestaurant]] = await this.RestaurantRepository.update({ ...data }, { where: { id }, returning: true });
        return { numberOfAffectedRows, updatedRestaurant };
    }
    
    async delete(id) {
        return await this.RestaurantRepository.destroy({ where: { id }});
    }

    /*
        Methods for owner and user_plus
    */
    async findAllByIdAndClient(id: number, client_id: number): Promise<Restaurant[]> {     
        return await this.RestaurantRepository.findAll<Restaurant>({ where: { id , client_id}});
    }
    
    async findAllByClient(client_id): Promise<Restaurant[]> {
        return await this.RestaurantRepository.findAll<Restaurant>({where : {client_id}});
    }

    async findOneByNameAndClient(name: string, client_id:number): Promise<Restaurant> {
        return await this.RestaurantRepository.findOne<Restaurant>({ where: { name, client_id}});
    }

    /*
        Methods for admin
    */
    async findAllByName(name: string): Promise<Restaurant[]> {
        return await this.RestaurantRepository.findAll<Restaurant>({ where: { name}});
    }

    async findById(id: number): Promise<Restaurant> {
        return await this.RestaurantRepository.findByPk<Restaurant>(id);
    }

    async findAll(): Promise<Restaurant[]> {
        return await this.RestaurantRepository.findAll<Restaurant>();
    }


}
