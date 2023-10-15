import { Table, Column, Model, DataType, BelongsToMany, HasMany} from 'sequelize-typescript';
import { Permissions} from './permissions.entity';
import { RolePermissions} from './rolePermissions.entity';
@Table
export class Roles extends Model<Roles> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
        values: ['admin', 'owner', 'user_plus', 'user', 'customer'],
    })
    name: string;

    @BelongsToMany(() => Permissions, () => RolePermissions)
    permissions: Permissions[];
  
    @HasMany(() => RolePermissions)
    rolePermissions: RolePermissions[];
}