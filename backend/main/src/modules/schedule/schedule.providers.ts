import { Schedule } from './schedule.entity';


export const scheduleProviders = [{
    provide: 'Schedule_REPOSITORY',
    useValue: Schedule,
}];