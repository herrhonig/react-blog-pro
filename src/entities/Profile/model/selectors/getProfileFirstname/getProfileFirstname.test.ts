import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'global/types';
// import { avatar } from 'shared/assets/tests/storybook.jpeg';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileFirstname } from './getProfileFirstname';

describe('getProfileFirstname.test', () => {
    test('Should return firstname', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    first: 'Alexx',
                },
            },
        };
        expect(getProfileFirstname(state as StateSchema)).toEqual('Alexx');
    });

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFirstname(state as StateSchema)).toEqual(undefined);
    });
});
