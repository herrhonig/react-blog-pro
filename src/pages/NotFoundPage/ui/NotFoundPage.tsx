import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import cls from './NotFoundPage.module.scss';

interface Props {
    className?: string;
}

export const NotFoundPage: React.FC<Props> = memo(({
    className,
}) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
});
