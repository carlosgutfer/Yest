import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { reservationProviders } from './reservation.providers';
import { ReservationService } from './reservation.service';

@Module({
  providers: [ReservationService, ...reservationProviders],
  exports: [ReservationService],
  controllers: [ReservationController],

})
export class ReservationModule {}
