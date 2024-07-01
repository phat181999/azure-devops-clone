import { Module } from '@nestjs/common';
import { OrangizationService } from './orangization.service';
import { OrangizationController } from './orangization.controller';

@Module({
  controllers: [OrangizationController],
  providers: [OrangizationService],
})
export class OrangizationModule {}
