import { Schedule } from './schedule.entity';


export const scheduleProviders = [{
    provide: 'SCHEDULE_REPOSITORY',
    useValue: Schedule,
}];