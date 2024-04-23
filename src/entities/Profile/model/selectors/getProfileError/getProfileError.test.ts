import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'global/types';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('Should return profile error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error_test',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error_test');
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual('');
    });
});
