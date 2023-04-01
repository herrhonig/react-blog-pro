import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',

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
        className={classNames(cls.Button, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
