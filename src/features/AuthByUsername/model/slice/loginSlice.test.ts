import { DeepPartial } from '@reduxjs/toolkit';

import { loginActions, loginReducer } from './loginSlice';

import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('Should set username ', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user1' };

        expect(loginReducer(
          state as LoginSchema,
          loginActions.setUsername('user1'),
        ))
            .toStrictEqual({ username: 'user1' });
    });

    test('Should set password ', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };

        expect(loginReducer(
          state as LoginSchema,
          loginActions.setPassword('123'),
        ))
            .toStrictEqual({ password: '123' });
    });
});
