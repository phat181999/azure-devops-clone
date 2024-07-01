import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Azure Devops')
    .setDescription('')
    .setVersion('1.0')
    .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,  // Automatically transform payload to DTO instance
    whitelist: true,  // Strip away unexpected properties from incoming objects
    forbidNonWhitelisted: true,  // Throw an error on unexpected properties
  }));
  await app.listen(3000);
}
bootstrap();
