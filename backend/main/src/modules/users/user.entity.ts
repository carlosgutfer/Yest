import { Table, Column, Model, DataType, ForeignKey, BelongsTo,BelongsToMany} from 'sequelize-typescript';
import { Roles } from '../auth/RBAC/roles.entity';
import { Client } from '../client/client.entity';

@Table
export class User extends Model<User> {

    /** 
    * Class used to create the table User
    *
    * @param name - Name of the user
    * @param firstname - first name of the user
    * @param secondname - if have, second name of the user
    * @param permiss - type of user
    * @param email - email of the user
    * @param gender - gender of the user
    * @param address - Place where the user live
    * @param password - password to login 
    * @param phone1 - number of contact
    * @param phone2 - second number of contact
    * @param client_id - id of the table client
*/


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
    
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstname: string;

    
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    secondname: string;

    @ForeignKey(() => Roles)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    role_id: number;

    @BelongsTo(() => Roles)
    role: Roles;
    

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;


    @Column({
        type: DataType.STRING,
        values: ['male', 'female'],
        allowNull: false,
    })
    gender: string;

    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;

    @Column({
        type: DataType.BIGINT,
        allowNull: false,
    })
    phone1: number;
  
    @Column({
        type: DataType.BIGINT,
        allowNull: true,
    })
    phone2: number;

    @ForeignKey(() => Client)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    client_id: number | null;

    @BelongsTo(() => Client)
    client: Client;  
    
}