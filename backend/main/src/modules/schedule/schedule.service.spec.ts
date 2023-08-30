import { Test, TestingModule } from '@nestjs/testing';
import { Schedule } from './schedule.service';

describe('Schedule', () => {
  let service: Schedule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Schedule],
    }).compile();

    service = module.get<Schedule>(Schedule);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
