import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve, reject) => {
// @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));

// export const AboutPageAsync = lazy(() => import('./AboutPage'));
