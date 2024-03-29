import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity'
import { Restaurant_Table } from '../table/table.entity';
import { Client } from '../client/client.entity';

@Table
export class Order extends Model<Order> {

    /** 
    * Class used to create the table order
    * 
    * @param date Day of the order
    * @param time hour of the order
    * @param user_id the person who did the reservation
    * @param table_id table that will be reservated
    */

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    date: Date;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    time: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        values: ['open', 'close', 'incident'],
    })
    state: string;

    @ForeignKey(() => Restaurant_Table)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    table_id: number;

    @BelongsTo(() => Restaurant_Table)
    table: Restaurant_Table; 


    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id: number;


    @BelongsTo(() => User)
    user: User;
    
    
    @ForeignKey(() => Client)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    client_id: number | null;

    @BelongsTo(() => Client)
    client: Client;  
}