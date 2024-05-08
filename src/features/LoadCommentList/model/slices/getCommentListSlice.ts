import {
    PayloadAction,
    createSlice,
} from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

import { CommentListSchema } from '../types/CommentList.schema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { commentListAdapter } from '../adapters/commentListAdapter';

const getCommentListSlice = createSlice({
    name: 'getCommentListSlice',
    initialState: commentListAdapter.getInitialState<CommentListSchema>({
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

export const { actions: getCommentListSliceActions } = getCommentListSlice;
export const { reducer: getCommentListSliceReducer } = getCommentListSlice;
