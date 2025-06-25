import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';
import { Dialect } from 'sequelize';

const dbDialect = config.dialect as Dialect || 'postgres';

export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': dbDialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  },
  'storage': ':memory:',
});
