import React from 'react';
import { DeepPartial } from 'redux';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';

import { StateSchema } from '../config/stateSchema';

interface Props {
    children?: React.ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: React.FC<Props> = ({
    children,
    initialState,
}) => {
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

/* *
 * На данном уровне идет связавание redux и react
 * */
