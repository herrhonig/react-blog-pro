import {
    PayloadAction,
    createSlice,
} from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { commentListAdapter } from '../adapters/commentListAdapter';
import { GetArticleDetailsCommentListSchema } from '../types/GetArticleDetailsCommentList.schema';

const getArticleDetailsCommentListSlice = createSlice({
    name: 'getArticleDetailsCommentListSlice',
    initialState: commentListAdapter.getInitialState<GetArticleDetailsCommentListSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (
                    state,
                    action: PayloadAction<Comment[]>,
                ) => {
                    state.isLoading = false;
                    commentListAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: getArticleDetailsCommentListActions } = getArticleDetailsCommentListSlice;
export const { reducer: getArticleDetailsCommentListReducer } = getArticleDetailsCommentListSlice;
