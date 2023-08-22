import { StateSchema } from 'app/providers/StoreProvider';

import { DeepPartial } from 'global/types';

import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('Should return counter value', () => {
        // Объявляем стейт для селектора, но не весь, а конкретный кусок.
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };

        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
