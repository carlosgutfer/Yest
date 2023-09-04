import { Table, Column, Model, DataType} from 'sequelize-typescript';

@Table
export class Stock extends Model<Stock> {

    /** 
    * Class used to create the table Stock
    *
    * @param name - Name of the item
    * @param ref_code - code of the item
    * @param secondname - if have, second name of the user
    * @param address - Place where the user live
    * @param CIF - Identity fiscal code

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
        type: DataType.INTEGER,
        allowNull: true,
    })
    items_number: number ;

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
    
}