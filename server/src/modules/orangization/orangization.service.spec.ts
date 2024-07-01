import { Test, TestingModule } from '@nestjs/testing';
import { OrangizationService } from './orangization.service';

describe('OrangizationService', () => {
  let service: OrangizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrangizationService],
    }).compile();

    service = module.get<OrangizationService>(OrangizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
