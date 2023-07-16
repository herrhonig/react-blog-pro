import { ReactNode } from 'react';
import { DeepPartial } from 'redux';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import i18nForTests from 'shared/config/i18n/i18nForTests';

import { render } from '@testing-library/react';

export interface ComponentRenderOptions {
    route?: string;
    initialState: DeepPartial<StateSchema> ;
}

export function componentRender(component: ReactNode, options?: ComponentRenderOptions) {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
