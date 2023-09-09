import { Module } from '@nestjs/common';
import { TableProviders } from './table.providers';
import { TableService } from './table.service';

@Module({
  providers: [TableService, ...TableProviders],
  exports: [TableService],
})
export class TableModule {}
