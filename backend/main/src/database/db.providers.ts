import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './db.config';
import { User } from '../modules/users/user.entity';
import { Schedule } from 'src/modules/schedule/schedule.entity';

export const databaseProviders = [{
    provide: 'SEQUELIZE',
    useFactory: async () => {
        let config;
        config = databaseConfig.development;
        const sequelize = new Sequelize(config);
        sequelize.addModels([User, Schedule]);
        await sequelize.sync();
        return sequelize;
    },
}];