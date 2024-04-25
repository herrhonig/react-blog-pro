import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface Props {
    className?: string;
}

const ArticlesPage: React.FC<Props> = ({ className }) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('Статьи')}
        </div>
    );
};

export default memo(ArticlesPage);
