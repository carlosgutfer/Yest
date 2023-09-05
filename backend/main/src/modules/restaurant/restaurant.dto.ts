import { IsNotEmpty } from "class-validator";

export class RestaurantDto {

    /** 
    * Class used to create the table restaurant
    *
    * @param name - Name of the restaurant
    * @param notes - Important information about the restaurant
    * @param email - email of the restaurant
    * @param address - Restaurant place 
    * @param phone1 - number of contact
    * @param phone2 - second number of contact
    * @param user_id - id of the admin in the table user
    * @param client_id - id of the owner in the table client
    */

    @IsNotEmpty()
    readonly name: string;
    
    readonly notes: string;

    @IsNotEmpty()
    readonly email: string;
  
    @IsNotEmpty()
    readonly address: string;

    @IsNotEmpty()
    readonly phone1: number;
  
    readonly phone2: number;
     
}