import { Injectable, UploadedFile } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Đây là NESTJS NHA!';
  }
}
