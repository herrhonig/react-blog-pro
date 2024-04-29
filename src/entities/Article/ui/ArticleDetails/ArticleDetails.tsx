import React from 'react';
import { classNames } from 'shared/lib/classNames';

// import cls from './ArticleDetails.module.scss';

interface Props {
    className?: string;
}

export const ArticleDetails: React.FC<Props> = ({ className }) => {
    let test;
    return (
        // <div className={classNames(cls.ArticleDetails, {}, [className])}>
        <div>
            ArticleDetails COMPONENT
        </div>
    );
};
