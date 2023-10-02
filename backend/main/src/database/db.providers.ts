import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './db.config';
import { User } from '../modules/users/user.entity';
import { Schedule } from 'src/modules/schedule/schedule.entity';
import { Client } from 'src/modules/client/client.entity';
import { Order } from 'src/modules/order/order.entity';
import { Order_stock } from 'src/modules/order_stock/order_stock.entity';
import { Reservation } from 'src/modules/reservation/reservation.entity';
import { Restaurant } from 'src/modules/restaurant/restaurant.entity';
import { Stock } from 'src/modules/stock/Stock.entity';
import { Restaurant_Table } from 'src/modules/table/table.entity';
import { Menu } from 'src/modules/menu/menu.entity';
import { MenuStock } from 'src/modules/menuStock/menuStock.entity';
import { TurnMenu } from 'src/modules/turn-menu/turn-menu.entity';

export const databaseProviders = [{
    provide: 'SEQUELIZE',
    useFactory: async () => {
        let config;
        config = databaseConfig.development;
        const sequelize = new Sequelize(config);
        sequelize.addModels([User, 
                            Schedule, 
                            Client, 
                            Order, 
                            Order_stock, 
                            Reservation, 
                            Restaurant, 
                            Stock, 
                            Restaurant_Table, 
                            Menu, 
                            MenuStock,
                            TurnMenu]);
        await sequelize.sync();
        return sequelize;
    },
}];