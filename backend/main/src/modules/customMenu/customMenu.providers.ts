import { CustomMenu } from './CustomMenu.entity';

export const customMenuProviders = [{
    provide: 'CUSTOM_MENU_REPOSITORY',
    useValue: CustomMenu,
}];