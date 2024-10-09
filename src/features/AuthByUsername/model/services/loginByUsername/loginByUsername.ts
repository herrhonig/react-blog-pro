import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from 'entities/User';

import { USER_LOCALSTORAGE_KEY } from 'shared/const';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameParams {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameParams,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (loginData: LoginByUsernameParams, thunkApi) => {
        const {
            extra,
            dispatch,
            rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.post<User>(
                'http://localhost:8080/login',
                loginData,
            );

            if (!response.data) {
                throw new Error('Invalid response data!');
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data)); // Диспатчим экшн с ответом от API.

            return response.data;
        } catch (e) {
            console.error(e);

            return rejectWithValue('Error');
        }
    },
);
