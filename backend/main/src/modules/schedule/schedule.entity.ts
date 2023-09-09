import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity'
import { Client } from '../client/client.entity';

@Table
export class Schedule extends Model<Schedule> {

    /** 
    * Class used to create the table schedule
    *
    * @param start_date Day of start 
    * @param end_date Day of end
    * @param start_time Time when the schedule start
    * @param end_time Time when the schedule end
    * @param type type of the register holidays, normal, permiss...
    * @param userId_payee the person who recibe the permiss
    * @param userId_admin the person who give the permiss
    */

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    start_date: Date;
    
    
    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    end_date: Date;

    
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    start_time: string | null;

    
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    end_time: string | null;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id_payee: number;


    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    private user_id_admin: number;


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