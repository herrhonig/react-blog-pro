import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const';
// import { AnyAction } from 'redux';

interface LoginByUsernameParams {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameParams, {rejectValue: string}>(
    'login/loginByUsername',
    async (loginData: LoginByUsernameParams, thunkAPI: any) => {
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

            return thunkAPI.rejectValue(i18n.t('Неверный логин или пароль.'));
        }
    },
);
