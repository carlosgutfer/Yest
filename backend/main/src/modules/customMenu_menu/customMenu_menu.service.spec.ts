import { Test, TestingModule } from '@nestjs/testing';
import { CustomMenuMenuService } from './customMenu_menu.service';

describe('CustomMenuMenuService', () => {
  let service: CustomMenuMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomMenuMenuService],
    }).compile();

    service = module.get<CustomMenuMenuService>(CustomMenuMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
