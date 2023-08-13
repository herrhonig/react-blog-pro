import { FC, lazy } from 'react';
import { Props as LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve, reject) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')));
}));
