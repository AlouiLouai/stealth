import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from '../../config/database.config';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { UserController } from '../users/user.controller';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config) => ({
        type: config.type,
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.database,
        entities: [User],
        synchronize: true,
      }),
      inject: [databaseConfig.KEY],
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
