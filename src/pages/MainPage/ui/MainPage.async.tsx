import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve, reject) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')));
}));
