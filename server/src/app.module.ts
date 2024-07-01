import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeycloakConfigService } from './common/utils/keycloak-service/keycloak-service';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, RouterModule, Routes } from '@nestjs/core';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/user.module';

const routes: Routes = [
  {
    path: 'api/v1',
    children: [
      {
        path: 'users',
        module: UserModule,
      },
    ],
  },
];
@Module({
  imports: [
    RouterModule.register(routes),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "tanphat99",
      database: "azure-clone",
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      logging: true,
    }),
    // KeycloakConnectModule.registerAsync({ useClass: KeycloakConfigService }),
    UserModule
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: ResourceGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RoleGuard,
    // },
  ],
})
export class AppModule {}
