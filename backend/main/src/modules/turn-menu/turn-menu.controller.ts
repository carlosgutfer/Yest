import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TurnMenuService } from './turn-menu.service';
import { TurnMenu } from './turn-menu.entity';




@Controller('turn_menu')

export class TurnMenuController {

    constructor(private readonly TurnMenuServices: TurnMenuService) {}

    @UseGuards(AuthGuard('jwt'))
    @Post('new')
    create(@Body() TurnMenuDto: any): Promise<TurnMenu> {
        return this.TurnMenuServices.create(TurnMenuDto);
    }


}