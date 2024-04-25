import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve, reject) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
