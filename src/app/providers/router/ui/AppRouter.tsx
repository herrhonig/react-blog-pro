import React, {
    Suspense,
    memo,
    useCallback,
} from 'react';

import { Route, Routes } from 'react-router-dom';

import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from './RequireAuth';

type Props = {}

const AppRouter: React.FC<Props> = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly
                        ? (
                            <RequireAuth>
                                {element}
                            </RequireAuth>
                        )
                        : element
                }
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
                {/* {routes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))} */}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
