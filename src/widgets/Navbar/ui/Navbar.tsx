import React from 'react';
import { classNames } from 'shared/lib/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface Props {
    className?: string; // этот класс стилей принимается снаружи чтобы поправить стили вроде отступов или другие доп момменты.
}

export const Navbar: React.FC<Props> = ({ className }) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>ГЛАВНАЯ</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О САЙТЕ</AppLink>
        </div>
    </div>
);
