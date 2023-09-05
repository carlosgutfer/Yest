import { IsNotEmpty } from "class-validator";


export class OrderDto {

    /** 
    * Class used to call the table order
    * 
    * @param date Day of the order
    * @param time hour of the order
    * @param user_id the person who did the reservation
    * @param table_id table that will be reservated
    */

    @IsNotEmpty()
    readonly date: Date;

    @IsNotEmpty()
    readonly time: string;

}