import { Injectable, Inject } from '@nestjs/common';
import { Stock } from './stock.entity';
import { StockDto } from './stock.dto';

@Injectable()
export class StockService {
    constructor(@Inject('STOCK_REPOSITORY') private readonly stockRepository: typeof Stock) { }

    async create(Stock: StockDto): Promise<Stock> {
        return await this.stockRepository.create<Stock>(Stock);
    }

    async update(id, data) {
        return await this.stockRepository.update({ ...data.dataValues }, { where: { id }, returning: true });
    }

    async delete(id) {
        return await this.stockRepository.destroy({ where: { id }});
    }

    /*
        Methods for owner and user_plus
    */
    async findAllByIdAndClient(id: number, client_id: number): Promise<Stock[]> {
        
        return await this.stockRepository.findAll<Stock>({ where: { id , client_id}});
    }
    
    async findAllByClient(client_id): Promise<Stock[]> {
        return await this.stockRepository.findAll<Stock>({where : {client_id}});
    }

    async findOneByNameAndClient(name: string, client_id:number): Promise<Stock> {
        return await this.stockRepository.findOne<Stock>({ where: {name, client_id}});
    }

    async findOneByRefAndClient(ref_code: string, client_id:number): Promise<Stock> {
        return await this.stockRepository.findOne<Stock>({ where: {ref_code, client_id}});
    }

    async findAllByRefAndClient(ref_code: string, client_id:number): Promise<Stock[]> {
        return await this.stockRepository.findAll<Stock>({ where: {ref_code, client_id}});
    }

    /*
        Methods for admin
    */
    async findAllByName(name: string): Promise<Stock[]> {
        return await this.stockRepository.findAll<Stock>({ where: { name}});
    }

    async findById(id: number): Promise<Stock> {
        return await this.stockRepository.findByPk<Stock>(id);
    }

    async findAll(): Promise<Stock[]> {
        return await this.stockRepository.findAll<Stock>();
    }



}
