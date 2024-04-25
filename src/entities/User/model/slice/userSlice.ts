import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from 'shared/const';

import { User, UserSchema } from '../types/userSchema';

export interface CounterState {
  value: number
}

const initialState: UserSchema = {
    isInited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }

            state.isInited = true; // user is inited
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
