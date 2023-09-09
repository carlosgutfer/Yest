import { Injectable, Inject } from '@nestjs/common';
import { OrderDto } from './order.dto';
import { Order } from './order.entity';
import { User } from '../users/user.entity';

@Injectable()
export class OrderService {

    constructor(@Inject('Order_REPOSITORY') private readonly OrderRepository: typeof Order) { }

    async create(Order: OrderDto): Promise<Order> {
        return await this.OrderRepository.create<Order>(Order);
    }
    
    async delete(id) {
      return await this.OrderRepository.destroy({ where: { id }});
    }

    async update(id, data) {
      const [numberOfAffectedRows, [updatedOrder]] = await this.OrderRepository.update({ ...data }, { where: { id }, returning: true });
      return { numberOfAffectedRows, updatedOrder };
    }

    async findAllByDate(date: Date): Promise<Order[]> {
        try {
            return await this.OrderRepository.findAll<Order>({where: { date },
              include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
          } catch (error) {
            throw error;
          }
    }

    async findAll(): Promise<Order[]> {
      try {
          return await this.OrderRepository.findAll<Order>({include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
        } catch (error) {
          throw error;
        }
    }

    async findOneById(id: number): Promise<Order> {
        try {
            return await this.OrderRepository.findOne<Order>({where: { id },
              include: [{ model: User, attributes: { include: ['name', 'firstname'] } }]});
          } catch (error) {
            throw error;
          }
    }


    /* Methods for owner and user_plus */
    async findOneByDateAndTable(date: Date, table_id:number ,client_id: number): Promise<Order> {
      try {
          return await this.OrderRepository.findOne<Order>({where: { date, client_id },
            include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
        } catch (error) {
          throw error;
        }
  }

  async findOneByTableAndClient(table_id: number, client_id: number): Promise<Order> {
    try {
        return await this.OrderRepository.findOne<Order>({where: { table_id, client_id },
          include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
      } catch (error) {
        throw error;
      }
    }

  async findAllByClient(client_id: number): Promise<Order[]> {
        try {
            return await this.OrderRepository.findAll<Order>({where: {client_id },
              include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
          } catch (error) {
            throw error;
          }
    }
  
  async findAllByUserAndClient(user_id: number, client_id: number): Promise<Order[]> {
      try {
          return await this.OrderRepository.findAll<Order>({where: { user_id, client_id },
            include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
        } catch (error) {
          throw error;
        }
      }

}


