import { Module } from '@nestjs/common';
import { customMenuProviders } from './customMenu.providers';
import { CustomMenuService } from './customMenu.service';

@Module({
  providers: [CustomMenuService, ...customMenuProviders],
  exports: [CustomMenuService],
})
export class CustomMenuModule {}
