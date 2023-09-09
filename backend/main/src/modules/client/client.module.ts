import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { clientProviders } from './client.providers';
import { ClientService } from './client.service';

@Module({
  providers: [ClientService, ...clientProviders],
  exports: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
