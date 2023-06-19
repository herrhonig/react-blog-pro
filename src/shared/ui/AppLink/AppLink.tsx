import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface Props extends LinkProps {
    className?: string;
    theme? : AppLinkTheme;
}

export const AppLink: React.FC<Props> = ({
    to,
    theme = AppLinkTheme.PRIMARY,
    children,
    className,
    ...otherProps
}) => (
    <Link
        to={to}
        className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
        {...otherProps}
    >
        {children}
    </Link>
);
