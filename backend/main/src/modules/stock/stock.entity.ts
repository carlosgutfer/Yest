import { Table, Column, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Client } from '../client/client.entity';

@Table
export class Stock extends Model<Stock> {

    /** 
    * Class used to create the table Stock
    *
    * @param name - Name of the item
    * @param ref_code - code of the item
    * @param amounts - Number of items avaible, could be number of items or weigth (kg)
    * @param TAX - IVA value
    * @param price_without_tax - Cost price
    * @param date_entry - Day when the product is saved
    * @param expiration_date - Max day to consume
    * @param notes - Any important think about the product

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
    ref_code: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    date_entry: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    expiration_date: string;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    items_number: number;


    @Column({
        type: DataType.DOUBLE,
        allowNull: false,
    })
    TAX: number;

    @Column({
        type: DataType.DOUBLE,
        allowNull: false,
    })
    price_without_tax: number;

    @Column({
        type: DataType.DOUBLE,
        allowNull: false,
    })
    seller_price: number;


    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    notes: string;

    @ForeignKey(() => Client)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    client_id: number | null;

    @BelongsTo(() => Client)
    client: Client;  
    
}