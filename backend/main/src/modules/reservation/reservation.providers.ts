import { Reservation } from './reservation.entity';

export const reservationProviders = [{
    provide: 'Reservation_REPOSITORY',
    useValue: Reservation,
}];