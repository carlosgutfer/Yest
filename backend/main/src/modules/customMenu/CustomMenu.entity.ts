import { Res } from '@nestjs/common';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Client } from '../client/client.entity';
import { Restaurant } from '../restaurant/restaurant.entity';

@Table
export class CustomMenu extends Model<CustomMenu> {

    /** 
    * Class used to create the table Client
    *
    * @param name - Name of the item
    * @param day_menu - If it is a daily menu or not
    * @param price - only for daily menu
    * @param restauran_id - the ID of the restaurant asociatted 
    * @param client_id - the ID of the client
    */

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
    
    
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    day_menu: boolean;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    price: number;

    @ForeignKey(() => Restaurant)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    restaurant_id: number;

    @BelongsTo(() => Restaurant)
    restauran: Restaurant;  
    
    @ForeignKey(() => Client)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    client_id: number;

    @BelongsTo(() => Client)
    client: Client;  
    
}