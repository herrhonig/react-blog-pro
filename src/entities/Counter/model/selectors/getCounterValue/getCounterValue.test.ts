import { DeepPartial } from 'redux';
import { StateSchema } from 'app/providers/StoreProvider';

import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('', () => {
        // Объявляем стейт для селектора, но не весь, а конкретный кусок.
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
