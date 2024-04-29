import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'artileDetails/fetchArticleById',
    async (articleId, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`);

            if (!response) {
                throw new Error('Server error');
            }

            return response.data;
        } catch (e) {
            console.log(e);

            return rejectWithValue('Error');
        }
    },
);
