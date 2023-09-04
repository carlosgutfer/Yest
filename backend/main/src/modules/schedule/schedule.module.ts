import { Module } from '@nestjs/common';
import { ScheduleServices } from './schedule.service';
import { scheduleProviders } from './users.providers';

@Module({
  providers: [ScheduleServices, ...scheduleProviders ]
})
export class SheduleModule {}
