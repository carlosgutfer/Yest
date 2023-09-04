import { Injectable, Inject } from '@nestjs/common';
import { Schedule } from './schedule.entity';

@Injectable()
export class ScheduleServices {

    constructor(@Inject('USER_REPOSITORY') private readonly scheduleRepository: typeof Schedule) { }



}
