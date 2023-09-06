import { Injectable, Inject } from '@nestjs/common';
import { OrderDto } from './order.dto';
import { Order } from './order.entity';

@Injectable()
export class OrderService {

    constructor(@Inject('Order_REPOSITORY') private readonly OrderRepository: typeof Order) { }

    async create(Order: OrderDto): Promise<Order> {
        return await this.OrderRepository.create<Order>(Order);
    }
    
    async findOneByDate(date: Date): Promise<Order[]> {
        try {
            return await this.OrderRepository.findAll<Order>({where: { date },});
          } catch (error) {
            throw error;
          }
    }

    async findOneById(id): Promise<Order> {
        try {
            return await this.OrderRepository.findOne<Order>({where: { id },});
          } catch (error) {
            throw error;
          }
    }


    async delete(id) {
        return await this.OrderRepository.destroy({ where: { id }});
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedOrder]] = await this.OrderRepository.update({ ...data }, { where: { id }, returning: true });

        return { numberOfAffectedRows, updatedOrder };
    }
}
