import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: 'root',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  //   synchronize: true, // u produkciji umjesto ovog koristiti migracije
  //   dropSchema: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
