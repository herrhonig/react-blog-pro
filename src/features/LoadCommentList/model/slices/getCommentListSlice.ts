import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { CommentListSchema } from '../types/CommentList.schema';

const commentsAdapter = createEntityAdapter({
    selectId: (comment: Comment) => comment.id,
});

// selectors:
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const getCommentListSlice = createSlice({
    name: 'getCommentListSlice',
    initialState: commentsAdapter.getInitialState<CommentListSchema>({
        isLoading: false,
        error: undefined,
        entities: {},
        ids: [],
    }),
    reducers: {},
});

export const { actions: getCommentListSliceActions } = getCommentListSlice;
export const { reducer: getCommentListSliceReducer } = getCommentListSlice;
