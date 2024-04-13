import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Roles, Unprotected } from 'nest-keycloak-connect';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles({ roles: ['user'] })
  getHello(): string {
    return this.appService.getHello();
  }
}
