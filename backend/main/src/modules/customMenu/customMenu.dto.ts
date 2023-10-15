import { IsNotEmpty } from "class-validator";

export class CustomMenuDto {

    /** 
    * Class used to create the table Client
    *
    * @param name - Name of the item
    * @param day_menu - If it is a daily menu or not
    * @param price - only for daily menu
    * @param restauran_id - the ID of the restaurant asociatted 
    * @param client_id - the ID of the client
    */

    @IsNotEmpty()
    readonly name: string;
    
    @IsNotEmpty()
    readonly day_menu: string;

    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    readonly restaurant_id: number;

    @IsNotEmpty()
    readonly client_id: number;

}