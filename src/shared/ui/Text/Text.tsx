import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface Props {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme,
    underline?: boolean;
    align?: TextAlign;
}

export const Text: React.FC<Props> = memo(({
    className,
    title = '',
    text = '',
    underline = false,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
}) => {
    const mods: Record<string, boolean> = {
        [cls.underline]: underline,
        [cls[theme]]: true,
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={classNames(cls.title, mods)}>{title}</p>}
            {text && <p className={classNames(cls.text, mods)}>{text}</p>}
        </div>
    );
});
