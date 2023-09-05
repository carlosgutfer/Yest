import { Table, Column, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Order } from '../order/order.entity';
import { Stock } from '../stock/stock.entity';

@Table
export class Order_stock extends Model<Order_stock> {

    /** 
    * Class used to create the table order_stock
    *
    * @param items_number - Number of items to buy
    * @param price_without_tax_all_items - sum of all items and prices but without tax
    * @param price_with_tax_all_items - sum of all items and price with tax
    * @param order_id - id of the table order 
    * @param stock_id - id of the table stock

    */

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    items_number: number ;

    @Column({
        type: DataType.DOUBLE,
        allowNull: false,
    })
    price_without_tax_all_items: number;


    @Column({
        type: DataType.DOUBLE,
        allowNull: false,
    })
    price_with_tax_all_items: number;

    @ForeignKey(() => Order)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    order_id: number;

    @BelongsTo(() => Order)
    order: Order; 


    @ForeignKey(() => Stock)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    stock_id: number;


    @BelongsTo(() => Stock)
    stock: Stock;  

}