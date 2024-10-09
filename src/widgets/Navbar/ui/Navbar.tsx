import { useDispatch, useSelector } from 'react-redux';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getUserAuthData, userActions } from 'entities/User';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { LoginModal } from 'features/AuthByUsername';

import cls from './Navbar.module.scss';

interface Props {
    className?: string;
}

export const Navbar: React.FC<Props> = memo(({
    className,
}) => {
    const { t } = useTranslation(); // <- Передаем название namespace "about". По дефолту - "translation"
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onCloseModal = useCallback((() => {
        setIsAuthModal(false);
    }), []);

    const onOpenModal = useCallback((() => {
        setIsAuthModal(true);
    }), []);

    const onClickLogout = useCallback((() => {
        dispatch(userActions.logout());
    }), [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    className={cls.links}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClickLogout}
                >
                    {t('Выйти')}
                </Button>
            </header>

        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>

            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
