import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseModule from './db/database.modules';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => DatabaseModule,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
