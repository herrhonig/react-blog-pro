import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import { ArticleDetails } from 'entities/Article';

import cls from './ArticleDetailsPage.module.scss';

interface Props {
    className?: string;
}

const ArticleDetailsPage: React.FC<Props> = ({ className }) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('О статье')}
            <ArticleDetails />
        </div>
    );
};
export default memo(ArticleDetailsPage);
