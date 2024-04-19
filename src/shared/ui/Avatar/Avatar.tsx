import React, { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';

import { Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface Props {
    className?: string;
    src?:string;
    alt?: string;
    size?: number;
}

export const Avatar: React.FC<Props> = ({
    className,
    src = '',
    alt = '',
    size,
}) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, mods, [className])}
            style={styles}
        />
    );
};
