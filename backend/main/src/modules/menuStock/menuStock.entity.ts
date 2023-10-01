import { Table, Column, Model, DataType, ForeignKey, BelongsTo,BeforeValidate } from 'sequelize-typescript';
import { Stock } from '../Stock/stock.entity'
import { Menu } from '../Menu/menu.entity';
import { Client } from '../client/client.entity';

@Table
export class MenuStock extends Model<MenuStock> {

    /** 
    * Class used to create the table reservation
    * 
    * @param units_taken units of stock required
    * @param ref_code reference code  in stock table
    * @param client_id the owner of the restaurant
    * @param menu_id id of item in menu table
    */

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    units_taken: number;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    ref_code: string;

    @BeforeValidate
    static async checkRefCodeExistsAndBelongsToClient(instance: MenuStock) {
        const stock = await Stock.findOne({
            where: {
                ref_code: instance.ref_code,
                client_id: instance.client_id,
            },
        });

        if (!stock) {
            throw new Error(`No existe un registro en Stock con ref_code: ${instance.ref_code}`);
        }
    }


    @ForeignKey(() => Menu)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    menu_id: number;


    @BelongsTo(() => Menu)
    menu: Menu;
    
    @ForeignKey(() => Client)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    client_id: number | null;

    @BelongsTo(() => Client)
    client: Client;  
}