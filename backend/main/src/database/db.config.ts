import { IDatabaseConfig } from './dbConfig.interface';  
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  development  :{
        //username: 'yest',
        //password: 'i8T=xAx@Qc3Ak]w',
        username: "root",
        password: "",
        database: 'development',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
  },
};