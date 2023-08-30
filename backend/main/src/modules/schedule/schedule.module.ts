import { Module } from '@nestjs/common';
import { Schedule } from './schedule.service';

@Module({
  providers: [Schedule]
})
export class SheduleModule {}
