import { Test, TestingModule } from '@nestjs/testing';
import { CustomMenuService } from './customMenu.service';

describe('CustomMenuService', () => {
  let service: CustomMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomMenuService],
    }).compile();

    service = module.get<CustomMenuService>(CustomMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
