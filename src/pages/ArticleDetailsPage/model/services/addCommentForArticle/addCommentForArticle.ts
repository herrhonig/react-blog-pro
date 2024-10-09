import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';

import { addCommentFormActions } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import { fetchCommentsByArticleId } from 'features/GetArticleDetailsCommentList/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetailsPage/addCommentForArticle',
    async (commentText, thunkApi) => {
        const {
            extra,
            rejectWithValue,
            getState,
            dispatch,
        } = thunkApi;

        try {
            const user = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!user || !commentText || !article) {
                rejectWithValue('Invalid parameters to send comment');
            }

            const response = await extra.api.post<Comment>('/comments', {
                articleId: article!.id,
                userId: user!.id,
                body: commentText,
            });

            if (!response.data) {
                throw new Error('Server error');
            }

            dispatch(addCommentFormActions.setText(''));
            dispatch(fetchCommentsByArticleId(article?.id));

            return response.data;
        } catch (e) {
            console.error(e);

            return rejectWithValue('Error');
        }
    },
);
