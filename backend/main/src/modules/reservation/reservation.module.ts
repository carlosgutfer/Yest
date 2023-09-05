import { Module } from '@nestjs/common';
import { reservationProviders } from './reservation.providers';
import { ReservationService } from './reservation.service';

@Module({
  providers: [ReservationService, ...reservationProviders],
  exports: [ReservationService]
})
export class ReservationModule {}
