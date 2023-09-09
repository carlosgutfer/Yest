import { IsNotEmpty } from "class-validator";


export class ReservationDto {

    /** 
    * Class used to create the table reservation
    * 
    * @param date Day of the reservation
    * @param time hour of the reservation
    * @param number_customer Number of cutomer 
    * @param note any important information about the reservation ejem. will be an allergic person and cannot eat eggs
    * @param user_id the person who did the reservation
    * @param table_id table that will be reservated
    */

    @IsNotEmpty()
    readonly date: Date;

    @IsNotEmpty()
    readonly  time: string;

    @IsNotEmpty()
    readonly number_customer: number;

    readonly note: string;

    readonly client_id: number | null;

 
}