/* eslint-disable i18next/no-literal-string */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames';

import { Input } from 'shared/ui/Input/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername as loginByUsernameAsync } from '../../model/services/loginByUsername/loginByUsername';
import {
    getLoginUsername,
    getLoginPassword,
    getLoginLoading,
    getLoginError,
} from '../../model/selectors';

import cls from './LoginForm.module.scss';

export interface Props {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: React.FC<Props> = memo(({ className, onSuccess }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onClickLogin = useCallback(async () => {
        const result = await dispatch(loginByUsernameAsync({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />

                {error && (
                    <Text
                        theme={TextTheme.ERROR}
                        text={t('Неверный логин или пароль.')}
                    />
                )}

                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите имя')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />

                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onClickLogin}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
