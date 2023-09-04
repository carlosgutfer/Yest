import { Schedule } from './schedule.entity';

export const scheduleProviders = [{
    provide: 'USER_REPOSITORY',
    useValue: Schedule,
}];