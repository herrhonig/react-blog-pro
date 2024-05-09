import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve, reject) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
