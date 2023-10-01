import { IsNotEmpty } from "class-validator";


export class TurnMenuDto {

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
    * @param fast_replace - true if you can take new item from stock (example take a coacola bottel), false other wise
    * @param menu_id - PK in the menu table
    * @param restauran_id - the ID of the restaurant asociatted 
    * @param client_id - the ID of the client
    */
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly items_number: number;

    @IsNotEmpty()
    readonly type: string;

    @IsNotEmpty()
    readonly family: string;

    @IsNotEmpty()
    readonly subfamily: string;

    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    readonly TAX: number;

    @IsNotEmpty()
    readonly fast_replace: boolean;

    @IsNotEmpty()
    readonly menu_id: number;

    @IsNotEmpty()
    readonly restaurant_id: number;

    @IsNotEmpty()
    readonly client_id: number | null;

}