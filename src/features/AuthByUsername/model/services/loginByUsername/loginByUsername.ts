import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from 'entities/User';

import { USER_LOCALSTORAGE_KEY } from 'shared/const';

interface LoginByUsernameParams {
    username: string;
    password: string;
}

// enum LoginError {

// }

export const loginByUsername = createAsyncThunk<User, LoginByUsernameParams, {rejectValue: string}>(
    'login/loginByUsername',
    async (loginData: LoginByUsernameParams, thunkAPI) => {
        try {
            const response = await axios.post<User>(
                'http://localhost:8080/login',
                loginData,
            );

            if (!response.data) {
                throw new Error('Invalid response data!');
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data)); // Диспатчим экшн с ответом от API.

            return response.data;
        } catch (e) {
            console.log(e);

            return thunkAPI.rejectWithValue('Error');
        }
    },
);
