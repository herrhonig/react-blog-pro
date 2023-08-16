import { DeepPartial, ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

import { createReducerManager } from './reducerManager';

import type { StateSchema } from './stateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        counter: counterReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState, // Может понадобиться для тестов/сторибук итд

    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
