import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'global/types';
// import { avatar } from 'shared/assets/tests/storybook.jpeg';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    const data = {
        first: 'Alex',
        lastname: 'Ivanov',
        age: 30,
        avatar: '',
        city: 'Rome',
        country: Country.Sweden,
        currency: Currency.EUR,
        username: 'alexx77',
    };

    test('Should return profile data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
