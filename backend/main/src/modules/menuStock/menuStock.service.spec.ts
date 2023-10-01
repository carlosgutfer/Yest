import { Test, TestingModule } from '@nestjs/testing';
import { MenuStockService } from './menuStock.service';

describe('MenuStockService', () => {
  let service: MenuStockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuStockService],
    }).compile();

    service = module.get<MenuStockService>(MenuStockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
