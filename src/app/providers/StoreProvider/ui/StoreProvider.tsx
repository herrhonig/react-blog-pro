import React from 'react';
import { DeepPartial, ReducersMapObject } from 'redux';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';

import { StateSchema } from '../config/stateSchema';

interface Props {
    children?: React.ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: React.FC<Props> = ({
    children,
    initialState,
    asyncReducers,
}) => {
    const store = createReduxStore(
      initialState as StateSchema,
      asyncReducers as ReducersMapObject<StateSchema>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

/* *
 * На данном уровне идет связавание redux и react
 * */
