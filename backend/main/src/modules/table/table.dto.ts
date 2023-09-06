import { IsNotEmpty } from "class-validator";

export class Restaurant_TableDto {

    /** 
    * Class used to comunicate with  the table Restaurant_Table
    *
    * @param number_table The number of the table 
    * @param restaurant_id The restaurant id
    */

    @IsNotEmpty()
    readonly number_table: number;
    
    readonly client_id: number | null;
}