import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve, reject) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
