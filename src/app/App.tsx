import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { getUserInited, userActions } from 'entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/themeProvider';

export const App: React.FC = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    const isInitedAuthData = useSelector(getUserInited);

    React.useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isInitedAuthData && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
