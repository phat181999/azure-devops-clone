import { Injectable } from '@nestjs/common';
import {SLAT} from '../../enviroments/index'
import { hash, compare } from 'bcrypt';

@Injectable()
export class HashPasswordService {
    async hashPassword (password: string): Promise<string> {
        return await hash(password, 10);
    };
    
    async comparePassword  (
        password: string,
        hash: string,
      ): Promise<boolean> {
        return await compare(password, hash);
    };  
}

