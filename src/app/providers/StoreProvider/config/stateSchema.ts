/* eslint-disable no-unused-vars */
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';

import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    /**
     * @async reducers:
     */
    loginForm?: LoginSchema;
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
