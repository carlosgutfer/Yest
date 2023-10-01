import { Test, TestingModule } from '@nestjs/testing';
import { TurnMenuService } from './turn-menu.service';

describe('TurnMenuService', () => {
  let service: TurnMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TurnMenuService],
    }).compile();

    service = module.get<TurnMenuService>(TurnMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
