import { Injectable, Inject } from '@nestjs/common';
import { Schedule } from './schedule.entity';
import { ScheduleDto } from './schedule.dto';

@Injectable()
export class ScheduleServices {

    constructor(@Inject('SCHEDULE_REPOSITORY') private readonly scheduleRepository: typeof Schedule) { }

    async create(schedule: ScheduleDto): Promise<Schedule> {
        return await this.scheduleRepository.create<Schedule>(schedule);
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedSchedule]] = await this.scheduleRepository.update({ ...data }, { where: { id }, returning: true });
        return { numberOfAffectedRows, updatedSchedule };
    }
    
    async delete(id) {
        return await this.scheduleRepository.destroy({ where: { id }});
    }

    /*
        Methods for owner and user_plus
    */
    async findAllByIdAndClient(id: number, client_id: number): Promise<Schedule[]> {
        
        return await this.scheduleRepository.findAll<Schedule>({ where: { id , client_id}});
    }
    
    async findAllByTypeAndClient(type: string, client_id: number): Promise<Schedule[]> {
        return await this.scheduleRepository.findAll<Schedule>({ where: { type, client_id }});
    }

    async findAllByClient(client_id): Promise<Schedule[]> {
        return await this.scheduleRepository.findAll<Schedule>({where : {client_id}});
    }

    /*
        Methods for admin
    */
    async findAllByType(type: string): Promise<Schedule[]> {
        return await this.scheduleRepository.findAll<Schedule>({ where: { type}});
    }

    async findById(id: number): Promise<Schedule> {
        return await this.scheduleRepository.findByPk<Schedule>(id);
    }

    async findAll(): Promise<Schedule[]> {
        return await this.scheduleRepository.findAll<Schedule>();
    }
}
