import { Table, Column, Model, DataType} from 'sequelize-typescript';

@Table
export class Client extends Model<Client> {

    /** 
    * Class used to create the table Client
    *
    * @param name - Name of the user
    * @param firstname - first name of the user
    * @param secondname - if have, second name of the user
    * @param address - Place where the user live
    * @param CIF - Identity fiscal code

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
    })
    CIF: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;
    
}