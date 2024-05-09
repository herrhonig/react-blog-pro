import { FC, lazy } from 'react';
import { GetArticleDetailsCommentListProps } from './GetArticleDetailsCommentList';

export const GetArticleDetailsCommentListAsync = lazy<FC<GetArticleDetailsCommentListProps>>(() => new Promise((resolve, reject) => {
// @ts-ignore
    setTimeout(() => resolve(import('./GetArticleDetailsCommentList')), 1500);
}));
