import { Injectable, Inject } from '@nestjs/common';
import { Order_stockDto } from './order_stock.dto';
import { Order_stock } from './order_stock.entity';
import { Stock } from '../stock/stock.entity';

@Injectable()
export class OrderStockService {


        constructor(@Inject('ORDER_STOCK_REPOSITORY') private readonly Order_stockRepository: typeof Order_stock) { }
    
        async create(Order_stock: Order_stockDto): Promise<Order_stock> {
            return await this.Order_stockRepository.create<Order_stock>(Order_stock);
        }
        
        async delete(id) {
          return await this.Order_stockRepository.destroy({ where: { id }});
        }
    
        async update(id, data) {
          const [numberOfAffectedRows, [updatedOrder]] = await this.Order_stockRepository.update({ ...data }, { where: { id }, returning: true });
          return { numberOfAffectedRows, updatedOrder };
        }
    
        async findAllByOrder(order_id: number): Promise<Order_stock[]> {
            try {
                return await this.Order_stockRepository.findAll<Order_stock>({where: {order_id}});
              } catch (error) {
                throw error;
              }
        }
    
        async findAll(): Promise<Order_stock[]> {
          try {
              return await this.Order_stockRepository.findAll<Order_stock>({include: [{ model: Order_stock}]});
            } catch (error) {
              throw error;
            }
        }
    
        async findOneById(id: number): Promise<Order_stock> {
            try {
                return await this.Order_stockRepository.findOne<Order_stock>({where: { id }, include: [{ model: Order_stock}]});
              } catch (error) {
                throw error;
              }
        }
    
    
        /* Methods for owner and user_plus */

      async findAllByClient(client_id: number): Promise<Order_stock[]> {
            try {
                return await this.Order_stockRepository.findAll<Order_stock>({where: {client_id }, include: [{ model: Order_stock}]});
              } catch (error) {
                throw error;
              }
        }
      
          async findAllByOrderAndClient(order_id: number, client_id: number): Promise<Order_stock[]> {
            try {
                return await this.Order_stockRepository.findAll<Order_stock>({where: {order_id, client_id}});
              } catch (error) {
                throw error;
              }
        }
    
}
