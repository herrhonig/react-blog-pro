import { lazy } from 'react';

export const AddCommentFormAsync = lazy(() => new Promise((resolve, reject) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
