import axios from 'axios';

import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/testAsyncThunk';

import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
    test('Should handle success login', async () => {
        const userValueResponse = { username: 'user1', id: '1' };

        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValueResponse }));
        const thunkResult = await thunk.callThunk({ username: 'user1', password: '123' });

        expect(thunk.dispatch).toBeCalledWith(userActions.setAuthData(userValueResponse)); // Проверяем, вызывается ли экшн с данными от API.
        expect(thunk.dispatch).toBeCalledTimes(3);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunkResult.meta.requestStatus).toBe('fulfilled');
        expect(thunkResult.payload).toEqual(userValueResponse);
    });

    test('Should handle 403-error from API', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunkResult = await thunk.callThunk({ username: 'user1', password: '123' });

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunkResult.meta.requestStatus).toBe('rejected');
        expect(thunkResult.payload).toBe('Error');
    });
});
