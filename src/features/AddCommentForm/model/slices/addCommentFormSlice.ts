import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { AddCommentFormSchema } from '../types/addCommentForm.schema';

export interface CounterState {
  value: number
}

const initialState: AddCommentFormSchema = {
    text: '',
    error: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder
        //     .addCase(loginByUsername.pending, (state, action) => {
        //         state.error = undefined;
        //         state.isLoading = true;
        //     })
        //     .addCase(loginByUsername.fulfilled, (state, action) => {
        //         state.isLoading = false;
        //     })
        //     .addCase(loginByUsername.rejected, (state, action) => {
        //         state.isLoading = false;
        //         state.error = action.payload;
        //     });
    },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
