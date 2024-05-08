import { TestAsyncThunk } from 'shared/lib/testAsyncThunk';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData.test', () => {
    test('Should handle success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const thunkResult = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunkResult.meta.requestStatus).toBe('fulfilled');
        expect(thunkResult.payload).toEqual(data);
    });

    test('Should handle 403-error from API', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.reject(new Error('reject error')));
        const thunkResult = await thunk.callThunk('1');

        expect(thunkResult.meta.requestStatus).toBe('rejected');
    });
});
