import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {

    constructor(@Inject('USER_REPOSITORY') private readonly userRepository: typeof User) { }

    async create(user: UserDto): Promise<User> {
        /*if (!user.client_id) {
            user.client_id = null; // Establece client_id como null si no se proporciona.
        }*/
        return await this.userRepository.create<User>({...user});
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne<User>({where: { email}});
    }

    async findOneById(id: number): Promise<User> {
        return await this.userRepository.findOne<User>({where: { id }});
    }

    async findAllByClient(client_id: number): Promise<User[]> {
        return await this.userRepository.findAll<User>({where: {client_id }});
    }
    
    async delete(id) {
        return await this.userRepository.destroy({ where: { id }});
    }

}