import { TestAsyncThunk } from 'shared/lib/testAsyncThunk';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    id: '1',
    first: 'Alex',
    lastname: 'Ivanov',
    age: 30,
    avatar: '',
    city: 'Rome',
    country: Country.Sweden,
    currency: Currency.EUR,
    username: 'alexx77',
};

describe('updateProfileData.test', () => {
    test('Should handle success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const thunkResult = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(thunkResult.meta.requestStatus).toBe('fulfilled');
        expect(thunkResult.payload).toEqual(data);
    });

    test('Should handle error from API', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.reject(new Error('reject error')));
        const thunkResult = await thunk.callThunk();

        expect(thunkResult.meta.requestStatus).toBe('rejected');
        expect(thunkResult.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test('Should handle validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: undefined },
            },
        });
        const thunkResult = await thunk.callThunk();

        expect(thunkResult.meta.requestStatus).toBe('rejected');
        expect(thunkResult.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
