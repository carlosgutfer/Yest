import { Table, Column, Model, DataType, ForeignKey, BelongsTo,BelongsToMany} from 'sequelize-typescript';
import { Objects } from './objects.entity';
import { RolePermissions } from './rolePermissions.entity';
import { Roles } from './roles.entity';

@Table
export class Permissions extends Model<Permissions> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    action: string;

    @ForeignKey(() => Objects)
    @Column({   
        type: DataType.INTEGER,
        allowNull: false,
    })
    objects_id:number;

    @BelongsTo(() => Objects)
    objects: Objects;

    @BelongsToMany(() => Roles, () => RolePermissions)
    roles: Roles[];

}