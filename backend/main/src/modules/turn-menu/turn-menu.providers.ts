import { TurnMenu } from "./turn-menu.entity"; 

export const TurnMenuProviders = [{
    provide: 'TURN_MENU_REPOSITORY',
    useValue: TurnMenu,
}];