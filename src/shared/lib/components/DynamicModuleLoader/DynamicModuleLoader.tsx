/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/stateSchema';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface Props {
  reducers: ReducersList;
  children?: React.ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<Props> = (props) => {
    const { children, reducers, removeAfterUnmount = false } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];

            // Add new reducer if not exist:
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer); // Регистрируем async reducer при mount.
                dispatch({ type: `@INIT_${name.toUpperCase()}_ASYNC_REDUCER` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey); // Удаляем async reducer при unmount.
                    dispatch({ type: `@DESTROY_${name.toUpperCase()}_ASYNC_REDUCER` });
                });
            }
        };
    }, []);

    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{children}</>
    );
};
