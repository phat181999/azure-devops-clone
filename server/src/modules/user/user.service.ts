import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { HashPasswordService } from 'src/common/services/password.service';
import { Users } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectConnection()
    private readonly connection: Connection,
    private hashPassword: HashPasswordService
  ) {
  }

  async create(createUserDto: CreateUserDto):Promise<Users[]> {
    const { user_name, email, password } = createUserDto;
    if(!user_name || !email || !password) {
      throw new BadRequestException('Missing required fields');
    }

    const hashedPassword = await this.hashPassword.hashPassword(password);

    const query = `INSERT INTO users(user_name, email, password) VALUES ($1, $2, $3) RETURNING *`;
    
    try {
      const user = await this.connection.query(query, [user_name, email, hashedPassword]);
      return user;
    } catch (error) {
      throw new InternalServerErrorException(`Failed to create user: ${error.message}`);
    }
  }

  async findAll(): Promise<Users[]> {
    const query = `SELECT * FROM users`;
    try {
      const users = await this.connection.query(query);
      return users
    } catch(err) {
      throw new InternalServerErrorException(`Failed to get users: ${err.message}`)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
