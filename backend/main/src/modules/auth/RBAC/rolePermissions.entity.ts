import { Table, Column, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Permissions } from './permissions.entity';
import { Roles } from './roles.entity';

@Table
export class RolePermissions extends Model<RolePermissions> {

    
    @ForeignKey(() => Roles)
    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
    })
    role_id:number;

    @BelongsTo(() => Roles)
    roles: Roles;

    @ForeignKey(() => Permissions)
    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
    })
    permissions_id:number;

    @BelongsTo(() => Permissions)
    permissions: Permissions;


}