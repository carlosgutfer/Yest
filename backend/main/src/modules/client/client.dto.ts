import { IsNotEmpty, Length } from "class-validator";

export class ClientDto {

    /** 
    * Class used to create the table Client
    *
    * @param name - Name of the user
    * @param firstname - first name of the user
    * @param secondname - if have, second name of the user
    * @param address - Place where the user live
    * @param CIF - Identity fiscal code

    */

    @IsNotEmpty()
    readonly name: string;
    
    @IsNotEmpty()
    readonly firstname: string;

    readonly secondname: string;

    @IsNotEmpty()
    @Length(9)
    readonly CIF: string;

    @IsNotEmpty()
    readonly address: string;
    
}