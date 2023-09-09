import { Injectable, Inject } from '@nestjs/common';
import { ReservationDto } from './reservation.dto';
import { Reservation } from './reservation.entity';
import { User } from '../users/user.entity';

@Injectable()
export class ReservationService {

    constructor(@Inject('RESERVATION_REPOSITORY') private readonly ReservationRepository: typeof Reservation) { }

    async create(Reservation: ReservationDto): Promise<Reservation> {
        return await this.ReservationRepository.create<Reservation>(Reservation);
    }
    
    async delete(id) {
      return await this.ReservationRepository.destroy({ where: { id }});
    }

    async update(id, data) {
      const [numberOfAffectedRows, [updatedReservation]] = await this.ReservationRepository.update({ ...data }, { where: { id }, returning: true });
      return { numberOfAffectedRows, updatedReservation };
    }

    async findAllByDate(date: Date): Promise<Reservation[]> {
        try {
            return await this.ReservationRepository.findAll<Reservation>({where: { date },
              include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
          } catch (error) {
            throw error;
          }
    }

    async findAll(): Promise<Reservation[]> {
      try {
          return await this.ReservationRepository.findAll<Reservation>({include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
        } catch (error) {
          throw error;
        }
    }

    async findOneById(id: number): Promise<Reservation> {
        try {
            return await this.ReservationRepository.findOne<Reservation>({where: { id },
              include: [{ model: User, attributes: { include: ['name', 'firstname'] } }]});
          } catch (error) {
            throw error;
          }
    }


    /* Methods for owner and user_plus */
    async findOneByDateAndClient(date: Date, table_id:number ,client_id: number): Promise<Reservation> {
      try {
          return await this.ReservationRepository.findOne<Reservation>({where: { date, client_id },
            include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
        } catch (error) {
          throw error;
        }
  }

  async findOneByIdandClient(id: number, client_id:number): Promise<Reservation> {
    try {
        return await this.ReservationRepository.findOne<Reservation>({where: { id, client_id },
          include: [{ model: User, attributes: { include: ['name', 'firstname'] } }]});
      } catch (error) {
        throw error;
      }
}



  async findAllByClient(client_id: number): Promise<Reservation[]> {
        try {
            return await this.ReservationRepository.findAll<Reservation>({where: {client_id },
              include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
          } catch (error) {
            throw error;
          }
    }
  
  async findAllByUserAndClient(user_id: number, client_id: number): Promise<Reservation[]> {
      try {
          return await this.ReservationRepository.findAll<Reservation>({where: { user_id, client_id },
            include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
        } catch (error) {
          throw error;
        }
      }

    async findAllByDateAndClient(date: Date, client_id: number): Promise<Reservation[]> {
        try {
            return await this.ReservationRepository.findAll<Reservation>({where: { date, client_id },
              include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
          } catch (error) {
            throw error;
          }
        }

    async findAllByTableAndClient(table_id: number, client_id: number): Promise<Reservation[]> {
            try {
                return await this.ReservationRepository.findAll<Reservation>({where: { table_id, client_id },
                  include: [{ model: User, attributes: { include: ['name', 'firstname'] } }],});
              } catch (error) {
                throw error;
              }
            }

}


