import { Module } from '@nestjs/common';
import { clientProviders } from './client.providers';
import { ClientService } from './client.service';

@Module({
  providers: [ClientService, ...clientProviders],
  exports: [ClientService],
})
export class ClientModule {}
