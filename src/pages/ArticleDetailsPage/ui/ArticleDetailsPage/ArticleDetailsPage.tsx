import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface Props {
    className?: string;
}

const ArticleDetailsPage: React.FC<Props> = ({ className }) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('О статье')}
        </div>
    );
};
export default memo(ArticleDetailsPage);
