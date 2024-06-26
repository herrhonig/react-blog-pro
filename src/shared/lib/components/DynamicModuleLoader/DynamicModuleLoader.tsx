/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey, StateSchemaKey as StateSchemaName } from 'app/providers/StoreProvider/config/stateSchema';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

interface Props {
    reducers: ReducersList;
    children?: React.ReactNode;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<Props> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = false,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaName, reducer); // Регистрируем async reducer при mount.
            dispatch({ type: `@INIT ${name.toUpperCase()}_ASYNC_REDUCER` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaName); // Удаляем async reducer при unmount.
                    dispatch({ type: `@DESTROY ${name.toUpperCase()}_ASYNC_REDUCER` });
                });
            }
        };
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        < >
            {children}
        </>
    );
};
