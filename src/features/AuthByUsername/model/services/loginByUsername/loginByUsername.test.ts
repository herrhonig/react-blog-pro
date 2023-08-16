import axios from 'axios';

import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/testAsyncThunk';

import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true); // замоканный вызов Аксиос для Jest;

describe('loginByUsername.test', () => {
    test('Should handle success login', async () => {
        const userValueResponse = { username: 'user1', id: '1' };

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValueResponse }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const thunkResult = await thunk.callThunk({ username: 'user1', password: '123' });

        expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userValueResponse)); // Проверяем, вызывается ли экшн с данными от API.
        expect(thunk.dispatch).toBeCalledTimes(3);

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunkResult.meta.requestStatus).toBe('fulfilled');
        expect(thunkResult.payload).toEqual(userValueResponse);
    });

    test('Should handle 403-error from API', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const thunkResult = await thunk.callThunk({ username: 'user1', password: '123' });

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunkResult.meta.requestStatus).toBe('rejected');
        expect(thunkResult.payload).toBe('Error');
    });
});
