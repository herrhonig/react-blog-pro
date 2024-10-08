import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user', // Note: По id пользователя будет подхватываться relation userId из db.json
            },
        });

        if (!response) {
            throw new Error('Server error');
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('Error');
    }
});
