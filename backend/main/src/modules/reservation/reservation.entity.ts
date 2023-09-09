import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity'
import { Restaurant_Table } from '../table/table.entity';
import { Client } from '../client/client.entity';

@Table
export class Reservation extends Model<Reservation> {

    /** 
    * Class used to create the table reservation
    * 
    * @param date Day of the reservation
    * @param time hour of the reservation
    * @param number_customer Number of cutomer 
    * @param note any important information about the reservation ejem. will be an allergic person and cannot eat eggs
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
        allowNull: false,
    })
    time: string | null;

    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    number_customer: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    note: string;

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