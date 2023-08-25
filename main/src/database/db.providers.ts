import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './db.config';
import { User } from '../modules/users/user.entity';
import { Post } from 'src/modules/posts/post.entity';

export const databaseProviders = [{
    provide: 'SEQUELIZE',
    useFactory: async () => {
        let config;
        config = databaseConfig.development;
        const sequelize = new Sequelize(config);
        sequelize.addModels([User, Post]);
        await sequelize.sync();
        return sequelize;
    },
}];