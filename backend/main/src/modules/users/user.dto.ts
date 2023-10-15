import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';



enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

export class UserDto {
    /** 
    * Class used to send a new user to the database
    *
    * @param name - Name of the user
    * @param firstname - first name of the user
    * @param secondname - if have, second name of the user
    * @param role - type of user
    * @param email - email of the user
    * @param gender - gender of the user
    * @param address - Place where the user live
    * @param password - password to login 
    * @param phone1 - number of contact
    * @param phone2 - second number of contact
    * @param client_id - id of the table client
    */


    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly firstname: string;

    readonly secondname: string;

    @IsNotEmpty()
    readonly role_id: number;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @IsNotEmpty()
    @IsEnum(Gender, {
        message: 'gender must be either male or female',
    })
    readonly gender: Gender;

    @IsNotEmpty()
    readonly address: string;

    @IsNotEmpty()
    readonly phone1: number;
    
    readonly phone2: number;

    readonly client_id: number | null;
}