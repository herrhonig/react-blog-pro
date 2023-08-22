import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'global/types';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginError.test', () => {
    test('Should return username value typeof string', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
