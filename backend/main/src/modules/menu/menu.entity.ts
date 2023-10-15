import { Table, Column, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Client } from '../client/client.entity';
import { Restaurant } from '../restaurant/restaurant.entity';

@Table
export class Menu extends Model<Menu> {

    /** 
    * Class used to create the table Client
    *
    * @param name - Name of the item
    * @param items_number - Approximate number of units, could be portions, bottles, cups...
    * @param type - drink, dessert, main, entry...
    * @param family - non-alcohol, alcohol, wines, fish...
    * @param subfamily - gas, nongas, ginegra, white, red...
    * @param price - the price that we sell the item
    * @param TAX - the IVA of the product
    * @param restauran_id - the ID of the restaurant asociatted 
    * @param client_id - the ID of the client
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
    type: string;

    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    family: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    subfamily: string;

    @Column({
        type: DataType.DOUBLE,
        allowNull: false,
    })
    items_number: number;

    
    @Column({
        type: DataType.DOUBLE,
        allowNull: false,
    })
    price: number;

    
    @Column({
        type: DataType.DOUBLE,
        allowNull: false,
    })
    tax: number;


    @ForeignKey(() => Restaurant)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    restaurant_id: number;


    @BelongsTo(() => Restaurant)
    restaurant: Restaurant; 

    @ForeignKey(() => Client)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    client_id: number | null;

    @BelongsTo(() => Client)
    client: Client;  
    
}