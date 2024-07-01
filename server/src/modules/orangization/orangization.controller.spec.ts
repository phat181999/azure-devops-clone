import { Test, TestingModule } from '@nestjs/testing';
import { OrangizationController } from './orangization.controller';
import { OrangizationService } from './orangization.service';

describe('OrangizationController', () => {
  let controller: OrangizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrangizationController],
      providers: [OrangizationService],
    }).compile();

    controller = module.get<OrangizationController>(OrangizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
