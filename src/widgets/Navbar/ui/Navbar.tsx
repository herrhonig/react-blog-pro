import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getUserAuthData, userActions } from 'entities/User';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { LoginModal } from 'features/AuthByUsername';

import cls from './Navbar.module.scss';

interface Props {
    className?: string;
}

export const Navbar: React.FC<Props> = ({
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
        console.log('ON CLICK LOGOUT');
        dispatch(userActions.logout());
    }), [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    className={cls.links}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClickLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>

        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
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
        </div>
    );
};
