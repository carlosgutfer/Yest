import { IsNotEmpty } from "class-validator";


export class StockDto {

    /** 
    * Class used to create the table Stock
    *
    * @param name - Name of the item
    * @param ref_code - code of the item
    * @param secondname - if have, second name of the user
    * @param address - Place where the user live
    * @param CIF - Identity fiscal code

    */

    @IsNotEmpty()
    readonly name: string;
    
    @IsNotEmpty()
    readonly ref_code: string;

    @IsNotEmpty()
    readonly date_entry: string;

    @IsNotEmpty()
    readonly expiration_date: string;

    @IsNotEmpty()
    readonly items_number: number ;

    @IsNotEmpty()
    readonly TAX: number;

    @IsNotEmpty()
    readonly price_without_tax: number;

    @IsNotEmpty()
    readonly seller_price: number;

    readonly notes: string;
    
    readonly client_id: number | null;

}