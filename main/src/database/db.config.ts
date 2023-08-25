import { IDatabaseConfig } from './dbConfig.interface';  
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  development  :{
        username: 'root',
        password: 'root',
        database: 'development_database_name',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
  },
};