import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleServices } from './schedule.service';

describe('Schedule', () => {
  let service: ScheduleServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduleServices],
    }).compile();

    service = module.get<ScheduleServices>(ScheduleServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
