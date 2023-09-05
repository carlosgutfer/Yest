import { Module } from '@nestjs/common';
import { ScheduleServices } from './schedule.service';
import { scheduleProviders } from './schedule.providers';

@Module({
  providers: [ScheduleServices, ...scheduleProviders]
})
export class SheduleModule {}
