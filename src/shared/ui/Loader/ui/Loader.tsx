import React from 'react';
import { classNames } from 'shared/lib/classNames';

import './Loader.scss';

interface Props {
    className?: string;
}

export const Loader: React.FC<Props> = ({ className }) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
