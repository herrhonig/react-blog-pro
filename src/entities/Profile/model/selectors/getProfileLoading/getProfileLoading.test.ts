import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'global/types';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileLoading.test', () => {
    test('Should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileLoading(state as StateSchema)).toEqual(true);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileLoading(state as StateSchema)).toEqual(false);
    });
});
