import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { AppRouter } from './providers/router';

export const App = () => {
    console.log('App');

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
