import { lazy } from 'react';

export const GetArticleDetailsCommentListAsync = lazy(() => new Promise((resolve, reject) => {
// @ts-ignore
    setTimeout(() => resolve(import('./GetArticleDetailsCommentList')), 1500);
}));
