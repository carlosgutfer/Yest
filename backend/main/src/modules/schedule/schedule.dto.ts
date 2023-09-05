import { IsNotEmpty } from "class-validator";

export class ScheduleDto {

    /** 
    * Class used to create the table schedule
    *
    * @param start_date Day of start 
    * @param end_date Day of end
    * @param start_time Time when the schedule start
    * @param end_time Time when the schedule end
    * @param type type of the register holidays, normal, permiss...
    * @param userId_payee the person who recibe the permiss
    * @param userId_admin the person who give the permiss
    */

    @IsNotEmpty()
    readonly start_date: Date;
    
    @IsNotEmpty()
    readonly end_date: Date;

    readonly start_time: string | null;

    readonly end_time: string | null;

    @IsNotEmpty()
    type: string;

}