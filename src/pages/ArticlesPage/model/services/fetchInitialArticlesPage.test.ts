import { TestAsyncThunk } from 'shared/lib/testAsyncThunk';
import { fetchInitialArticlesPage } from './fetchInitialArticlesPage';
import { fetchArticlesList } from './fetchArticlesList';

jest.mock('./fetchArticlesList');

describe('fetchInitialArticlesPage.test', () => {
    test('Should handle success', async () => {
        const thunk = new TestAsyncThunk(fetchInitialArticlesPage, {
            articlesPage: {
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                inited: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
    });

    test('Should handle not called', async () => {
        const thunk = new TestAsyncThunk(fetchInitialArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                inited: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
