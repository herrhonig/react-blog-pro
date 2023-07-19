import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { LoginModal } from 'features/AuthByUsername';

import cls from './Navbar.module.scss';

interface Props {
    className?: string; // этот класс стилей принимается снаружи чтобы поправить стили вроде отступов или другие доп момменты.
}

export const Navbar: React.FC<Props> = ({
    className,
}) => {
    const { t } = useTranslation(); // <- Передаем название namespace "about". По дефолту - "translation"
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onCloseModal = useCallback((() => {
        setIsAuthModal(false);
    }), []);

    const onOpenModal = useCallback((() => {
        setIsAuthModal(true);
    }), []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>

            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};
