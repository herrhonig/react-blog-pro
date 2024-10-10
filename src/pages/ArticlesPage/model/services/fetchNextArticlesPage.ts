import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageNumber,
    getArticlesPageIsLoading,
} from '../selectors/articlesPageSelectors';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticlesList } from './fetchArticlesList';

const PAGE_STEP = 1;

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const isLoading = getArticlesPageIsLoading(getState());
    const hasMore = getArticlesPageHasMore(getState());
    const pageNumber = getArticlesPageNumber(getState());

    if (!hasMore || isLoading) return;

    dispatch(articlesPageActions.setPage(pageNumber + PAGE_STEP));
    dispatch(fetchArticlesList({ page: pageNumber + PAGE_STEP }));
});
