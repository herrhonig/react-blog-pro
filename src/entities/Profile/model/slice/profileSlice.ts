import { createSlice } from '@reduxjs/toolkit';

import { Profile, ProfileShema } from '../types/profile';

export interface CounterState {
  value: number
}

const initialState: ProfileShema = {
    readonly: true,
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
