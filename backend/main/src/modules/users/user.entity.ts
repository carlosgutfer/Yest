import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {

    /** 
    * Class used to create the table User
    *
    * @param name - Name of the user
    * @param firstname - first name of the user
    * @param secondname - if have, second name of the user
    * @param permiss - type of user
    * @param email - email of the user
    * @param gender - gender of the user
    * @param adress - Place where the user live
    * @param password - password to login 
    * @param phone1 - number of contact
    * @param phone2 - second number of contact
    */

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;
    
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstname: string;

    
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    secondname: string;

    
    @Column({
        type: DataType.STRING,
        allowNull: false,
        values: ['admin', 'owner', 'user_plus', 'user', 'non_user'],
    })
    permiss: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;


    @Column({
        type: DataType.STRING,
        values: ['male', 'female'],
        allowNull: false,
    })
    gender: string;

    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    addres: string;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    PHONE1: number;
  
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    PHONE2: number;
    
}