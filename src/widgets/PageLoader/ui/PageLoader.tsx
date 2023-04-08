import React from 'react';
import { classNames } from 'shared/lib/classNames';

import { Loader } from 'shared/ui/Loader/ui/Loader';

import cls from './PageLoader.module.scss';

interface Props {
    className?: string;
}

export const PageLoader: React.FC<Props> = ({ className }) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
