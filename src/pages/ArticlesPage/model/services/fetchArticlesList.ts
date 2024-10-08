import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../selectors/articlesPageSelectors';

interface FetchArticlesListParams {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListParams,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (params, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const { page = 1 } = params;

    const limit = getArticlesPageLimit(getState());

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user', // Note: По id пользователя будет подхватываться relation userId из db.json
                _page: page,
                _limit: limit,
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
