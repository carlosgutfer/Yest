import { Table, Column, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Client } from '../client/client.entity';
import { Menu } from '../menu/menu.entity';
import { CustomMenu } from '../customMenu/CustomMenu.entity';

@Table
export class CustomMenuMenu extends Model<CustomMenuMenu> {

    /** 
    * Class used to create the table Client
    * @param suplement - If the item is inside any daily menu and have a suplment price
    * @param menu_id - the IVA of the product
    * @param customMenu_id - the ID of the restaurant asociatted 
    * @param client_id - the ID of the client
    */

     @Column({
        type: DataType.DOUBLE,
        allowNull: true,
    })
    name: number;
    

    @ForeignKey(() => Menu)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    menu_id: number;


    @BelongsTo(() => Menu)
    menu: Menu; 


    @ForeignKey(() => CustomMenu)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    customMenu_id: number;


    @BelongsTo(() => CustomMenu)
    customMenu: Menu; 

    @ForeignKey(() => Client)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    client_id: number | null;

    @BelongsTo(() => Client)
    client: Client;  
    
}