import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'global/types';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors.test', () => {
    test('Should return validate errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.INCORRECT_AGE],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(['INCORRECT_AGE']);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
    });
});
