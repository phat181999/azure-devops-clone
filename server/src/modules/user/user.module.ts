import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { HashPasswordService } from 'src/common/services/password.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    
  ],
  controllers: [UserController],
  providers: [UserService, HashPasswordService],
})
export class UserModule {}
