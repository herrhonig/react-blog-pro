import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'global/types';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginError.test', () => {
    test('Should return password value typeof string', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
