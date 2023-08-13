import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername as loginByUsernameAsync } from '../../model/services/loginByUsername/loginByUsername';

import cls from './LoginForm.module.scss';

interface Props {
    className?: string;
}

export const LoginForm: React.FC<Props> = memo(({ className }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const {
        username,
        password,
        error,
        isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onClickLogin = useCallback(() => {
        dispatch(loginByUsernameAsync({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />

            {error && (
                <Text
                    theme={TextTheme.ERROR}
                    text={error}
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
    );
});
