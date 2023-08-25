import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {

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
        allowNull: false,
        values: ['admin', 'owner', 'user_plus', 'user', 'non_user'],
    })
    permiss: string;

    @Column({
        type: DataType.ENUM,
        values: ['male', 'female'],
        allowNull: false,
    })
    gender: string;

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

}