import { Reservation } from './reservation.entity';

export const reservationProviders = [{
    provide: 'RESERVATION_REPOSITORY',
    useValue: Reservation,
}];