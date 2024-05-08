import { lazy } from 'react';

export const CommentListLoaderAsync = lazy(() => new Promise((resolve, reject) => {
// @ts-ignore
    setTimeout(() => resolve(import('./CommentListLoader')), 1500);
}));
