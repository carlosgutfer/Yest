import { Module } from '@nestjs/common';
import { CustomMenuMenuService } from './customMenu_menu.service';

@Module({
  providers: [CustomMenuMenuService]
})
export class CustomMenuMenuModule {}
