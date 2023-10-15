import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './user.dto';
import { Permissions } from '../auth/RBAC/permissions.entity';
import { Roles } from '../auth/RBAC/roles.entity';
import { RolePermissions } from '../auth/RBAC/rolePermissions.entity';
import { Objects } from '../auth/RBAC/objects.entity';

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

    async findAllPermissionsOfUser(id: number): Promise<Permissions[]> {
        // Utiliza la relación "permissions" en el modelo User para obtener los permisos del usuario
        const userWithPermissions = await this.userRepository.findOne({
          where: { id },
          include: [{ model: Roles, 
                        include:[{
                            model:RolePermissions,
                                include:[{
                                        model:Permissions,
                                            include: [{ 
                                                model: Objects,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
        });
    
        // Verifica si se encontró al usuario
        if (!userWithPermissions) {
          throw new Error(`Usuario con ID ${id} no encontrado.`);
        }
        const permissionsArray = [];

        // Devuelve los permisos del usuario
        for (const rolePermission of userWithPermissions.role.rolePermissions) {
            permissionsArray.push(rolePermission.permissions);
          }
          
          // permissionsArray ahora contiene las permissions de todos los RolePermissions
        return permissionsArray;
    }
    
 

}