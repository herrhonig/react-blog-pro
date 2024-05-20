import React, { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Card.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode
}

export const Card: React.FC<Props> = memo(({
    className,
    children,
    ...restProps
}) => {
    let test;
    return (
        <div
            className={classNames(cls.Card, {}, [className])}
            {...restProps}
        >
            {children}
        </div>
    );
});
