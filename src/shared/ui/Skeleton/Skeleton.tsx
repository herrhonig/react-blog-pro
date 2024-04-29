import React, { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Skeleton.module.scss';

interface Props {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton: React.FC<Props> = memo(({
    className,
    height,
    width,
    border = '8px',
}) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});
