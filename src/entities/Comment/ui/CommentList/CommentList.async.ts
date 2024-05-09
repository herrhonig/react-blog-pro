import { FC, lazy } from 'react';
import { CommentListProps } from './CommentList';

export const CommentListAsync = lazy<FC<CommentListProps>>(() => new Promise((resolve, reject) => {
// @ts-ignore
    setTimeout(() => resolve(import('./CommentList')), 1500);
}));
