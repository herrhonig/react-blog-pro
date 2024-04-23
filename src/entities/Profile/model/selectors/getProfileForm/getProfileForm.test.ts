import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'global/types';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    const form = {
        first: 'Alex',
        lastname: 'Ivanov',
        age: 30,
        avatar: '',
        city: 'Rome',
        country: Country.Sweden,
        currency: Currency.EUR,
        username: 'alexx77',
    };

    test('Should return profile form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual({});
    });
});
