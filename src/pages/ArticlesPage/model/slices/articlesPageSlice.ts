import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { articlesPageAdapter } from '../adapters/articlesPageAdapter';
import { ArtilcesPageSchema } from '../types/artilcesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList';

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesPageAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesPageAdapter.getInitialState<ArtilcesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, _) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    articlesPageAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice;
