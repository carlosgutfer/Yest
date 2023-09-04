import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity'
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
    * @param user_id the person who recibe the permiss
    * @param 
    * @param 
    * @param 
    * @param 
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
    userId_payee: number;


    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId_admin: number;


    @BelongsTo(() => User)
    user: User;  
}