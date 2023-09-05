import { Client } from './client.entity';

export const clientProviders = [{
    provide: 'Client_REPOSITORY',
    useValue: Client,
}];