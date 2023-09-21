import { IsNotEmpty, IsEnum } from "class-validator";


enum State {
    OPEN = 'open',
    CLOSE = 'close',
    INCIDENT = 'incident',
}

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

    @IsNotEmpty()
    @IsEnum(State, {
        message: 'State value must be valid',
    })
    readonly state: string;

    readonly user_id: number;

    readonly client_id: number;
    
    readonly table_id: number;
}