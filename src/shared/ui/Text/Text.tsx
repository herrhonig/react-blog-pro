import React from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

// export type TextTheme = Partial<keyof typeof TextThemeMap>;

interface Props {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme,
    underline?: boolean;
}

export const Text: React.FC<Props> = ({
    className,
    title,
    text,
    underline = false,
    theme = TextTheme.PRIMARY,
}) => {
    const mods: Record<string, boolean> = {
        [cls.underline]: underline,
    };

    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {title && <p className={classNames(cls.title, mods)}>{title}</p>}
            {text && <p className={classNames(cls.text, mods)}>{text}</p>}
        </div>
    );
};
