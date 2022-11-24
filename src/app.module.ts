import * as dotenv from 'dotenv';
dotenv.config();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// const config: MysqlConnectionOptions = {
//   type: 'mysql',
//   host: process.env.HOST,
//   port: Number(process.env.PORT),
//   username: 'root',
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   entities: ['dist/**/*.entity.js'],
//   //   synchronize: true, // u produkciji umjesto ovog koristiti migracije
//   //   dropSchema: true,
// };

// @Module({
//   imports: [PostsModule, TypeOrmModule.forRoot(config)],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
