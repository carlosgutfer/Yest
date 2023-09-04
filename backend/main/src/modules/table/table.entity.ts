import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Restaurant } from '../restaurant/restaurant.entity';


@Table
export class Restaurant_Table extends Model<Restaurant_Table> {

    /** 
    * Class used to create the table Restaurant_Table
    *
    * @param number_table The number of the table 
    * @param restaurant_id The restaurant id
    */

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    number_table: number;

    @ForeignKey(() => Restaurant)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    restaurant_id: number;


    @BelongsTo(() => Restaurant)
    restaurant: Restaurant;  
}