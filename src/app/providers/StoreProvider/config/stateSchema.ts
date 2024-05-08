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

import { LoginSchema } from 'features/AuthByUsername';
import { CommentListSchema } from 'features/LoadCommentList';
import { AddCommentFormSchema } from 'features/AddCommentForm';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    /**
     * @async reducers:
     */
    profile?: ProfileSchema;
    loginForm?: LoginSchema;
    articleDetails?: ArticleDetailsSchema;
    articleDetailsComments?: CommentListSchema;
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
