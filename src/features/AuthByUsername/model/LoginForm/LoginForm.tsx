import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import { Input } from 'shared/ui/Input/ui/Input';
import { Button } from 'shared/ui/Button/Button';

import cls from './LoginForm.module.scss';

interface Props {
    className?: string;
}

export const LoginForm: React.FC<Props> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus placeholder={t('Введите имя')} type="text" className={cls.input} />
            <Input placeholder={t('Введите пароль')} type="text" className={cls.input} />

            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
