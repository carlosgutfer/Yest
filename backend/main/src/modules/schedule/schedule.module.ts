import { Module } from '@nestjs/common';
import { ScheduleServices } from './schedule.service';
import { scheduleProviders } from './schedule.providers';
import { ScheduleController } from './schedule.controller';
@Module({
  providers: [ScheduleServices, ...scheduleProviders],
  exports: [ScheduleServices],
  controllers: [ScheduleController],
})
export class SheduleModule {}
