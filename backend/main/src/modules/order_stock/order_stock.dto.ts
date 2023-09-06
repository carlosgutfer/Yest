import { IsNotEmpty } from "class-validator";

export class Order_stockDto {

    /** 
    * Class used to create the table order_stock
    *
    * @param items_number - Number of items to buy
    * @param price_without_tax_all_items - sum of all items and prices but without tax
    * @param price_with_tax_all_items - sum of all items and price with tax
    * @param order_id - id of the table order 
    * @param stock_id - id of the table stock

    */

    @IsNotEmpty()
    readonly items_number: number ;

    @IsNotEmpty()
    readonly price_without_tax_all_items: number;


    @IsNotEmpty()
    readonly price_with_tax_all_items: number;

    readonly client_id: number | null;


}