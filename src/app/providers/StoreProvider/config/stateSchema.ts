/* eslint-disable no-unused-vars */
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';
import { AxiosInstance } from 'axios';

import { UserSchema } from 'entities/User';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { ArticleDetailsSchema } from 'entities/Article';

import { ArtilcesPageSchema } from 'pages/ArticlesPage';

import { LoginSchema } from 'features/AuthByUsername';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { GetArticleDetailsCommentListSchema } from 'features/GetArticleDetailsCommentList';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    /**
     * @async reducers:
     */
    profile?: ProfileSchema;
    loginForm?: LoginSchema;
    articlesPage?: ArtilcesPageSchema
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: GetArticleDetailsCommentListSchema;
    addCommentForm?: AddCommentFormSchema;
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema> ;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export type StateSchemaKey = keyof StateSchema;

/**
 * @type EnhancedStore - тип, после создания через createStore();
 */
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
