import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: React.FC<Props> = ({
    className,
    theme,
    children,
    ...otherProps
}) => (
    <button
        className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
        {...otherProps}
    >
        {children}
    </button>
);
