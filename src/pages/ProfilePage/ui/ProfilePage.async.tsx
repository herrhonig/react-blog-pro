import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve, reject) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')));
}));
