import { Table, Column, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
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

    
    @Column({
        type: DataType.STRING,
        allowNull: false,
        values: ['admin', 'owner', 'user_plus', 'user', 'non_user'],
    })
    permiss: string;

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