import { Module } from '@nestjs/common';
import { Restaurant_TableController } from './table.controller';
import { TableProviders } from './table.providers';
import { TableService } from './table.service';

@Module({
  providers: [TableService, ...TableProviders],
  exports: [TableService],
  controllers: [Restaurant_TableController],

})
export class TableModule {}
