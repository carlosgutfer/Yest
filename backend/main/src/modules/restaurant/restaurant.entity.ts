import { Table, Column, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Client } from '../client/client.entity';
import { User } from '../users/user.entity';


@Table
export class Restaurant extends Model<Restaurant> {

    /** 
    * Class used to create the table restaurant
    *
    * @param name - Name of the restaurant
    * @param notes - Important information about the restaurant
    * @param email - email of the restaurant
    * @param address - Restaurant place 
    * @param phone1 - number of contact
    * @param phone2 - second number of contact
    * @param user_id - id of the admin in the table user
    * @param client_id - id of the owner in the table client
    */

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
    
    
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    notes: string;

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
        allowNull: false,
    })
    client_id: number;


    @BelongsTo(() => Client)
    client: Client;
    
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id: number;


    @BelongsTo(() => User)
    user: User; 
    
    
}