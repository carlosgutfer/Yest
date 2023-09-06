import { Injectable, Inject } from '@nestjs/common';
import { Client } from './client.entity';
import { ClientDto } from './client.dto';

@Injectable()
export class ClientService {

    constructor(@Inject('Client_REPOSITORY') private readonly clientRepository: typeof Client) { }

    async create(client: ClientDto): Promise<Client> {
        return await this.clientRepository.create<Client>(client);
    }

    async findOneByCIF(CIF: string): Promise<Client> {
        return await this.clientRepository.findOne<Client>({ where: { CIF }});
    }

    async delete(id) {
        return await this.clientRepository.destroy({ where: { id }});
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedClient]] = await this.clientRepository.update({ ...data }, { where: { id }, returning: true });

        return { numberOfAffectedRows, updatedClient };
    }

    async findAll(): Promise<Client[]> {
        return await this.clientRepository.findAll<Client>();
    }
}
