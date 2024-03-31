// src/typeorm.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const DatabaseModule: TypeOrmModuleOptions = {
  // Your TypeORM configuration options here
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'tanphat99',
  database: 'azure-clone',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false, //check create and update if exist
};

export default DatabaseModule;
